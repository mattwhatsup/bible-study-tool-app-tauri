import { FunctionComponent } from 'react'
import './BookList.css'

interface BookListProps {}

const BookList: FunctionComponent<BookListProps> = () => {
  return (
    <div className="">
      <div className="tw-flex tw-items-center book-list-header">
        <span className=" tw-font-bold">书</span>

        <div className=" tw-flex-1 tw-relative">
          <i className="fa fa-search tw-absolute tw-left-3 tw-top-2 tw-text-gray-400"></i>
          <input
            type="text"
            className="form-control form-control-sm tw-pl-8 tw-rounded-2xl"
            placeholder="过滤..."
          />
        </div>

        <label className=" tw-swap tw-swap-rotate tw-ml-2">
          <input type="checkbox" />

          <i className="fa fa-th tw-swap-off" aria-hidden="true" />

          <i className="fa fa-bars tw-swap-on" aria-hidden="true" />
        </label>

        {/* <div>
          <i className="fa fa-th" aria-hidden="true" />
        </div> */}
      </div>
      <div className="list-content">
        <div className="">
          <div className=" tw-text-lg tw-mt-2">旧约</div>
          <ul className="book-grid tw-mt-2">
            <li>
              <span>创</span>
            </li>
            <li className="active">
              <span>出</span>
            </li>
            <li>
              <span>利</span>
            </li>
            <li>
              <span>民</span>
            </li>
            <li>
              <span>申</span>
            </li>
            <li>
              <span>书</span>
            </li>
            <li>
              <span>士</span>
            </li>
            <li>
              <span>得</span>
            </li>
            <li>
              <span>撒上</span>
            </li>
            <li>
              <span>撒下</span>
            </li>
            <li>
              <span>王上</span>
            </li>
            <li>
              <span>王下</span>
            </li>
            <li>
              <span>代上</span>
            </li>
            <li>
              <span>代下</span>
            </li>
            <li>
              <span>拉</span>
            </li>
            <li>
              <span>尼</span>
            </li>
            <li>
              <span>斯</span>
            </li>
            <li>
              <span>伯</span>
            </li>
            <li>
              <span>诗</span>
            </li>
            <li>
              <span>箴</span>
            </li>
            <li>
              <span>传</span>
            </li>
            <li>
              <span>歌</span>
            </li>
            <li>
              <span>赛</span>
            </li>
            <li>
              <span>耶</span>
            </li>
            <li>
              <span>哀</span>
            </li>
            <li>
              <span>结</span>
            </li>
            <li>
              <span>但</span>
            </li>
            <li>
              <span>何</span>
            </li>
            <li>
              <span>珥</span>
            </li>
            <li>
              <span>摩</span>
            </li>
            <li>
              <span>俄</span>
            </li>
            <li>
              <span>拿</span>
            </li>
            <li>
              <span>弥</span>
            </li>
            <li>
              <span>鸿</span>
            </li>
            <li>
              <span>哈</span>
            </li>
            <li>
              <span>番</span>
            </li>
            <li>
              <span>该</span>
            </li>
            <li>
              <span>亚</span>
            </li>
            <li>
              <span>玛</span>
            </li>
          </ul>
        </div>

        <div>
          <div className=" tw-text-lg tw-mt-2">旧约</div>
          <ul className="book-list tw-mt-2">
            <li className="active">
              <span>创世记</span>
            </li>
            <li>
              <span>出埃及记</span>
            </li>
            <li>
              <span>利未记</span>
            </li>
            <li>
              <span>民数记</span>
            </li>
            <li>
              <span>申命记</span>
            </li>
            <li>
              <span>约书亚记</span>
            </li>
            <li>
              <span>士师记</span>
            </li>
            <li>
              <span>路得记</span>
            </li>
            <li>
              <span>撒母耳记上</span>
            </li>
            <li>
              <span>撒母耳记下</span>
            </li>
            <li>
              <span>列王纪上</span>
            </li>
            <li>
              <span>列王纪下</span>
            </li>
            <li>
              <span>歷代志上</span>
            </li>
            <li>
              <span>歷代志下</span>
            </li>
            <li>
              <span>以斯拉记</span>
            </li>
            <li>
              <span>尼希米记</span>
            </li>
            <li>
              <span>以斯帖记</span>
            </li>
            <li>
              <span>约伯记</span>
            </li>
            <li>
              <span>诗篇</span>
            </li>
            <li>
              <span>箴言</span>
            </li>
            <li>
              <span>传道书</span>
            </li>
            <li>
              <span>雅歌</span>
            </li>
            <li>
              <span>以赛亚书</span>
            </li>
            <li>
              <span>耶利米书</span>
            </li>
            <li>
              <span>耶利米哀歌</span>
            </li>
            <li>
              <span>以西结书</span>
            </li>
            <li>
              <span>但以理书</span>
            </li>
            <li>
              <span>何西阿书</span>
            </li>
            <li>
              <span>约珥书</span>
            </li>
            <li>
              <span>阿摩司书</span>
            </li>
            <li>
              <span>俄巴底亚书</span>
            </li>
            <li>
              <span>约拿书</span>
            </li>
            <li>
              <span>弥迦书</span>
            </li>
            <li>
              <span>那鸿书</span>
            </li>
            <li>
              <span>哈巴谷书</span>
            </li>
            <li>
              <span>西番雅书</span>
            </li>
            <li>
              <span>哈该书</span>
            </li>
            <li>
              <span>撒迦利亚书</span>
            </li>
            <li>
              <span>玛拉基书</span>
            </li>
          </ul>
        </div>
        <div>
          <div className=" tw-text-lg tw-mt-2">新约</div>
          <ul className="book-list tw-mt-2">
            <li>
              <span>马太福音</span>
            </li>
            <li>
              <span>马可福音</span>
            </li>
            <li>
              <span>路加福音</span>
            </li>
            <li>
              <span>约翰福音</span>
            </li>
            <li>
              <span>使徒行传</span>
            </li>
            <li>
              <span>罗马书</span>
            </li>
            <li>
              <span>哥林多前书</span>
            </li>
            <li>
              <span>哥林多后书</span>
            </li>
            <li>
              <span>加拉太书</span>
            </li>
            <li>
              <span>以弗所书</span>
            </li>
            <li>
              <span>腓利比书</span>
            </li>
            <li>
              <span>歌罗西书</span>
            </li>
            <li>
              <span>帖撒罗尼迦前书</span>
            </li>
            <li>
              <span>帖撒罗尼迦后书</span>
            </li>
            <li>
              <span>提摩太前书</span>
            </li>
            <li>
              <span>提摩太后书</span>
            </li>
            <li>
              <span>提多书</span>
            </li>
            <li>
              <span>腓利门书</span>
            </li>
            <li>
              <span>希伯来书</span>
            </li>
            <li>
              <span>雅各书</span>
            </li>
            <li>
              <span>彼得前书</span>
            </li>
            <li>
              <span>彼得后书</span>
            </li>
            <li>
              <span>约翰壹书</span>
            </li>
            <li>
              <span>约翰贰书</span>
            </li>
            <li>
              <span>约翰参书</span>
            </li>
            <li>
              <span>犹大书</span>
            </li>
            <li>
              <span>启示录</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default BookList
