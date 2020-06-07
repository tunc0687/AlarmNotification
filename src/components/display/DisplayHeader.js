import React, { Component } from 'react'
import AddAlarmIcon from '@material-ui/icons/AddAlarm';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import { connect } from 'react-redux'
import { allCheckedAlarm, changeMode, remainingCalculater } from '../../redux/actions/actions'
import { NavLink } from 'react-router-dom';


class DisplayHeader extends Component {
    state = {
        allSelect: false
    }

    handleAllChecked = () => {
        this.setState({ allSelect: !this.state.allSelect })
        this.props.allCheckedAlarm(!this.state.allSelect)
    }

    thereActivatedAlarms = (alarms) => {
        for (let i = 0; i < alarms.length; i++) {
            if (alarms[i].isActive) {
                return true
            }
        }
        return false
    }

    countCheckedAlarm = (alarms) => {
        let count = 0
        for (let i = 0; i < alarms.length; i++) {
            if (alarms[i].isChecked) {
                count++
            }
        }
        if (count > 0) {
            return count + " alarm seçildi"
        }
        return "Alarmları seçiniz"
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            this.props.remainingCalculater(this.props.alarmList)
            // if (this.props.remainingTime === "0 saniye kaldı") {
                
            // }
        }, 1000);
      
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        return (
            <div className="card-header">
                <div className="text-center">
                    {
                        this.props.deleteMode
                            ? <h2 className="display-text py-4">{this.countCheckedAlarm(this.props.alarmList)}</h2>
                            : this.props.alarmList.length > 0
                                ? this.thereActivatedAlarms(this.props.alarmList)
                                    ? <h2 className="display-text py-4"> {this.props.remainingTime} </h2>
                                    : <h2 className="display-text py-4">Tüm alarmlar kapalı</h2>
                                : <h2 className="display-text py-4">Alarm Yok</h2>
                    }
                </div>
                {
                    this.props.deleteMode && this.props.alarmList.length > 0
                        ? <div>
                            <input type="checkbox" id="all"
                                checked={this.state.allSelect}
                                onChange={() => this.handleAllChecked()} />
                            <label htmlFor="all" className="mx-2">Hepsini Seç</label>
                        </div>

                        : !this.props.deleteMode && this.props.alarmList.length > 0
                            ? <div>
                                <NavLink onClick={() => this.props.changeMode(true)} className="link" to="/delete"> <DeleteForeverIcon className="float-left pointer" style={{ fontSize: "36px" }} /> </NavLink>
                                <NavLink className="link" to="/add"> <AddAlarmIcon className="float-right pointer" style={{ fontSize: "36px" }} /> </NavLink>
                            </div>
                            : <div></div>
                }
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        alarmList: state.alarmReducer,
        deleteMode: state.modeReducer,
        remainingTime: state.remainingReducer
    }
}

export default connect(mapStateToProps, { changeMode, allCheckedAlarm, remainingCalculater })(DisplayHeader)