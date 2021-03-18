import {type} from '../actions/calendar.actions'
export interface recipe{
    recipID: number;
    name: string;
    calories: number;
    isBfast: boolean;
    isLunch: boolean;
    isDinner: boolean;
    directions: string;
    ingredients: string;
}
//git
export interface exercise{
    exerciseID: number;
    exerciseName: string;
    exerciseType: string;
    exerciseMuscleGroup: string;
    exerciseDescription: string;
    workoutset: string;
}

export interface day{
    exerciseArr: Array<exercise>
    recipeArr: Array<recipe>
}
export interface calendarState{
    loading: boolean;
    calendar: Array<day>;
    error: string;
}

const initialState: calendarState = {
    loading:false,
    calendar: [],
    error: ''
}

const calendarReducer = (state = initialState, action:any) => {
    console.log(state, action);

    switch(action.type){
        case type.FETCH_CALENDAR_REQUEST:
            return{
                ...state,
                loading:true
            }

        case type.FETCH_CALENDAR_SUCCESS:
            return {
                loading:false,
                calendar: action.payload,
                error: ''
            }
        case type.FETCH_CALENDAR_FAILURE:
            return{
                loading:false,
                calendar: [],
                error: action.payload
            }
    }
    return state;
}

export default calendarReducer;