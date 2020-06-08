import { alarmReducer } from './alarmReducer'
import { modeReducer } from './modeReducer'
import { remainingReducer } from './remainingReducer'
import { soundReducer } from './soundReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    alarmReducer,
    modeReducer,
    remainingReducer,
    soundReducer
})

export default rootReducer;


