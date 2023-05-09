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
    use crate::database::bible::query_one_verse_by_id;

    use super::{
        bible::{
            query_all_bookgroups, query_book_group_set,
            query_chapter_verses, query_one_verse,
            query_strong_number,
            search_verses_contains_strong_number,
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

    #[test]
    fn test_query_all_matthew_chapter1_verses(
    ) -> MyResult<()> {
        let conn = bible_connection()?;
        let verses = query_chapter_verses(
            &conn,
            bible::BibleVersion::csbs,
            14006,
            1,
        )?;
        assert_eq!(verses.len(), 25);
        Ok(())
    }

    #[test]
    fn test_query_matthew_chapter1_verse1() -> MyResult<()>
    {
        let conn = bible_connection()?;
        let verse = query_one_verse(
            &conn,
            bible::BibleVersion::cuvs,
            14006,
            1,
            1,
        )?;
        assert_eq!(verse.unwrap().strong_text, String::from("亚伯拉罕<WG11>的后裔<WG5207>，大卫<WG1138>的子孙<WG5207>〔后裔、子孙，原文都作儿子，下同〕，耶稣<WG2424>基督<WG5547>的家谱<WG976><WG1078>："));
        Ok(())
    }

    #[test]
    fn test_query_matthew_chapter1_verse26() -> MyResult<()>
    {
        let conn = bible_connection()?;
        let verse = query_one_verse(
            &conn,
            bible::BibleVersion::cuvs,
            14006,
            1,
            26,
        )?;
        assert!(verse.is_none());
        Ok(())
    }

    #[test]
    fn test_query_verse_id2333() -> MyResult<()> {
        let conn = bible_connection()?;
        let verse = query_one_verse_by_id(
            &conn,
            bible::BibleVersion::cuvs,
            2333,
        )?;
        assert!(verse.is_some());
        println!("{:?}", verse.unwrap());
        Ok(())
    }

    #[test]
    fn test_query_strong_number_greek_4335() -> MyResult<()>
    {
        let conn = bible_connection()?;
        let strong_item = query_strong_number(
            &conn,
            bible::Lang::Greek,
            4335,
        )?;
        assert!(strong_item.is_some());
        println!("{:?}", strong_item);
        Ok(())
    }

    #[test]
    fn test_query_strong_number_not_exists() -> MyResult<()>
    {
        let conn = bible_connection()?;
        let strong_item = query_strong_number(
            &conn,
            bible::Lang::Greek,
            14335,
        )?;
        assert!(strong_item.is_none());
        Ok(())
    }

    #[test]
    fn test_query_strong_number_hebrew_7225() -> MyResult<()>
    {
        let conn = bible_connection()?;
        let strong_item = query_strong_number(
            &conn,
            bible::Lang::Hebrew,
            7225,
        )?;
        assert!(strong_item.is_some());
        println!("{:?}", strong_item);
        Ok(())
    }

    #[test]
    fn test_search_verses_contains_strong_number_hebrew_7225(
    ) -> MyResult<()> {
        let conn = bible_connection()?;
        let verses = search_verses_contains_strong_number(
            &conn,
            bible::Lang::Hebrew,
            7225,
        )?;
        assert_eq!(verses.len(), 49);
        Ok(())
    }

    #[test]
    fn test_search_verses_contains_strong_number_hebrew_17225(
    ) -> MyResult<()> {
        let conn = bible_connection()?;
        let verses = search_verses_contains_strong_number(
            &conn,
            bible::Lang::Hebrew,
            17225,
        )?;
        assert_eq!(verses.len(), 0);
        Ok(())
    }
}
