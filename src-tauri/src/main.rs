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
use tauri::Manager;

// -- use Tauri State
use std::{collections::HashMap, sync::Mutex};
use tauri::State;

use bible_study_tool_app::database::bible::{
    query_all_books, Book,
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
fn be_query_all_books(
    connection: State<DbConnection>,
) -> Vec<Book> {
    let db = connection.db.lock();
    let conn = db.as_ref().unwrap().as_ref().unwrap();
    query_all_books(conn).unwrap()
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
            be_query_all_books
        ])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
