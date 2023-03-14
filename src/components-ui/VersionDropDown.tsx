import './VersionDropDown.css'

interface VersionDropDownProps {}

const VersionDropDown: FunctionComponent<VersionDropDownProps> = () => {
  return (
    <div className="dropdown dropdown-bottom dropdown-start">
      <label tabIndex={0} className="btn m-1 btn-sm btn-primary">
        <i className="bi bi-book"></i>
        <span className=" ml-1">和合本</span>
      </label>
      <ul
        tabIndex={0}
        className="dropdown-content menu p-2 shadow bg-base-100 w-52 mt-1 rounded-lg text-sm"
      >
        <li>
          <a>Item 1</a>
        </li>
        <li>
          <a className="active">Item 2</a>
        </li>
        <li>
          <a>Item 3</a>
        </li>
      </ul>
    </div>
  )
}

export default VersionDropDown
