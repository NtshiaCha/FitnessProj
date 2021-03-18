import React from 'react';
import { IState } from "../../../reducers";
import { recipe, calendarState } from "../../../reducers/calendar-reducer";
import { connect } from 'react-redux';
import {History} from 'history';
interface RecipeProps {
    calendar: calendarState
    history: History
}

const Recipe1Component: React.FC<RecipeProps> = (props:any) => {
    const goBack = () => {
        props.history.push('./calendar')
    }
    const mapRecipes = () => {

    return props.calendar.calendar[1].recipeArr.map((recipe: recipe) => {
      return (
        <div>
          <p>{recipe.name}</p>
          <p>{recipe.calories} calories</p>
          <p>{recipe.ingredients}</p>
          <textarea rows={8} cols={50} >{recipe.directions}</textarea>
        </div>
      );
    });
  }
  return(
    <React.Fragment>
        <button onClick = {goBack}></button>
        {mapRecipes()}
  </React.Fragment>
  )
}
const mapStateToProps = (state: IState) => ({
    calendar: state.calendar
});
export default connect(mapStateToProps)(Recipe1Component);