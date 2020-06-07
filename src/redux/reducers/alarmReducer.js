import * as actionTypes from '../actions/actionTypes'
import initialState from './initialState'

export const alarmReducer = (state=initialState.alarmList , action) => {
    switch (action.type) {
        case actionTypes.ADD_ALARM:
            return [...state, action.payload]
        case actionTypes.ACTIVATED_ALARM:
            return changeActivate([...state], action.payload)
        case actionTypes.CHECKED_ALARM:
            return changeChecked([...state], action.payload)
        case actionTypes.ALL_CHECKED_ALARM:
            return allChangeChecked([...state], action.payload)
        case actionTypes.DELETE_ALARM:
            return alarmDeleted([...state])
        default:
            return state;
    }
}

const changeActivate = (newState, id) => {
    newState.forEach(alarm => {
        if (alarm.id === id) {
            alarm.isActive = !alarm.isActive
        }
    })
    return newState;
}

const changeChecked = (newState, id) => {
    newState.forEach(alarm => {
        if (alarm.id === id) {
            alarm.isChecked = !alarm.isChecked
        }
    })
    return newState;
}

const allChangeChecked = (newState, check) => {
    newState.forEach(alarm => {
        alarm.isChecked = check
    })
    return newState;
}

const alarmDeleted = (newState) => {
    newState = newState.filter(alarm => !alarm.isChecked)
    return newState;
}

