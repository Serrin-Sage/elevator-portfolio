import { createSlice } from '@reduxjs/toolkit'

export const buttonPressSlice = createSlice({
    name: "buttons",
    initialState: { value: {pressed: false}},
    reducers: {
        buttonPress: (state, action) => {
            state.value = action.payload
        }
    }
})

export const { buttonPress } = buttonPressSlice.actions;
export default buttonPressSlice.reducer;