import React, { Component } from 'react'
import AddAlarmIcon from '@material-ui/icons/AddAlarm';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom';


class DisplayHeader extends Component {
    thereActivatedAlarms = (alarms) => {
        for (let i = 0; i < alarms.length; i++) {
            if (alarms[i].isActive) {
                return true
            }
        }
        return false
    }

    render() {
        return (
            <div className="card-header text-center">
                {
                    this.props.alarmList.length > 0
                        ? this.thereActivatedAlarms(this.props.alarmList)
                            ? <h2 className="display-text py-4">Açık Alarm var</h2>
                            : <h2 className="display-text py-4">Tüm alarmlar kapalı</h2>
                        : <h2 className="display-text py-4">Alarm Yok</h2>
                }

                <div>
                    <NavLink className="link" to="/delete"> <DeleteForeverIcon className="float-left pointer" style={{ fontSize: "36px" }} /> </NavLink>
                    <NavLink className="link" to="/add"> <AddAlarmIcon className="float-right pointer" style={{ fontSize: "36px" }} /> </NavLink>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return { alarmList: state.alarmReducer }
}

export default connect(mapStateToProps, null)(DisplayHeader)