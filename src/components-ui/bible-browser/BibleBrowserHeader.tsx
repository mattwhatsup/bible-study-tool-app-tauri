import { FunctionComponent } from 'react'
import BibleViewTabs from '../Tabs/BibleViewTabs'
import BibleSelector from '../BibleSelector'

interface BibleBrowserHeaderProps {}

const BibleBrowserHeader: FunctionComponent<BibleBrowserHeaderProps> = () => {
  return (
    <div className="mt-1">
      <BibleViewTabs />
      <div className="p-2">
        <BibleSelector
          onChange={(selected) => {
            console.log(selected)
          }}
        />
      </div>
    </div>
  )
}

export default BibleBrowserHeader
