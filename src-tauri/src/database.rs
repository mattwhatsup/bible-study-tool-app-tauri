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
    use super::{
        bible::{
            query_all_bookgroups, query_book_group_set,
        },
        *,
    };
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

    #[test]
    fn test_query_all_bookgroups() -> MyResult<()> {
        let conn = bible_connection()?;
        let bookgroups = query_all_bookgroups(&conn)?;
        assert_eq!(bookgroups.len(), 20);
        Ok(())
    }

    #[test]
    fn test_query_all_peters_letters_by_groupid(
    ) -> MyResult<()> {
        let conn = bible_connection()?;
        let book_ids = query_book_group_set(&conn, 6)?;
        assert_eq!(book_ids, vec![142214, 143978]);
        Ok(())
    }
}
