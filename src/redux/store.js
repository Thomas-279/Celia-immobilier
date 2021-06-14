import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../redux/features/counter/counterSlice'
import ownerReducer from '../redux/features/owner/owner'
import sendMailReducer from '../redux/features/sendMail/sendMail'

export default configureStore({
    reducer: {
        counter: counterReducer,
        owner: ownerReducer,
        sendMail: sendMailReducer,
    },
})