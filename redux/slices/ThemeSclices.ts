import { createSlice } from "@reduxjs/toolkit"

const ThemeSlices = createSlice({
    name: "theme",
    initialState: {
        value: "dark"
    },
    reducers: {
        setTheme: (state, action) => {
            state.value = action.payload
        }
    }
})

export const { setTheme } = ThemeSlices.actions
export default ThemeSlices.reducer