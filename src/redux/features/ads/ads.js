import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const getAllAds = createAsyncThunk('ads/getAllAds', async () => {
    const response = await fetch('https://celia-immobilier.herokuapp.com/ads')
    return await response.json()
});

export const ads = createSlice({
    name: 'realEstateAds',
    initialState: {
        realEstateAds: [],
        status: null,
        },
        extraReducers: {
            [getAllAds.pending]: state => {state.status = "loading"},
            [getAllAds.fulfilled]: (state, {payload}) => {
                state.realEstateAds = payload
                state.status = "success"
            },
            [getAllAds.rejected]: state => {state.status = "failed"}
        }
})

// Action creators are generated for each case reducer function
export const { setAdsData, setShowModal, setCLoseModal } = ads.actions

export default ads.reducer