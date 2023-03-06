import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { LoginSchema } from 'features/AuthByUserName/model/types/loginSchema'

import { loginByUserName } from '../services/loginByUserName/loginByUserName'

const initialState: LoginSchema = {
  isLoading: false,
  username: '',
  password: '',
}

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setUserName(state, action: PayloadAction<string>) {
      state.username = action.payload
    },
    setPassword(state, action: PayloadAction<string>) {
      state.password = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginByUserName.pending, (state, action) => {
        state.error = undefined
        state.isLoading = true
      })
      .addCase(loginByUserName.fulfilled, (state, action) => {
        state.isLoading = false
      })
      .addCase(loginByUserName.rejected, (state, action) => {
        //todo fix types
        // @ts-ignore
        state.error = action.payload
        state.isLoading = false
      })
  },
})
export const { actions: loginActions } = loginSlice
export const { reducer: loginReducer } = loginSlice
