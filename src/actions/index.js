import axios from "axios";
import { CONTACT_US, CONTACT_ERROR_EXIST } from "./types";

export const contactUs = data => {
    return async dispatch => {
        try {
            const res = await axios.post('http://localhost:3003/message_create/', data)

            dispatch({
                type: CONTACT_US,
                payload: res.data.message
            });
        } catch (err) {
                dispatch({
                    type: CONTACT_ERROR_EXIST,
                    payload: "Client message is already in, we will get back to you shortly."
                });
        }
    }
}