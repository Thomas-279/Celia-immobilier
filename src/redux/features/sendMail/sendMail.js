import { createSlice } from '@reduxjs/toolkit'

export const sendMail = createSlice({
    name: 'sendMail',
    initialState: {
        name: '',
        email: '',
        phonenumber: '',
        },
        reducers: {
        // increment: (state) => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
        //     state.value += 1
        // },
        setNameValue: (state, action) => { state.name = action.payload },
        setMailValue: (state, action) => { state.email = action.payload },
        setPhonenumberValue: (state, action) => { state.phonenumber = action.payload }
    },
})

// Action creators are generated for each case reducer function
export const { setNameValue, setMailValue, setPhonenumberValue } = sendMail.actions

export default sendMail.reducer