import { FunctionComponent } from 'react'
import Button, { ButtonProps } from './Button'

interface OutLineButtonProps {}

const OutLineButton: FunctionComponent<OutLineButtonProps & ButtonProps> = ({
  purpose = 'custom',
  rounded = 'md',
  ...props
}) => {
  let purposeClassName = {
    primary: `border-primary text-primary hover:border-primary-600 hover:text-primary-600 focus:border-primary-600 focus:text-primary-600 active:border-primary-700 active:text-primary-700`,
    secondary: `border-secondary-400 text-black hover:border-secondary-600 hover:text-black-600 focus:border-secondary-600 focus:text-black-600 active:border-secondary-700 active:text-black-700`,
    success: `border-success text-success hover:border-success-600 hover:text-success-600 focus:border-success-600 focus:text-success-600 active:border-success-700 active:text-success-700`,
    danger: `border-danger text-danger hover:border-danger-600 hover:text-danger-600 focus:border-danger-600 focus:text-danger-600 active:border-danger-700 active:text-danger-700`,
    warning: `border-warning text-warning hover:border-warning-600 hover:text-warning-600 focus:border-warning-600 focus:text-warning-600 active:border-warning-700 active:text-warning-700`,
    info: `border-info text-info hover:border-info-600 hover:text-info-600 focus:border-info-600 focus:text-info-600 active:border-info-700 active:text-info-700`,
    light: `border-light text-black hover:border-light-600 hover:text-black-600 focus:border-light-600 focus:text-black-600 active:border-light-700 active:text-black-700`,
    dark: `border-dark text-dark hover:border-dark-600 hover:text-dark-600 focus:border-dark-600 focus:text-dark-600 active:border-dark-700 active:text-dark-700`,
    link: ``,
    custom: ``,
  }[purpose]
  let className = `${purposeClassName} border-2 hover:bg-neutral-500 hover:bg-opacity-10 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10`
  return <Button {...props} rounded={rounded} className={className} />
}

export default OutLineButton
