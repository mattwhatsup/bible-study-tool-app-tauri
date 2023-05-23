import { FunctionComponent, ReactNode, createContext } from 'react'
import allBooks from './all-books.json'
import { DataBook } from '../../app/api'

export const BibleSelectorContext = createContext<Array<DataBook>>([])

interface BibleSelectorContextProviderProps {
  children: ReactNode
}

const BibleSelectorContextProvider: FunctionComponent<
  BibleSelectorContextProviderProps
> = ({ children }) => {
  return (
    <BibleSelectorContext.Provider value={allBooks as Array<DataBook>}>
      {children}
    </BibleSelectorContext.Provider>
  )
}

export default BibleSelectorContextProvider
