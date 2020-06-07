import React, { Component } from 'react'
import { connect } from 'react-redux'
import { checkedAlarm, deleteAlarm, changeMode } from '../../redux/actions/actions'
import Alarm from './Alarm'
import { NavLink } from 'react-router-dom'

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
                                    checked={alarm.isChecked}
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
                <NavLink onClick={() => this.props.changeMode(false)} to="/">
                    <button type="button"
                            className="btn btn-danger form-control my-2"
                            onClick={() => this.props.deleteAlarm()} > Alarm Sil</button>
                </NavLink>
                <NavLink onClick={() => this.props.changeMode(false)} to="/" className="btn btn-secondary form-control">İptal Et</NavLink>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return { alarmList: state.alarmReducer }
}

export default connect(mapStateToProps, { deleteAlarm, checkedAlarm, changeMode })(DeleteAlarm)
