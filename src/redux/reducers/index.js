import { combineReducers } from 'redux';
import { UserReducer } from './user.reducer';
import { StagesDoneReducer } from './stagesDone.reducer';

const rootReducer = combineReducers(
    {
        user: UserReducer,
        stagesDone: StagesDoneReducer
    },
);

export default rootReducer;
