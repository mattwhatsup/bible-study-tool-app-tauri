use rusqlite::{Connection, Row};

use crate::MyResult;

#[derive(Debug, serde::Serialize)]
pub enum OtOrNt {
    Ot,
    Nt,
}

#[derive(Debug, serde::Serialize)]
pub struct Book {
    id: i32,
    name_cn: String,
    name_en: String,
    name_tr: String,
    display_order: u16,
    abbr_cn: String,
    abbr_en: String,
    abbr_tr: String,
    chapter_count: u16,
    pinyin: String,
    pinyin_initial: String,
    ot_or_nt: OtOrNt,
}

fn book_from_row(row: &Row) -> MyResult<Book> {
    Ok(Book {
        id: row.get(0)?,
        name_cn: row.get(1)?,
        name_en: row.get(2)?,
        name_tr: row.get(3)?,
        display_order: row.get(4)?,
        abbr_cn: row.get(5)?,
        abbr_en: row.get(6)?,
        abbr_tr: row.get(7)?,
        chapter_count: row.get(8)?,
        pinyin: row.get(9)?,
        pinyin_initial: row.get(10)?,
        ot_or_nt: match row.get::<_, String>(11)?.as_str() {
            "H" => OtOrNt::Ot,
            _ => OtOrNt::Nt,
        },
    })
}

pub fn query_all_books(
    conn: &Connection,
) -> MyResult<Vec<Book>> {
    let mut stmt =
        conn.prepare("SELECT * FROM bible_book")?;
    let rows = stmt.query_map([], |row| {
        Ok(book_from_row(row).unwrap())
    })?;
    let mut books = vec![];
    for row in rows {
        books.push(row?);
    }

    Ok(books)
}

pub enum BookNameType {
    English,
    SimplifiedChinese,
    TraditionalChinese,
}
pub fn query_book_by_name(
    conn: &Connection,
    name: String,
    name_type: BookNameType,
) -> MyResult<Option<Book>> {
    let mut stmt = conn.prepare(
        format!("SELECT * FROM bible_book WHERE {type}=:name", type = match name_type {
            BookNameType::English => "name_en",
            BookNameType::SimplifiedChinese => {
                "name_cn"
            }
            _ => "name_tr",
        }).as_str(),
    )?;
    let row = stmt.query_row(&[(":name", &name)], |row| {
        Ok(book_from_row(row).unwrap())
    });
    Ok(match row {
        Ok(book) => Some(book),
        _ => None,
    })
}

#[derive(Debug)]
pub struct BookGroup {
    id: i32,
    ot_or_nt: OtOrNt,
    name_en: String,
    name_cn: String,
    name_tr: String,
    seq: i32,
    abbr_cn: String,
    abbr_en: String,
    abbr_tr: String,
}

pub fn query_all_bookgroups(
    conn: &Connection,
) -> MyResult<Vec<BookGroup>> {
    let mut stmt =
        conn.prepare("SELECT * FROM bible_bookgroup")?;

    let rows = stmt.query_map([], |row| {
        Ok(BookGroup {
            id: row.get(0)?,
            ot_or_nt: match row
                .get::<_, String>(1)?
                .as_str()
            {
                "H" => OtOrNt::Ot,
                _ => OtOrNt::Nt,
            },
            name_cn: row.get(2)?,
            name_en: row.get(3)?,
            name_tr: row.get(4)?,
            seq: row.get(5)?,
            abbr_cn: row.get(6)?,
            abbr_en: row.get(7)?,
            abbr_tr: row.get(8)?,
        })
    })?;
    let mut bookgroups = vec![];
    for row in rows {
        bookgroups.push(row?);
    }
    Ok(bookgroups)
}

pub fn query_book_group_set(
    conn: &Connection,
    groupId: i32,
) -> MyResult<Vec<i32>> {
    let mut stmt = conn.prepare(
        "SELECT book_id FROM bible_bookgroup_books WHERE bookgroup_id=:bookgroup_id"
    )?;

    let rows = stmt.query_map(
        &[(":bookgroup_id", &groupId.to_string())],
        |row| Ok(row.get::<_, i32>(0)?),
    )?;
    Ok(rows.map(|row| row.unwrap()).collect())
}
