import { createSlice } from '@reduxjs/toolkit'

export const owner = createSlice({
    name: 'owner',
    initialState: {
        name: 'Célia DREUX',
        },
        reducers: {
        // increment: (state) => {
        //     state.value += 1
        // },
        // decrement: (state) => {
        //     state.value -= 1
        // },
    },
})

// Action creators are generated for each case reducer function
// export const { increment, decrement } = owner.actions

export default owner.reducer