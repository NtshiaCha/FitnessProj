import React from 'react';
import Axios from 'axios';
import Popup from 'reactjs-popup';
import { useState } from 'react';
import calendarReducer, {day, recipe} from '../../reducers/calendar-reducer'

import { exercise } from '../../reducers/calendar-reducer';
import { calendarState } from '../../reducers/calendar-reducer';
import { IState } from '../../reducers';
import {History} from 'history';
import { connect } from 'react-redux';
import NavibarComponent from '../routing/navibar.component';

interface CalendarComponentState {
    calendar: calendarState
    history: History
}

//call this component when needed
const CalendarScreenComponent: React.FC<CalendarComponentState> = (props:any) => {

 const goRecipe = (x:number) =>{
  
   return(
    props.history.push(`/recipes${x}`)
    )
 }
 const goExercise = (x:number) =>{
  
   return(
    props.history.push(`/exercise${x}`)
  )
}


  const mapCalendar = () => {
    let counter:number = -1;
    return props.calendar.calendar.map((calendar: day) => {
      counter = counter +1;
      return (
          <div className = "calendarDayDiv">
            <div className = "calendarDayRecipesDiv" onClick = {goExercise(counter)}>
            <h2>Recipes</h2>
            </div>
            <div className = "calendarDayExercisesDiv" onClick = {goRecipe(counter)}>
            <h2>Exercises</h2>
            </div>
          </div>  
      )
  })
  }

  return(
    <React.Fragment>
        {mapCalendar()}
    </React.Fragment>
  )
}

const mapStateToProps = (state: IState) => ({
    calendar: state.calendar
});
export default connect(mapStateToProps)(CalendarScreenComponent);