import { FunctionComponent } from 'react'
import Button, { ButtonProps } from './Button'

interface GradientButtonProps {
  direction: 'l' | 'tl' | 't' | 'tr' | 'r' | 'br' | 'b' | 'bl'
  fromClassName?: string
  toClassname?: string
}

const GradientButton: FunctionComponent<GradientButtonProps & ButtonProps> = ({
  direction,
  fromClassName,
  toClassname,
  ...props
}) => {
  const directionClassName = {
    l: 'bg-gradient-to-l hover:bg-gradient-to-r',
    tl: 'bg-gradient-to-tl hover:bg-gradient-to-br',
    t: 'bg-gradient-to-t hover:bg-gradient-to-b',
    tr: 'bg-gradient-to-tr hover:bg-gradient-to-bl',
    r: 'bg-gradient-to-r hover:bg-gradient-to-l',
    br: 'bg-gradient-to-br hover:bg-gradient-to-tl',
    b: 'bg-gradient-to-b hover:bg-gradient-to-t',
    bl: 'bg-gradient-to-bl hover:bg-gradient-to-tr',
  }[direction]
  return (
    <Button
      purpose="custom"
      {...props}
      className={`${directionClassName} ${fromClassName} ${toClassname}`}
    />
  )
}

export default GradientButton
