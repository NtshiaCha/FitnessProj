import React from 'react';
import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import NavibarComponent from '../routing/navibar.component';

const StatFormComponent: React.FC = () => {

    const submitForm = () => {
        let data = {
            
        }

    }


    return(
        <React.Fragment>
            
            <Form>
            <Form.Group controlId="WorkoutChoices">
                        <Form.Label>Strength Training Options</Form.Label>
                        <Form.Control as= "select">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </Form.Control>
                        </Form.Group>

                        <Form.Group controlId="WorkoutChoices">
                        <Form.Label>Wieght-loss Training Options</Form.Label>
                        <Form.Control as= "select">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId="WorkoutChoices">
                        <Form.Label>Balance Training Options</Form.Label>
                        <Form.Control as= "select">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId= "Workout-form">
                        <Form.Label>Daily Calorie Intake</Form.Label>
                        <Form.Control type="number" placeholder=""/>
                    </Form.Group>

                    <Form.Group controlId= "Workout-form">
                        <Form.Label>Current Wieght</Form.Label>
                        <Form.Control type="number" placeholder=""/>
                    </Form.Group>


                    <Form.Group controlId= "Workout-form">
                        <Form.Label>Max Bench</Form.Label>
                        <Form.Control type="number" placeholder=""/>
                    </Form.Group>


                    <Form.Group controlId= "Workout-form">
                        <Form.Label>Max Squat</Form.Label>
                        <Form.Control type="number" placeholder=""/>
                    </Form.Group>


                    <Form.Group controlId= "Workout-form">
                        <Form.Label>Total Sit-up</Form.Label>
                        <Form.Control type="number" placeholder=""/>
                    </Form.Group>

                    <Form.Group controlId= "Workout-form">
                        <Form.Label>Total Pull-up</Form.Label>
                        <Form.Control type="number" placeholder=""/>
                    </Form.Group>

                <Form.Group controlId= "Workout-form">
                    <Form.Label>Daily Cardio Miles</Form.Label>
                    <Form.Control type="number" placeholder=""/>
                </Form.Group>
            </Form>
                    <button 
                    type="submit"
                    className= "btn btn-primary btn-block"
                    onClick = {submitForm}
                    >Update</button>

            <Link to="/statrecords">
                 <button>
                   View Stats history
                 </button>
            </Link>

            <Link to="/home">
                 <button>
                   Home
                 </button>
            </Link>

            

        </React.Fragment>
    )
}

export default StatFormComponent;