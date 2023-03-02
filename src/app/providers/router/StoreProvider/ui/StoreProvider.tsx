import { ReactNode } from 'react'

import { DeepPartial, ReducersMapObject } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { StateSchema } from '../config/StateSchema'
import createReduxStore from '../config/store'

interface StoreProviderProps {
  children?: ReactNode | any //todo fix any
  initialState?: DeepPartial<StateSchema>
  asyncReducers?: DeepPartial<ReducersMapObject>
}

export const StoreProvider = ({
  children,
  initialState,
  asyncReducers
}: StoreProviderProps) => {
  const navigate = useNavigate()

  const store = createReduxStore(
    initialState as StateSchema,
    asyncReducers as ReducersMapObject<StateSchema>,
    navigate
  )
  return <Provider store={store}>{children}</Provider>
}
