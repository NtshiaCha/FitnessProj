import Axios from 'axios';
import reduxThunk from 'redux-thunk';
export const type = {
    FETCH_CALENDAR_REQUEST: 'FETCH_CALENDAR_REQUEST',
    FETCH_CALENDAR_SUCCESS: 'FETCH_CALENDAR_SUCCESS',
    FETCH_CALENDAR_FAILURE: 'FETCH_CALENDAR_FAILURE'

}
//git probs

const username: any = localStorage.getItem('username')

const fetchCalendarRequest = () => {
    return {
        type: type.FETCH_CALENDAR_REQUEST
    }
}

const fetchCalendarSuccess = (calendar: any) => {
    return {
        type: type.FETCH_CALENDAR_SUCCESS,
        payload: calendar
    }
}

const fetchCalendarFailure = (error: any) => {
    return {
        type: type.FETCH_CALENDAR_FAILURE,
        payload: error
    }
}
export const getCalendar = () => {
    return(function(dispatch: any){
        dispatch(fetchCalendarRequest())
        Axios.post("http://localhost:8080/fitnessApp/api/calendar/getCalendar" , username)
            .then(response =>{
                const calendar = response.data;
                dispatch(fetchCalendarSuccess(calendar))
            }).catch(error => {
                dispatch(fetchCalendarFailure(error.message))
            })
    }
    )
}