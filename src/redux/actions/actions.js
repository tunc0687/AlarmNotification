import * as actionTypes from './actionTypes'
import initialState from '../reducers/initialState'

let nextId = initialState.alarmList[initialState.alarmList.length - 1].id || 0;

export const addAlarm = ({ name, minHour, date, isActive, isChecked }) => ({
    type: actionTypes.ADD_ALARM,
    payload: {
        id: ++nextId,
        name,
        minHour,
        date,
        isActive,
        isChecked
    }
})

export const activatedAlarm = (id) => ({
    type: actionTypes.ACTIVATED_ALARM,
    payload: id
})


export const checkedAlarm = (id) => ({
    type: actionTypes.CHECKED_ALARM,
    payload: id
})

export const deleteAlarm = () => ({
    type: actionTypes.DELETE_ALARM
})


