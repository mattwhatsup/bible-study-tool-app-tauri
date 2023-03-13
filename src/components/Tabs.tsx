import { FunctionComponent } from 'react'
import './Tabs.css'

interface TabsProps {}

const Tabs: FunctionComponent<TabsProps> = () => {
  return (
    <div className="flex">
      <span className="tab-scroller-control">
        <button className="btn btn-outline btn-secondary btn-xs ">
          <i className="bi bi-caret-left-fill"></i>
        </button>
        <button className="btn btn-outline btn-secondary btn-xs  ml-1">
          <i className="bi bi-caret-right-fill"></i>
        </button>
      </span>

      <div className="tabs flex-1 flex-nowrap overflow-hidden">
        <a className="group tab tab-lifted relative px-6">
          帖撒罗尼迦前书2章
          <span className="absolute top-0 right-1 hidden group-hover:block ">
            <i className="bi bi-x-circle-fill"></i>
          </span>
        </a>
        <a className="group tab tab-lifted relative px-6">
          帖撒罗尼迦前书2章
          <span className="absolute top-0 right-1 hidden group-hover:block ">
            <i className="bi bi-x-circle-fill"></i>
          </span>
        </a>
        <a className="group tab tab-lifted relative px-6">
          帖撒罗尼迦前书2章
          <span className="absolute top-0 right-1 hidden group-hover:block ">
            <i className="bi bi-x-circle-fill"></i>
          </span>
        </a>
        <a className="group tab tab-lifted relative px-6">
          帖撒罗尼迦前书2章
          <span className="absolute top-0 right-1 hidden group-hover:block ">
            <i className="bi bi-x-circle-fill"></i>
          </span>
        </a>
        <a className="group tab tab-lifted relative px-6">
          帖撒罗尼迦前书2章
          <span className="absolute top-0 right-1 hidden group-hover:block ">
            <i className="bi bi-x-circle-fill"></i>
          </span>
        </a>
        <a className="group tab tab-lifted relative px-6">
          帖撒罗尼迦前书2章
          <span className="absolute top-0 right-1 hidden group-hover:block ">
            <i className="bi bi-x-circle-fill"></i>
          </span>
        </a>
        <a className="group tab tab-lifted relative px-6">
          帖撒罗尼迦前书2章
          <span className="absolute top-0 right-1 hidden group-hover:block ">
            <i className="bi bi-x-circle-fill"></i>
          </span>
        </a>
        <a className="group tab tab-lifted relative px-6">
          帖撒罗尼迦前书2章
          <span className="absolute top-0 right-1 hidden group-hover:block ">
            <i className="bi bi-x-circle-fill"></i>
          </span>
        </a>
        <a className="group tab tab-lifted relative px-6">
          帖撒罗尼迦前书2章
          <span className="absolute top-0 right-1 hidden group-hover:block ">
            <i className="bi bi-x-circle-fill"></i>
          </span>
        </a>
        <a className="group tab tab-lifted relative px-6">
          帖撒罗尼迦前书2章
          <span className="absolute top-0 right-1 hidden group-hover:block ">
            <i className="bi bi-x-circle-fill"></i>
          </span>
        </a>
        <a className="group tab tab-lifted relative px-6">
          帖撒罗尼迦前书2章
          <span className="absolute top-0 right-1 hidden group-hover:block ">
            <i className="bi bi-x-circle-fill"></i>
          </span>
        </a>

        <a className="tab tab-lifted tab-active">罗马书1章</a>
        <a className="tab tab-lifted ">Normal</a>
        <span className="tab tab-lifted flex-1 tab-placeholder">
          {/** empty */}
        </span>
      </div>
      <span className="tab tab-utility-control">
        <button className="btn btn-primary btn-xs ">
          <i className="bi bi-plus"></i>
        </button>
      </span>
    </div>
  )
}

export default Tabs
