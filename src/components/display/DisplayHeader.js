import React, { Component } from 'react'
import AddAlarmIcon from '@material-ui/icons/AddAlarm';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import { connect } from 'react-redux'
import { allCheckedAlarm, changeMode } from '../../redux/actions/actions'
import { NavLink } from 'react-router-dom';
import moment from 'moment'
import 'moment/locale/tr'


class DisplayHeader extends Component {
    state = {
        allSelect: false,
        remaining: ""
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

    remainingTimeCalcutor = (timeList) => {
        let remainingTime;
        let remainingList = []
        moment.locale("tr")
        timeList.forEach(time => {
            remainingTime = moment(time).fromNow()
            remainingList.push(remainingTime)
        });
        return remainingList
    }

    alarmSorter = (alarms) => {
        let date, minHour, dateTime;
        let timeList = []
        for (let i = 0; i < alarms.length; i++) {
            date = alarms[i].date.split("-").reverse().join("-")
            minHour = alarms[i].minHour
            dateTime = date + "T" + minHour
            timeList.push(new Date(dateTime))
        }
        timeList.sort((a, b) => a - b)
        return this.remainingTimeCalcutor(timeList)
    }

    componentDidMount(){
        setInterval(() => {
            this.setState({remaining : this.alarmSorter(this.props.alarmList)[0]})
        }, 60000);
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
                                    ? <h2 className="display-text py-4"> {this.state.remaining} </h2>
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
        deleteMode: state.modeReducer
    }
}

export default connect(mapStateToProps, { changeMode, allCheckedAlarm })(DisplayHeader)