import { StateSchema } from 'app/providers/router/StoreProvider'

export const getLoginState = (state: StateSchema) =>
  state?.loginForm ?? { username: '', password: '', isLoading: false }
