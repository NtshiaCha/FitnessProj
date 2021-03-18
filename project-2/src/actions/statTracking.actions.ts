import Axios from 'axios';
import reduxThunk from 'redux-thunk';

export const StatType = {
    FETCH_STAT_REQUEST: 'FETCH_STAT_REQUEST',
    FETCH_STAT_SUCCESS: 'FETCH_STAT_SUCCESS',
    FETCH_STAT_FAILURE: 'FETCH_STAT_FAILURE'

}
//git
const username: any = localStorage.getItem('username')

const fetchStatsRequest = () => {
    return {
        type: StatType.FETCH_STAT_REQUEST
    }
}

const fetchStatsSuccess = (statsArr: any) => {
    return {
        type: StatType.FETCH_STAT_SUCCESS,
        payload: statsArr
    }
}

const fetchStatsFailure = (error: String) => {
    return {
        type: StatType.FETCH_STAT_FAILURE,
        payload: error
    }
}
export const getStats = () => {
    return(function(dispatch: any){
        dispatch(fetchStatsRequest())
        Axios.post("http://localhost:8080/fitnessApp_war/api/stats/getStats" , username)
            .then(response =>{
                const statsArr = response.data;
                dispatch(fetchStatsSuccess(statsArr))
            }).catch(error => {
                dispatch(fetchStatsFailure(error.message))
            })
    }
    )
}