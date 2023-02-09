import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  category : "all"
}

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setCategoryValue: (state, action) => {
      state.category = action.payload
    }
  },
})

export const { setCategoryValue } = appSlice.actions
export default appSlice.reducer