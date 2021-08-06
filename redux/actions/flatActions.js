import axios from 'axios'
import absoluteUrl from 'next-absolute-url'

import {
    ALL_FLAT_SUCCESS,
    ALL_FLAT_FAIL,
    MY_FLAT_SUCCESS,
    MY_FLAT_FAIL,
    CLEAR_ERRORS

} from '../constants/flatConstants'

// Get all rooms
export const getFlats = () => async (dispatch) => {
    try {

        

        let link = `/api/flat`
        
        const { data } = await axios.get(link)

        dispatch({
            type: ALL_FLAT_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: ALL_FLAT_FAIL,
            payload: error.response.data
        })
    }
}

export const getmyFlat = (authCookie, req) => async (dispatch) => {
    try {
        const { origin } = absoluteUrl(req);
        
        const config = {
            headers: {
                cookie: authCookie
            }
        }
        const { data } = await axios.get(`${origin}/api/flat/me`, config)
       
        dispatch({
            type: MY_FLAT_SUCCESS,
            payload: data.myflats
        })

    } catch (error) {
        dispatch({
            type: MY_FLAT_FAIL,
            payload: error.response || null
        })
    }
}


// Clear Errors
export const clearErrors = () => async (dispatch) => {
    dispatch({
        type: CLEAR_ERRORS
    })
}