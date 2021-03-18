import React from 'react';
import { IState } from "../../../reducers";
import { exercise, calendarState } from "../../../reducers/calendar-reducer";
import { connect } from 'react-redux';
import {History} from 'history';
interface ExerciseProps {
    calendar: calendarState
    history: History
}

const Exercise2Component: React.FC<ExerciseProps> = (props:any) => {
    const goBack = () => {
        props.history.push('./calendar')
    }
    const mapExercises = () => {

    return props.calendar.calendar[2].exerciseArr.map((exercise: exercise) => {
      return (
        <div>
          <p>{exercise.exerciseName}</p>
          <p>{exercise.exerciseType} calories</p>
          <p>{exercise.exerciseMuscleGroup}</p>
          <textarea rows={8} cols={50} >{exercise.exerciseDescription}</textarea>
        </div>
      );
    });
  }
  return(
    <React.Fragment>
        <button onClick = {goBack}></button>
      {mapExercises()}
  </React.Fragment>
  )
}
const mapStateToProps = (state: IState) => ({
    calendar: state.calendar
});
export default connect(mapStateToProps)(Exercise2Component);