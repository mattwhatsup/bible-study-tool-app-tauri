import './VersionDropDown.css'

interface VersionDropDownProps {}

const VersionDropDown: FunctionComponent<VersionDropDownProps> = () => {
  return (
    <div className="tw-dropdown tw-dropdown-bottom tw-dropdown-start">
      <label tabIndex={0} className="tw-btn tw-m-1 tw-btn-sm tw-btn-primary">
        <i className="bi bi-book"></i>
        <span className="tw-ml-2">和合本</span>
      </label>
      <ul tabIndex={0} className="dropdown-menu tw-dropdown-content tw-block">
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
