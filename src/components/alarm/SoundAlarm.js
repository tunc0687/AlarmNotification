import React, { Component } from 'react'
import { connect } from 'react-redux'
import { soundPlay } from '../../redux/actions/actions'
import { NavLink } from 'react-router-dom'

class SoundAlarm extends Component {

    render() {
        return (
            <div className="card mt-3 w-35-center">
                <div className="card-header">
                    <h3 className="card-title text-center">Alarm Çalıyor</h3>
                </div>
                <div className="card-body">
                    <audio loop autoPlay={this.props.playAlarm}>
                        <source src="/alarm.mp3" type="audio/mpeg" />
                    </audio>
                    <NavLink onClick={() => this.props.soundPlay(false)} to="/" className="btn btn-danger form-control">Durdur</NavLink>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return { playAlarm: state.soundReducer }
}

export default connect(mapStateToProps, { soundPlay })(SoundAlarm)
