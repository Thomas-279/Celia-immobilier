import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    returned: [],
};

export const sendMail = createSlice({
    name: 'sendMail',
    initialState: {
        name: '',
        email: '',
        phonenumber: '',
        },
        reducers: {
        setNameValue: (state, action) => { state.name = action.payload },
        setMailValue: (state, action) => { state.email = action.payload },
        setPhonenumberValue: (state, action) => { state.phonenumber = action.payload },
        resetState: () => initialState,
    },
})

// Action creators are generated for each case reducer function
export const { setNameValue, setMailValue, setPhonenumberValue, resetState } = sendMail.actions

export default sendMail.reducer