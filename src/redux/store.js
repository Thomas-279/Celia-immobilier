import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../redux/features/counter/counterSlice'
import ownerReducer from '../redux/features/owner/owner'

export default configureStore({
    reducer: {
        counter: counterReducer,
        owner: ownerReducer,
    },
})