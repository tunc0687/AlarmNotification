import * as actionTypes from '../actions/actionTypes'
import initialState from './initialState'

export const alarmReducer = (state=initialState.alarmList , action) => {
    switch (action.type) {
        case actionTypes.ADD_ALARM:
            return [...state, action.payload]
        case actionTypes.ACTIVATED_ALARM:
            return alarmChangeChecked([...state], action.payload)
        case actionTypes.CHECKED_ALARM:
            return changeChecked([...state], action.payload)
        case actionTypes.ALL_CHECKED_ALARM:
            return allChangeChecked([...state], action.payload)
        case actionTypes.DELETE_ALARM:
            return alarmDeleted([...state])
        case actionTypes.DISABLE_ALARM:
            return alarmChangeChecked([...state], null)
        default:
            return state;
    }
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


const alarmChangeChecked = (newState, id) => {
    let newDay, date, minHour, dateTime, dateNow;
    newState.forEach(alarm => {
        date = alarm.date.split("-").reverse().join("-")
        minHour = alarm.minHour
        dateTime = date + "T" + minHour
        dateNow = new Date().getTime() + 1000
        if (new Date(dateTime) < new Date(dateNow)) {
            newDay = new Date().getDate() + 1
            newDay < 10 ? newDay = "0" + newDay : newDay = String(newDay)
            alarm.date = newDay + alarm.date.slice(2,10)
            alarm.isActive = false
        }
        if (alarm.id === id) {
            alarm.isActive = !alarm.isActive
        }
    })
    return newState;
}
