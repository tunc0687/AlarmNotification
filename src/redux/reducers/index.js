import {alarmReducer} from './alarmReducer'
import {modeReducer} from './modeReducer'
import {combineReducers} from 'redux'

const rootReducer = combineReducers({
    alarmReducer,
    modeReducer
})

export default rootReducer;


