import { CONTACT_US, CONTACT_ERROR_EXIST } from "../actions/types";

const DEFAULT_STATE = {
    responseMessage: ''
}

export default (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case CONTACT_US:
            return { ...state, responseMessage: action.payload }
       
        case CONTACT_ERROR_EXIST:
            return { ...state, responseMessage: action.payload }
       
        default:
            return state;
    }
}