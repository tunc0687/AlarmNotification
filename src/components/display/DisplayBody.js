import React, { Component } from 'react'
import AlarmList from '../alarm/AlarmList'
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux'

class DisplayBody extends Component {
    render() {
        return (
            <div className="card-body">
                <div className="text-center">
                    <Button hidden={this.props.alarmList.length > 0} variant="contained" color="secondary">
                        Alarm Ekle
                    </Button>
                </div>
                <AlarmList alarmList={this.props.alarmList}/>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return { alarmList: state.alarmReducer }
}

export default connect(mapStateToProps, null)(DisplayBody)

