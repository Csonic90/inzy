import { relativeTimeRounding } from 'moment-timezone'
import {
    ALL_FLAT_SUCCESS,
    ALL_FLAT_FAIL,
    MY_FLAT_SUCCESS,
    MY_FLAT_FAIL,
    CLEAR_ERRORS

} from '../constants/flatConstants'


// All flat reducer
export const allFlatReducer = (state = { myflat:[] }, action) => {
    switch (action.type) {
        case ALL_FLAT_SUCCESS:
            return {        
                flatCount: action.payload.flatCount,
                flats : action.payload.flat
            }

        case ALL_FLAT_FAIL:
           return {
                error: action.payload
            }
      

        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }

        default:
            return state
    }
}

export const myFlatsReducer = (state = { myflats:[] }, action) => {
    switch (action.type) {
       
        case MY_FLAT_SUCCESS:
            return {
                
                myflats: action.payload
            }
        case MY_FLAT_FAIL:
        
            return {
                error: action.payload
            }

        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }
        default:
            return state
    }
}


