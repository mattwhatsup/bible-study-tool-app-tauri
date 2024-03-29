import { FunctionComponent, MouseEvent } from 'react'

interface BibleSelectorItemProps {
  label: string | number
  active: boolean
  onClick: (event: MouseEvent<HTMLElement>) => void
}

const BibleSelectorItem: FunctionComponent<BibleSelectorItemProps> = ({
  label,
  active,
  onClick,
}) => {
  return (
    <li className={active ? 'active' : ''} onClick={onClick}>
      <span>{label}</span>
    </li>
  )
}

export default BibleSelectorItem
