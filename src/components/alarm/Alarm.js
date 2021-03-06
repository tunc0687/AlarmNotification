import React, { Component } from 'react'
import Switch from '@material-ui/core/Switch';
import { connect } from 'react-redux'
import { activatedAlarm, remainingCalculater } from '../../redux/actions/actions'


class Alarm extends Component {
    handleChecked = (id) => {
        this.props.activatedAlarm(id);
    }

    render() {
        const { id, name, minHour, date, isActive } = this.props.alarm
        return (
            <div className="card my-2">
                <div className="card-body row">
                    <div className="col-6">
                        <span>{name}</span><br />
                        <h2>{minHour.slice(0, 2) + " : " + minHour.slice(3, 5)}</h2>
                    </div>
                    <div className="col-4 py-2 text-right">{date}</div>
                    <div className="col-2">
                        <Switch
                            checked={isActive}
                            onChange={() => this.handleChecked(id)}
                            inputProps={{ 'aria-label': 'secondary checkbox' }}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        alarmList: state.alarmReducer
    }
}


export default connect(mapStateToProps, { activatedAlarm, remainingCalculater })(Alarm)
