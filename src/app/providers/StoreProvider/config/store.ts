import { ReducersMapObject, configureStore } from '@reduxjs/toolkit'
import { NavigateOptions, To } from 'react-router-dom'

import { counterReducer } from 'entities/Counter'
import { userReducer } from 'entities/User'

import { $api } from 'shared/api/api'

import { StateSchema } from './StateSchema'
import { createReducerManager } from './reducerManager'

export function createReduxStore(
  initialState?: StateSchema,
  asyncReducers?: ReducersMapObject,
  navigate?: (to: To, options?: NavigateOptions) => void,
) {
  const rootReducers: ReducersMapObject<StateSchema> = {
    ...asyncReducers,
    counter: counterReducer,
    user: userReducer,
  }

  const reducerManager = createReducerManager(rootReducers)

  //todo fix type any
  const store = configureStore({
    reducer: reducerManager.reduce,
    devTools: __IS_DEV__,
    preloadedState: initialState,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        thunk: {
          extraArgument: {
            api: $api,
            navigate,
          },
        },
      }),
  })
  //todo fix types
  //@ts-ignore
  store.reducerManager = reducerManager
  return store
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch']
export default createReduxStore
