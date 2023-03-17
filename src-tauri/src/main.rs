// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]
// #![allow(unused)]

#[cfg(target_os = "macos")]
#[macro_use]
extern crate objc;
use bible_study_tool_app::{test_echo, test_sql_query, Database};
use rusqlite::Connection;
use tauri::Manager;

// -- use Tauri State
use std::{collections::HashMap, sync::Mutex};
use tauri::State;

struct DbConnection {
    db: Mutex<Option<Connection>>,
}

#[tauri::command]
fn connect(connection: State<DbConnection>) {
    *connection.db.lock().unwrap() =
        Some(Connection::open("./resources/bible_YHWH_2018.sqlite").unwrap());
}

#[tauri::command]
fn query_2(connection: State<DbConnection>) -> Vec<String> {
    let db = connection.db.lock();
    let conn = db.as_ref().unwrap().as_ref().unwrap();
    let mut stmt = conn.prepare("SELECT name_cn FROM books").unwrap();
    let rows = stmt.query_map([], |row| row.get(0)).unwrap();

    let mut names = Vec::new();
    for name_result in rows {
        names.push(name_result.unwrap());
    }
    names
}

#[tauri::command]
fn query_3(some_param: i32, connection: State<DbConnection>) -> Vec<String> {
    println!("some_param={}", some_param);

    let db = connection.db.lock();
    let conn = db.as_ref().unwrap().as_ref().unwrap();
    let mut stmt = conn.prepare("SELECT name_en FROM books").unwrap();
    let rows = stmt.query_map([], |row| row.get(0)).unwrap();

    let mut names = Vec::new();
    for name_result in rows {
        names.push(name_result.unwrap());
    }
    names
}

// -- end

#[tauri::command]
fn test_echo_fn() {
    test_echo("hahah".to_string())
}

#[tauri::command]
fn test_sql_query_fn() -> Vec<String> {
    let names = test_sql_query();
    names.unwrap()
}

#[tauri::command]
fn test_sql_query_fn2() -> Vec<String> {
    Database::new().get_book_names().unwrap()
}

// Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
#[tauri::command]
fn greet(name: &str) -> String {
    format!("Hello, {}! You've been greeted from Rust!", name)
}

fn main() {
    tauri::Builder::default()
        // .setup(|app| {
        //     let main_window = app.get_window("main").unwrap();
        //     main_window.with_webview(|webview| {
        //         #[cfg(target_os = "linux")]
        //         {
        //             // see https://docs.rs/webkit2gtk/0.18.2/webkit2gtk/struct.WebView.html
        //             // and https://docs.rs/webkit2gtk/0.18.2/webkit2gtk/trait.WebViewExt.html
        //             use webkit2gtk::traits::WebViewExt;
        //             webview.inner().set_zoom_level(4.);
        //         }
        //         #[cfg(windows)]
        //         unsafe {
        //             // see https://docs.rs/webview2-com/0.19.1/webview2_com/Microsoft/Web/WebView2/Win32/struct.ICoreWebView2Controller.html
        //             webview.controller().SetZoomFactor(4.).unwrap();
        //         }
        //         #[cfg(target_os = "macos")]
        //         unsafe {
        //             // let () = msg_send![webview.inner(), setPageZoom: 4.];
        //             // let () = msg_send![webview.controller(), removeAllUserScripts];
        //             let bg_color: cocoa::base::id =
        //                 msg_send![class!(NSColor), colorWithDeviceRed:0. green:0. blue:0. alpha:0.];
        //             let () = msg_send![webview.ns_window(), setBackgroundColor: bg_color];
        //         }
        //     });
        //     Ok(())
        // })
        .manage(DbConnection {
            // db: Default::default(),
            db: Mutex::new(Some(
                Connection::open("./resources/bible_YHWH_2018.sqlite").unwrap(),
            )),
        })
        .invoke_handler(tauri::generate_handler![
            connect,
            query_2,
            query_3,
            greet,
            test_echo_fn,
            test_sql_query_fn,
            test_sql_query_fn2
        ])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
