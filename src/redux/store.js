import { configureStore } from '@reduxjs/toolkit'
import ownerReducer from '../redux/features/owner/owner'
import sendMailReducer from '../redux/features/sendMail/sendMail'
import adsReducer from '../redux/features/ads/ads'

export default configureStore({
    reducer: {
        owner: ownerReducer,
        sendMail: sendMailReducer,
        ads: adsReducer,
    },
})