import { FunctionComponent } from 'react'
import BibleViewTabs from '../Tabs/BibleViewTabs'
import BibleSelector from '../BibleSelector'
import {
  selectActivedTab,
  setTabInfo,
} from '../../features/bibleBrowser/bibleBrowserSlice'
import { useDispatch, useSelector } from 'react-redux'
import { omit } from 'lodash'

interface BibleBrowserHeaderProps {}

const BibleBrowserHeader: FunctionComponent<BibleBrowserHeaderProps> = () => {
  const activeTab = useSelector(selectActivedTab)
  const dispatch = useDispatch()

  return (
    <div className="mt-1">
      <BibleViewTabs />
      <div className="p-2">
        <BibleSelector
          onChange={(selected) => {
            dispatch(
              setTabInfo({
                uniqId: activeTab.info.uniqId,
                info: selected,
              }),
            )
          }}
          selected={omit(activeTab.info, 'uniqId')}
        />
      </div>
    </div>
  )
}

export default BibleBrowserHeader
