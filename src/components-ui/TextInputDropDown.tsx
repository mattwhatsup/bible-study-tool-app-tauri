import { FunctionComponent } from 'react'

interface TextInputDropDownProps {}

const TextInputDropDown: FunctionComponent<TextInputDropDownProps> = () => {
  return (
    <div className="tw-dropdown">
      <input
        type="text"
        placeholder=""
        className="tw-input-sm tw-rounded-full"
      />
      <ul
        tabIndex={0}
        className="lt dropdown-menu tw-dropdown-content tw-block !tw-top-[120%] tw-shadow-lg tw-border-gray-200"
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

export default TextInputDropDown
