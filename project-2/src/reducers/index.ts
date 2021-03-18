import calendarReducer, { calendarState } from "./calendar-reducer";
import statReducer, { statTrackingState } from "./statTracking-reducer";
import userReducer, { authenticationState } from "./authentication-reducer";
import { combineReducers } from "redux";



export interface IState {
    calendar: calendarState;
    stats: statTrackingState;
    user: authenticationState;
}

export const state = combineReducers<IState>({
    calendar: calendarReducer,
    user: userReducer,
    stats: statReducer
});