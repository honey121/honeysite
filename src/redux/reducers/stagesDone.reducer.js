import { INITIAL_STATE } from "../store";
import { ACTION_TYPES } from "../../components/constants/actionTypes";


export const StagesDoneReducer = (state = INITIAL_STATE.stagesDone, action) => {
    switch (action.type) {
        case ACTION_TYPES.STAGES_UPDATE:
            return action.payload
        // Logout
        case ACTION_TYPES.LOGOUT_REQUESTED:
            return INITIAL_STATE.stagesDone;

        case ACTION_TYPES.LOGOUT_SUCCEEDED:
            return INITIAL_STATE.stagesDone;

        case ACTION_TYPES.LOGOUT_FAILED:
            return {
                ...state
            };

        default:
            return state;
    }
};
