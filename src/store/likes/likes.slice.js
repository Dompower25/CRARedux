import { createSlice } from "@reduxjs/toolkit";



export const likesSlice = createSlice(
{
    name: "likes",
    initialState: [],
    reducers: {
        addLike: (state, action) => {
            console.log(action.payload)
        },
        disLike: (state, action) => {
            console.log(action.payload)

        }
    }
}
)

export const { actions, reducer } = likesSlice;