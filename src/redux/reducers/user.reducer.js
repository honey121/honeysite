import { INITIAL_STATE } from "../store";
import { ACTION_TYPES } from "../../components/constants/actionTypes";


export const UserReducer = (state = INITIAL_STATE.user, action) => {
    switch (action.type) {
        // Logout
        case ACTION_TYPES.LOGOUT_REQUESTED:
            return INITIAL_STATE.user;

        case ACTION_TYPES.LOGOUT_SUCCEEDED:
            return INITIAL_STATE.user;

        case ACTION_TYPES.LOGOUT_FAILED:
            return {
                ...state
            };

        default:
            return state;
    }
};
