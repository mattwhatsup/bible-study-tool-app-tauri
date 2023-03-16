use rusqlite::{Connection, Result};
use std::collections::HashMap;
use std::error::Error;

pub fn test_echo(str: String) {
    println!("{}", str);
}

pub fn test_sql_query() -> Result<Vec<String>> {
    let conn = Connection::open("./resources/bible_YHWH_2018.sqlite")?;
    let mut stmt = conn.prepare("SELECT name_cn FROM books")?;
    let rows = stmt.query_map([], |row| row.get(0))?;

    let mut names = Vec::new();
    for name_result in rows {
        names.push(name_result?);
    }

    Ok(names)
}

// ----

type MyResult<T> = Result<T, Box<dyn Error>>;

pub struct Database {
    conn: Connection,
}

impl Database {
    pub fn new() -> Self {
        let conn = Connection::open("./resources/bible_YHWH_2018.sqlite").unwrap();
        Database { conn }
    }

    pub fn get_book_names(&self) -> MyResult<Vec<String>> {
        let mut stmt = self.conn.prepare("SELECT name_cn FROM books")?;
        let rows = stmt.query_map([], |row| row.get(0))?;

        let mut names = Vec::new();
        for name_result in rows {
            names.push(name_result?);
        }
        Ok(names)
    }
}
