import * as actionTypes from '../actions/actionTypes'
import initialState from './initialState'


export const remainingReducer = (state = initialState.remaningTime, action) => {
    switch (action.type) {
        case actionTypes.REMAINING_TIME:
            return alarmSorter(action.payload)
        default:
            return state;
    }
}


const timeCalculate = (dif) => {
    let message;
    if (dif < 60 * 1000) {
        message = parseInt(dif / 1000) + " saniye kaldı";
    } else if (dif < 2 * 60 * 1000) {
        message = "2 dakika kaldı";
    } else if (dif < 60 * 60 * 1000) {
        message = Math.ceil(dif / (60 * 1000)) + " dakika kaldı";
    } else if (dif < 24 * 60 * 60 * 1000) {
        let hour = Math.floor(dif / (60 * 60 * 1000));
        let min = Math.ceil((dif - hour * (60 * 60 * 1000)) / (60 * 1000))
        min < 60 ? message = hour + " saat " + min + " dakika kaldı"
            : message = (hour + 1) + " saat kaldı"
    } else {
        message = Math.floor(dif / (24 * 60 * 60 * 1000)) + " gün kaldı";
    }
    return message;
}


const remainingTimeCalcutor = (timeList) => {
    let remainingTime;
    let remainingList = []
    timeList.forEach(time => {
        remainingTime = timeCalculate(time.getTime() - new Date().getTime())
        remainingList.push(remainingTime)
    });
    return remainingList
}

const alarmSorter = (alarms) => {
    if (alarms.length > 0) {
        let date, minHour, dateTime;
        let timeList = []
        for (let i = 0; i < alarms.length; i++) {
            if (alarms[i].isActive) {
                date = alarms[i].date.split("-").reverse().join("-")
                minHour = alarms[i].minHour
                dateTime = date + "T" + minHour
                timeList.push(new Date(dateTime))
            }
        }
        if (timeList.length > 0) {
            timeList.sort((a, b) => a - b)
            return remainingTimeCalcutor(timeList)[0]
        }
        return "Tüm alarmlar kapalı"
    } else {
        return "Alarm hesaplanıyor"
    }

}