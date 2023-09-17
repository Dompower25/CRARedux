import { createSlice } from "@reduxjs/toolkit";



export const likesSlice = createSlice(
{
    name: "likes",
    initialState: [],
    reducers: {
        addLike: (state) => {
            state.push(1)
        },
        disLike: (state) => {
            state.splice(0,1)
        }
    }
}
)

export const { actions, reducer } = likesSlice;