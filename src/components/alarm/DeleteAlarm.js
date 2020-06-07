import React, { Component } from 'react'
import { connect } from 'react-redux'
import { checkedAlarm, deleteAlarm } from '../../redux/actions/actions'
import Alarm from './Alarm'

class DeleteAlarm extends Component {

    render() {
        return (
            <div className="card-body">
                {
                    this.props.alarmList.map(alarm => (
                        <div key={alarm.id} className="row">
                            <div className="col-1">
                                <input type="checkbox"
                                    name={alarm.id}
                                    defaultChecked={alarm.isChecked}
                                    onChange={() => this.props.checkedAlarm(alarm.id)} />
                            </div>
                            <div className="col-11">
                                <Alarm alarm={{
                                    id: alarm.id,
                                    name: alarm.name,
                                    minHour: alarm.minHour,
                                    date: alarm.date,
                                    isActive: alarm.isActive
                                }} />
                            </div>
                        </div>
                    ))
                }
                <button type="button"
                        className="btn btn-danger form-control"
                        onClick={() => this.props.deleteAlarm()} >Alarm Sil</button>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return { alarmList: state.alarmReducer }
}

export default connect(mapStateToProps, { deleteAlarm, checkedAlarm })(DeleteAlarm)
