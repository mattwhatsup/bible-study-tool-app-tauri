use rusqlite::{Connection, Result};
use std::collections::HashMap;

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
