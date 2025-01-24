import { ACTION_TYPES } from "../../components/constants/actionTypes";

// Action creators
const updateStagesRequest = (payload) => ({ type: ACTION_TYPES.STAGES_UPDATE, payload: payload });

// Async action creator with Thunk
export const updateUserStages = (stages) => {
    return async (dispatch) => {
      dispatch(updateStagesRequest(stages));
    };
  };
  