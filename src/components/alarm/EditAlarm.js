import React, { Component } from 'react'
import { NavLink, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { addAlarm, changeMode } from '../../redux/actions/actions'


class EditAlarm extends Component {
    state = {
        redirect: false
    }

    handleSubmit = (event) => {
        event.preventDefault()
        let name = event.target[0].value
        let dateTime = event.target[1].value.split("T")
        let minHour = dateTime[1]
        let date = dateTime[0]
                    .split("-")
                    .reverse()
                    .join("-")

        this.props.addAlarm({ name, minHour, date, isActive: true, isChecked: false })
        this.setState({redirect: true})
    }

    render() {
        if (this.state.redirect) {
            return <Redirect to='/' />;
        }

        return (
            <div className="card mt-3 w-35-center">
                <div className="card-body">
                    <h3 className="card-title text-center">Alarm Ekle/Düzenle</h3>
                    <form onSubmit={(event) => this.handleSubmit(event)}>
                        <div className="form-group text-center">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Alarm adı giriniz"
                                style={{ fontSize: "20px" }} />
                        </div>
                        <div className="form-group text-center">
                            <input
                                type="datetime-local"
                                className="form-control"
                                style={{ fontSize: "20px" }}
                                // value="2020-01-01T06:00"
                                required />
                        </div>
                        <div className="form-group">
                            <button type="submit" className="btn btn-success form-control my-2">Kaydet</button>
                            <NavLink onClick={() => this.props.changeMode(false)} to="/" className="btn btn-secondary form-control">İptal Et</NavLink>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}



export default connect(null, { addAlarm, changeMode })(EditAlarm)
