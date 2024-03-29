import { FunctionComponent } from 'react'

interface VersionDropDownProps {}

const VersionDropDown: FunctionComponent<VersionDropDownProps> = () => {
  return (
    <div className="tw-dropdown tw-dropdown-bottom tw-dropdown-end">
      <label tabIndex={0} className="tw-btn tw-m-1 tw-btn-sm tw-btn-primary">
        <i className="fa-solid fa-book-bible"></i>
        <span className="tw-ml-2">和合本</span>
      </label>
      <ul
        tabIndex={0}
        className="pop rt dropdown-menu tw-dropdown-content tw-block !tw-top-[120%] tw-shadow-lg tw-border-gray-200"
      >
        <li>
          <h6 className="dropdown-header">选择圣经版本</h6>
        </li>

        <li>
          <a className="dropdown-item" href="#">
            Action
          </a>
        </li>
        <li>
          <a className="dropdown-item active" href="#">
            Another action
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="#">
            Something else here
          </a>
        </li>
      </ul>
    </div>
  )
}

export default VersionDropDown
