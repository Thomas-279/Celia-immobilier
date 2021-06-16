import { createSlice } from '@reduxjs/toolkit'

export const owner = createSlice({
    name: 'owner',
    initialState: {
        name: 'Célia DREUX',
        job: 'Agent commercial en immobilier',
        mail: 'celia.dreux@kwfrance.com',
        phonenumber: '06.69.17.17.75',
        visibility: false,
        },
        reducers: {
            setVisibility: (state, action) => { state.visibility = action.payload },
        }
})

// Action creators are generated for each case reducer function
export const { setVisibility } = owner.actions

export default owner.reducer