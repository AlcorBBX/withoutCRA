import { useDispatch } from 'react-redux'

import { AppDispatch } from 'app/providers/router/StoreProvider'

export const useAppDispatch = () => useDispatch<AppDispatch>()
