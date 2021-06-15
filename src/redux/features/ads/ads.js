import { createSlice } from '@reduxjs/toolkit'

import data from '../../../data/data'

export const ads = createSlice({
    name: 'realEstateAds',
    initialState: {
        realEstateAds: []
        },
        reducers: {
            setAdsData: state => {state.realEstateAds = data},
        }
})

// Action creators are generated for each case reducer function
export const { setAdsData } = ads.actions

export default ads.reducer