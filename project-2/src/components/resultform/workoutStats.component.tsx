import React from 'react';
import { Link } from 'react-router-dom';



const WorkoutStatHistory: React.FC = () => {
    return(
        <React.Fragment>
            
            <h2>Some Stat Data</h2>

            <Link to="/home">
                 <button>
                   Home
                 </button>
            </Link>
            
            <Link to="/workouts">
                 <button>
                    Workout Stat Form
                 </button>
            </Link> 

        </React.Fragment>
    )
}

export default WorkoutStatHistory;