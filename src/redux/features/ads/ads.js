import { createSlice } from '@reduxjs/toolkit'

import data from '../../../data/data'

export const ads = createSlice({
    name: 'realEstateAds',
    initialState: {
        realEstateAds: [],
        showModal: false,
        },
        reducers: {
            setAdsData: state => {state.realEstateAds = data},
            setShowModal: state => {state.showModal = true},
            setCLoseModal: state => {state.showModal = false},
        }
})

// Action creators are generated for each case reducer function
export const { setAdsData, setShowModal, setCLoseModal } = ads.actions

export default ads.reducer