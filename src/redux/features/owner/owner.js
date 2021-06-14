import { createSlice } from '@reduxjs/toolkit'

export const owner = createSlice({
    name: 'owner',
    initialState: {
        name: 'Célia DREUX',
        },
})

// Action creators are generated for each case reducer function
// export const { increment, decrement } = owner.actions

export default owner.reducer