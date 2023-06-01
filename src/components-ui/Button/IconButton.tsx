import { FunctionComponent, ReactElement } from 'react'
import Button, { ButtonProps } from './Button'

interface IconButtonProps {
  icon?: ReactElement
  iconPosition?: 'left' | 'right'
}

const IconButton: FunctionComponent<IconButtonProps & ButtonProps> = ({
  children,
  icon,
  iconPosition = 'left',
  ...props
}) => {
  return (
    <Button {...props} className="">
      {iconPosition === 'left' && icon}
      {children}
      {iconPosition === 'right' && icon}
    </Button>
  )
}

export default IconButton
