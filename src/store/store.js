import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { reducer as favoritesReducer } from "./favorites/favorites.slice";
import { userSlice } from "./user/user.slice";
import { reducer as likesReducer } from "./likes/likes.slice";

const reducers = combineReducers({
    favorites: favoritesReducer,
    user: userSlice.reducer,
    likes: likesReducer,
})

export const store = configureStore({
    reducer: reducers
})

