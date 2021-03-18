import React from 'react';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import LoginComponent from '../userinterface/login.components';
import RegisterInputComponent from '../userinterface/registerinput.components';
import HomeScreenComponent from '../userinterface/homescreen.component';
import WorkoutComponent from '../userinterface/statsForm.component';
import WorkoutStatHistory from '../resultform/workoutStats.component';
import CalendarScreenComponent from '../userinterface/calendarscreen.component';
import exercises0Component from '../userinterface/exercises/exercises0.component';
import exercises1Component from '../userinterface/exercises/exercises1.component';
import exercises2Component from '../userinterface/exercises/exercises2.component';
import exercises3Component from '../userinterface/exercises/exercises3.component';
import exercises4Component from '../userinterface/exercises/exercises4.component';
import exercises5Component from '../userinterface/exercises/exercises5.component';
import exercises6Component from '../userinterface/exercises/exercises6.component';
import recipes0Component from '../userinterface/recipes/recipes0.component';
import recipes1Component from '../userinterface/recipes/recipes1.component';
import recipes2Component from '../userinterface/recipes/recipes2.component';
import recipes3Component from '../userinterface/recipes/recipes3.component';
import recipes4Component from '../userinterface/recipes/recipes4.component';
import recipes5Component from '../userinterface/recipes/recipes5.component';
import recipes6Component from '../userinterface/recipes/recipes6.component';

const RoutingComponent: React.FC = () => {

    return(
        <React.Fragment>
            <Switch>
                <Route path= "/login" component={LoginComponent}></Route>
                <Route path= "/register" component={RegisterInputComponent}></Route>
                <Route path= "/home" component={HomeScreenComponent}></Route>
                <Route path= "/workouts" component={WorkoutComponent}></Route>
                <Route path= "/statrecords" component={WorkoutStatHistory}></Route>
                <Route path= "/calendar" component={CalendarScreenComponent}></Route>
                <Route path= "/exercise0" component = {exercises0Component}></Route>
                <Route path= "/exercise1" component = {exercises1Component}></Route>
                <Route path= "/exercise2" component = {exercises2Component}></Route>
                <Route path= "/exercise3" component = {exercises3Component}></Route>
                <Route path= "/exercise4" component = {exercises4Component}></Route>
                <Route path= "/exercise5" component = {exercises5Component}></Route>
                <Route path= "/exercise6" component = {exercises6Component}></Route>
                <Route path= "/recipe0" component = {recipes0Component}></Route>
                <Route path= "/recipe1" component = {recipes1Component}></Route>
                <Route path= "/recipe2" component = {recipes2Component}></Route>
                <Route path= "/recipe3" component = {recipes3Component}></Route>
                <Route path= "/recipe4" component = {recipes4Component}></Route>
                <Route path= "/recipe5" component = {recipes5Component}></Route>
                <Route path= "/recipe6" component = {recipes6Component}></Route>
                <Redirect path= "/" to= "/login"></Redirect>
            </Switch>

        </React.Fragment>
    )
}
export default RoutingComponent;