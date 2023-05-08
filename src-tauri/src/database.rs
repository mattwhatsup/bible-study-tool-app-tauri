use crate::MyResult;
use rusqlite::Connection;

pub mod bible;

pub fn bible_connection() -> MyResult<Connection> {
    let conn =
        Connection::open("./resources/bible-data.db")?;
    Ok(conn)
}

#[cfg(test)]
mod tests {
    use super::*;
    #[test]
    fn test_bible_connection() {
        let conn = bible_connection();
        assert!(conn.is_ok());
    }

    #[test]
    fn test_query_all_books() -> MyResult<()> {
        let conn = bible_connection()?;
        let books = bible::query_all_books(&conn)?;
        assert_eq!(books.len(), 66);
        Ok(())
    }

    #[test]
    fn test_query_one_book_availible() -> MyResult<()> {
        let conn = bible_connection()?;
        let book = bible::query_book_by_name(
            &conn,
            "马太福音".to_string(),
            bible::BookNameType::SimplifiedChinese,
        )?;
        assert!(book.is_some());
        Ok(())
    }

    #[test]
    fn test_query_one_book_unavailible() -> MyResult<()> {
        let conn = bible_connection()?;
        let book = bible::query_book_by_name(
            &conn,
            "马太福".to_string(),
            bible::BookNameType::SimplifiedChinese,
        )?;
        assert!(book.is_none());
        Ok(())
    }
}
