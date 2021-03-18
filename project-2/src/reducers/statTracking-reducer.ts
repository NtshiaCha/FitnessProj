import {StatType} from '../actions/statTracking.actions'
import { exercise } from './calendar-reducer';
export interface Stat{
    calorieIntake: number;
    weight: number;
    repMaxBench: number;
    repMaxSquat: number;
    situp: number;
    pullup: number;
    miles: number;
}
export interface statTrackingState{
    loading: boolean;
    statArr: Array<exercise>;
    error: string;
}
//comment
const initialState: statTrackingState = {
    loading: false,
    statArr: [],
    error: ''
}

const statReducer = (state = initialState, action:any) => {
    console.log(state, action);

    switch(action.type){
        
        case StatType.FETCH_STAT_REQUEST:
            return{
                ...state,
                loading:true
            }

        case StatType.FETCH_STAT_SUCCESS:
            return {
                loading:false,
                statArr: action.payload,
                error: ''
            }
        case StatType.FETCH_STAT_FAILURE:
            return{
                loading:false,
                statArr: [],
                error: action.payload
            }
    }
    return state;
}

export default statReducer;