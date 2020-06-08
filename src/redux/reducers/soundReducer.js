import * as actionTypes from '../actions/actionTypes'
import initialState from './initialState'


export const soundReducer = (state = initialState.playSound, action) => {
    switch (action.type) {
        case actionTypes.PLAY_SOUND:
            return action.payload;
        default:
            return state;
    }
}
