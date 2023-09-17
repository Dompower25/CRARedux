import { bindActionCreators } from "@reduxjs/toolkit";
import { useMemo } from "react";
import { useDispatch } from "react-redux"
import { actions } from "../store/favorites/favorites.slice"
import * as userActions from "../store/user/user.actions";
import { actions as likes } from "../store/likes/likes.slice";

const rootActions = {
    ...actions,
    ...userActions,
    ...likes,
}

export const useActions = () => {

    const dispatch = useDispatch();

    return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch])

}