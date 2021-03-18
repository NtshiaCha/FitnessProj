import React from 'react'
import { Dropdown, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import NavibarComponent from '../routing/navibar.component';

const HomeScreenComponent: React.FC = () => {
    return (
        <React.Fragment>
            
            <Link to="/calendar">
                 <button>
                    View Your Calendar
                 </button>
            </Link> 
          

            <Link to="/statrecords">
                 <button>
                   View Stats history
                 </button>
            </Link>

            <Link to="/workouts">
                 <button>
                    Add A Record
                 </button>
            </Link> 
          
        </React.Fragment>
    )
}
export default HomeScreenComponent;
