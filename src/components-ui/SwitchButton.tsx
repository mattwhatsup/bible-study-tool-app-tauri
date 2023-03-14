import './SwitchButton.css'

interface SwitchButtonProps {}

const SwitchButton: FunctionComponent<SwitchButtonProps> = () => {
  return (
    <button className="tw-btn tw-btn-primary tw-btn-sm switch-btn">
      <i className="bi bi-toggle-on"></i>
      <span>原文</span>
    </button>
  )
}

export default SwitchButton
