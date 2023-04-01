import { createSlice } from '@reduxjs/toolkit'

export const elevatorFloorSlice = createSlice({
    name: "floor",
    initialState: { value: {floor: "one"}},
    reducers: {
        changeFloor: (state, action) => {
            state.value = action.payload
        }
    }
})

export const { changeFloor } = elevatorFloorSlice.actions;
export default elevatorFloorSlice.reducer;