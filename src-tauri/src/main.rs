// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]
#![allow(unused)]

#[cfg(target_os = "macos")]
#[macro_use]
extern crate objc;
use tauri::Manager;

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
        .invoke_handler(tauri::generate_handler![greet])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
