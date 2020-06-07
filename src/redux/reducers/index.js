import {alarmReducer} from './alarmReducer'
import {modeReducer} from './modeReducer'
import {remainingReducer} from './remainingReducer'
import {combineReducers} from 'redux'

const rootReducer = combineReducers({
    alarmReducer,
    modeReducer,
    remainingReducer
})

export default rootReducer;


