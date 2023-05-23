// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(
    not(debug_assertions),
    windows_subsystem = "windows"
)]
// #![allow(unused)]

#[cfg(target_os = "macos")]
#[macro_use]
extern crate objc;
// use bible_study_tool_app::Database;
use rusqlite::Connection;
use tauri::{http::version, Manager};

// -- use Tauri State
use std::{collections::HashMap, sync::Mutex};
use tauri::State;

use bible_study_tool_app::database::bible::{
    query_all_bookgroups, query_all_books,
    query_all_chapter_verses_count, query_book_by_name,
    query_book_group_set, query_chapter_verses,
    query_one_verse, query_one_verse_by_id,
    query_strong_number,
    search_verses_contain_strong_number, BibleVersion,
    Book, BookGroup, BookNameType, ChapterVersesCount,
    Lang, StrongDictItem, Verse,
};

struct DbConnection {
    db: Mutex<Option<Connection>>,
}

#[tauri::command]
fn connect(connection: State<DbConnection>) {
    *connection.db.lock().unwrap() = Some(
        Connection::open(
            "./resources/bible_YHWH_2018.sqlite",
        )
        .unwrap(),
    );
}

#[tauri::command]
fn sample_query(
    some_param: i32,
    connection: State<DbConnection>,
) -> Vec<String> {
    println!("some_param={}", some_param);

    let db = connection.db.lock();
    let conn = db.as_ref().unwrap().as_ref().unwrap();
    let mut stmt = conn
        .prepare("SELECT name_en FROM bible_book")
        .unwrap();
    let rows =
        stmt.query_map([], |row| row.get(0)).unwrap();

    let mut names = Vec::new();
    for name_result in rows {
        names.push(name_result.unwrap());
    }
    names
}

// Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
#[tauri::command]
fn greet(name: &str) -> String {
    format!(
        "Hello, {}! You've been greeted from Rust!",
        name
    )
}

#[tauri::command]
fn api_query_all_books(
    connection: State<DbConnection>,
) -> Vec<Book> {
    let db = connection.db.lock();
    let conn = db.as_ref().unwrap().as_ref().unwrap();
    query_all_books(conn).unwrap()
}

#[tauri::command]
fn api_query_book_by_name(
    connection: State<DbConnection>,
    name: String,
    name_type: String,
) -> Option<Book> {
    let db = connection.db.lock();
    let conn = db.as_ref().unwrap().as_ref().unwrap();
    let name_type = match name_type.as_str() {
        "cn" => BookNameType::SimplifiedChinese,
        "en" => BookNameType::English,
        "tr" => BookNameType::TraditionalChinese,
        _ => panic!("unknown book lang type"),
    };
    query_book_by_name(conn, name, name_type).unwrap()
}

#[tauri::command]
fn api_query_all_bookgroups(
    connection: State<DbConnection>,
) -> Vec<BookGroup> {
    let db = connection.db.lock();
    let conn = db.as_ref().unwrap().as_ref().unwrap();

    query_all_bookgroups(conn).unwrap()
}

#[tauri::command]
fn api_query_book_group_set(
    connection: State<DbConnection>,
    groupId: i32,
) -> Vec<i32> {
    let db = connection.db.lock();
    let conn = db.as_ref().unwrap().as_ref().unwrap();

    query_book_group_set(conn, groupId).unwrap()
}

#[tauri::command]
fn api_query_chapter_verses(
    connection: State<DbConnection>,
    version: BibleVersion,
    book_id: i32,
    chapter: i32,
) -> Vec<Verse> {
    let db = connection.db.lock();
    let conn = db.as_ref().unwrap().as_ref().unwrap();

    query_chapter_verses(conn, version, book_id, chapter)
        .unwrap()
}

#[tauri::command]
fn api_query_one_verse(
    connection: State<DbConnection>,
    version: BibleVersion,
    book_id: i32,
    chapter: i32,
    verse: i32,
) -> Option<Verse> {
    let db = connection.db.lock();
    let conn = db.as_ref().unwrap().as_ref().unwrap();

    query_one_verse(conn, version, book_id, chapter, verse)
        .unwrap()
}

#[tauri::command]
fn api_query_one_verse_by_id(
    connection: State<DbConnection>,
    version: BibleVersion,
    id: i32,
) -> Option<Verse> {
    let db = connection.db.lock();
    let conn = db.as_ref().unwrap().as_ref().unwrap();

    query_one_verse_by_id(conn, version, id).unwrap()
}

#[tauri::command]
fn api_query_strong_number(
    connection: State<DbConnection>,
    lang: Lang,
    n: i32,
) -> Option<StrongDictItem> {
    let db = connection.db.lock();
    let conn = db.as_ref().unwrap().as_ref().unwrap();

    query_strong_number(conn, lang, n).unwrap()
}

#[tauri::command]
fn api_search_verses_contain_strong_number(
    connection: State<DbConnection>,
    lang: Lang,
    n: i32,
) -> Vec<i32> {
    let db = connection.db.lock();
    let conn = db.as_ref().unwrap().as_ref().unwrap();

    search_verses_contain_strong_number(conn, lang, n)
        .unwrap()
}

#[tauri::command]
fn api_query_all_chapter_verses_count(
    connection: State<DbConnection>,
) -> Vec<ChapterVersesCount> {
    let db = connection.db.lock();
    let conn = db.as_ref().unwrap().as_ref().unwrap();

    query_all_chapter_verses_count(conn).unwrap()
}

fn main() {
    tauri::Builder::default()
        .setup(|app| {
            #[cfg(debug_assertions)]
            // only include this code on debug builds
            {
                let window =
                    app.get_window("main").unwrap();
                window.open_devtools();
            }
            Ok(())
        })
        .manage(DbConnection {
            // db: Default::default(),
            db: Mutex::new(Some(
                Connection::open(
                    "./resources/bible-data.db",
                )
                .unwrap(),
            )),
        })
        .invoke_handler(tauri::generate_handler![
            connect,
            greet,
            sample_query,
            api_query_all_books,
            api_query_book_by_name,
            api_query_all_bookgroups,
            api_query_book_group_set,
            api_query_chapter_verses,
            api_query_one_verse,
            api_query_one_verse_by_id,
            api_query_strong_number,
            api_search_verses_contain_strong_number,
            api_query_all_chapter_verses_count
        ])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
