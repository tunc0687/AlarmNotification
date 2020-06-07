import * as actionTypes from './actionTypes'
import initialState from '../reducers/initialState'

let nextId;
initialState.alarmList.length > 0
    ? nextId = initialState.alarmList[initialState.alarmList.length - 1].id
    : nextId = 0


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

export const allCheckedAlarm = (check) => ({
    type: actionTypes.ALL_CHECKED_ALARM,
    payload: check
})

export const changeMode = (check) => ({
    type: actionTypes.CHANGE_DELETE_MODE,
    payload: check
})

export const deleteAlarm = () => ({
    type: actionTypes.DELETE_ALARM
})


