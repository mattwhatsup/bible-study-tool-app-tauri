import { FunctionComponent } from 'react'
import './Tabs.css'

interface TabsProps {}

const Tabs: FunctionComponent<TabsProps> = () => {
  return (
    <div className="tw-flex">
      <span className="tab-scroller-control">
        <button className="tw-btn tw-btn-outline tw-btn-secondary tw-btn-xs ">
          <i className="bi bi-caret-left-fill"></i>
        </button>
        <button className="tw-btn tw-btn-outline tw-btn-secondary tw-btn-xs  tw-ml-1">
          <i className="bi bi-caret-right-fill"></i>
        </button>
      </span>

      <div className="tw-tabs tw-flex-1 tw-flex-nowrap tw-overflow-hidden">
        <label className="tw-group tw-tab tw-tab-lifted tw-relative tw-px-6">
          帖撒罗尼迦前书2章
          <span className="tw-absolute tw-top-0 tw-right-1 tw-hidden group-hover:tw-block ">
            <i className="bi bi-x-circle-fill"></i>
          </span>
        </label>

        <label className="tw-tab tw-tab-lifted tw-tab-active">罗马书1章</label>
        <label className="tw-tab tw-tab-lifted ">Normal</label>
        <span className="tw-tab tw-tab-lifted tw-flex-1 tab-placeholder">
          {/** empty */}
        </span>
      </div>
      <span className="tw-tab tab-utility-control">
        <button className="tw-btn tw-btn-primary tw-btn-xs ">
          <i className="bi bi-plus"></i>
        </button>
      </span>
    </div>
  )
}

export default Tabs
