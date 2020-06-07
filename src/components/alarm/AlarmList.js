import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addAlarm } from '../../redux/actions/actions'
import Alarm from './Alarm'

class AlarmList extends Component {
    render() {
        return (
            <div>
                {
                    this.props.alarmList.map(alarm => (
                        <Alarm key={alarm.id} alarm={{id: alarm.id,
                                                      name: alarm.name,
                                                      minHour: alarm.minHour,
                                                      date: alarm.date,
                                                      isActive: alarm.isActive}} />
                    ))
                }
            </div>
        )
    }
}


export default connect(null, {addAlarm})(AlarmList)
