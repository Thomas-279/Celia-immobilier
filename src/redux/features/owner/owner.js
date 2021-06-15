import { createSlice } from '@reduxjs/toolkit'

export const owner = createSlice({
    name: 'owner',
    initialState: {
        name: 'Célia DREUX',
        visibility: false,
        },
        reducers: {
            setVisibility: (state, action) => { state.visibility = action.payload },
        }
})

// Action creators are generated for each case reducer function
export const { setVisibility } = owner.actions

export default owner.reducer