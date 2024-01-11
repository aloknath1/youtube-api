import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    videos: [],
    id: null,
};

const videoSlice = createSlice({
    name: "playlist",
    initialState,
    reducers: {
        setVideosDetails: (state, action) => {
            state = {
                ...state, 
                ...{appiData: action.payload.data}
            };
            return state;
        }
    }
});

export const {setVideosDetails} = videoSlice.actions;
export default videoSlice.reducer;