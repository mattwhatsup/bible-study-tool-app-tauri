import { invoke } from '@tauri-apps/api'

export enum BibleNameType {
  SimplifiedChiniese = 'cn',
  English = 'en',
  TraditionalChiniese = 'tr',
}

export enum BibleVersion {
  cuvs = 'cuvs',
  csbs = 'csbs',
  hcsbs = 'hcsbs',
  lebs = 'lebs',
  lzzs = 'lzzs',
  whs = 'whs',
  wlcs = 'wlcs',
}

export enum OtOrNt {
  ot = 'Ot',
  nt = 'Nt',
}

export type DataBook = {
  name_cn: string
  name_en: string
  name_tr: string
  abbr_cn: string
  abbr_en: string
  abbr_tr: string
  chapter_count: number
  pinyin: string
  pinyin_initial: string
  ot_or_nt: OtOrNt
} & Record<string, string | number>

export type DataBookGroup = {
  id: number
  name_en: string
  name_cn: string
  name_tr: string
  abbr_cn: string
  abbr_en: string
  abbr_tr: string
} & Record<string, string | number>

export type DataVerse = {
  id: number
  book_id: number
  chapter: number
  verse: number
  strong_text: string
} & Record<string, string | number>

export enum Lang {
  Hebrew = 'H',
  Greek = 'G',
}

export type DataStrongDictItem = {
  id: number
  strong_number: string
  strong_number2: string
  i_strong_number: number
  lang: Lang
  origin: string
  latin: string
  def_en: string
  def_tr: string
  def_cn: string
  des_en: string
  des_tr: string
  des_cn: string
  class_en: string
  class_tr: string
  class_cn: string
  exclude: number
}

export const bibleApi = {
  async queryAllBooks(): Promise<Array<DataBook>> {
    return await invoke('api_query_all_books')
  },
  async queryBookByName(
    name: string,
    nameType: BibleNameType,
  ): Promise<DataBook> {
    let book = await invoke('api_query_book_by_name', {
      name,
      nameType,
    })
    if (book) {
      return book as DataBook
    } else {
      throw new Error(`bookname ${name} not exist`)
    }
  },
  async queryAllBookGroups(): Promise<Array<DataBookGroup>> {
    return await invoke('api_query_all_bookgroups')
  },
  async queryBookGroupSet(groupId: number): Promise<Array<number>> {
    return await invoke('api_query_book_group_set', { groupId })
  },
  async queryChapterVerses(
    version: BibleVersion,
    bookId: number,
    chapter: number,
  ): Promise<Array<DataVerse>> {
    return await invoke('api_query_chapter_verses', {
      version,
      bookId,
      chapter,
    })
  },
  async queryOneVerse(
    version: BibleVersion,
    bookId: number,
    chapter: number,
    verse: number,
  ): Promise<DataVerse> {
    let data = await invoke('api_query_one_verse', {
      version,
      bookId,
      chapter,
      verse,
    })
    if (data) {
      return data as DataVerse
    } else {
      throw new Error('经文不存在')
    }
  },
  async queryOneVerseById(
    version: BibleVersion,
    id: number,
  ): Promise<DataVerse> {
    let data = await invoke('api_query_one_verse_by_id', {
      version,
      id,
    })
    if (data) {
      return data as DataVerse
    } else {
      throw new Error('经文不存在')
    }
  },
  async queryStrongNumber(lang: Lang, n: number): Promise<DataStrongDictItem> {
    let sn = await invoke('api_query_strong_number', {
      lang: lang === Lang.Hebrew ? 'Hebrew' : 'Greek',
      n,
    })
    if (sn) {
      return sn as DataStrongDictItem
    } else {
      throw new Error('strong number not exists')
    }
  },
  async searchVersesContainStrongNumber(
    lang: Lang,
    n: number,
  ): Promise<Array<number>> {
    return await invoke('api_search_verses_contain_strong_number', {
      lang: Lang.Hebrew ? 'Hebrew' : 'Greek',
      n,
    })
  },
}
