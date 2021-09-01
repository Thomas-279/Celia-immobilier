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
        reducers: {
            filteredData: (state, action) => {state.realEstateAds = action.payload},
        },
        extraReducers: {
            [getAllAds.pending]: state => {state.status = "loading"},
            [getAllAds.fulfilled]: (state, {payload}) => {
                // on en profite pour ranger les données reçues par id ( donc ancienneté )
                state.realEstateAds = payload.sort((a,b) => b.id - a.id)
                state.status = "success"
            },
            [getAllAds.rejected]: state => {state.status = "failed"},
        }
})

// Action creators are generated for each case reducer function
export const { setAdsData, setShowModal, setCLoseModal, filteredData } = ads.actions

export default ads.reducer