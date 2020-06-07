import * as actionTypes from '../actions/actionTypes'
import initialState from './initialState'

export const modeReducer = (state=initialState.deleteMode , action) => {
    switch (action.type) {
        case actionTypes.CHANGE_DELETE_MODE:
            return action.payload
        default:
            return state;
    }
}