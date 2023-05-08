use rusqlite::{Connection, Result};
use std::collections::HashMap;
use std::error::Error;

pub type MyResult<T> = Result<T, Box<dyn Error>>;

mod database;

// pub struct Database {
//     conn: Connection,
// }

// impl Database {
//     pub fn new() -> Self {
//         let conn = Connection::open("./resources/bible_YHWH_2018.sqlite").unwrap();
//         Database { conn }
//     }

//     pub fn get_book_names(&self) -> MyResult<Vec<String>> {
//         let mut stmt = self.conn.prepare("SELECT name_cn FROM books")?;
//         let rows = stmt.query_map([], |row| row.get(0))?;

//         let mut names = Vec::new();
//         for name_result in rows {
//             names.push(name_result?);
//         }
//         Ok(names)
//     }
// }
