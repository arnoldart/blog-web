import { createSlice } from "@reduxjs/toolkit"

const ThemeSlices = createSlice({
  name: "theme",
  initialState: {
    theme: "dark"
  },
  reducers: {
    setTheme: (state, action) => {
        state.theme = action.payload
    }
  }
})

export const { setTheme } = ThemeSlices.actions
export default ThemeSlices.reducer