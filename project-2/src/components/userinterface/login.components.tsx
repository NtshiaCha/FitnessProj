import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Form } from 'react-bootstrap';
import { authenticationState, User } from "../../reducers/authentication-reducer";
import Axios from 'axios';
import { IState } from '../../reducers';
import { connect } from 'react-redux';
import { setUser } from '../../actions/authentication.actions';
import { History } from "history";
import { withRouter } from "react-router";
import { getCalendar } from '../../actions/calendar.actions';

interface LoginComponentProps {
    user: authenticationState;
    history: History;
    setUser: (user: User) => any;
    getCalendar: () => any;
}

const LoginComponent: React.FC<LoginComponentProps> = (props: LoginComponentProps) => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    let user: any = {
        username: "",
        password: ""
    }

    const handleSubmit = () => {
        user = {
            username,
            password
        }
        console.log(user.username)
        console.log(user.password)
        console.log(user);
        requestUser();
        localStorage.setItem("username", `${username}`);
    }

    const handleInputUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newuserName = e.target.value;
        setUsername(newuserName);
        console.log({ username })
    }

    const handleInputPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newPassword = e.target.value;
        setPassword(newPassword);
        console.log({ password })
    }

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.charCode === 13) {
            handleSubmit();
        }
    }

    const requestUser = () => {
        Axios.post("http://localhost:8080/fitnessApp_war/api/authentication/login", user)
            .then((response) => {
                console.log(response)
                let str: string = response.data;
                props.history.push(str)
            }).catch(err => {
                console.log(err);
            })

        Axios.post("http://localhost:8080/fitnessApp_war/api/authentication/getUser", user)
            .then((response) => {
                console.log(response)
                let userProfile: User = response.data;
                props.setUser(userProfile);
            })

        props.getCalendar();
    }

    return (
        <React.Fragment>
            <h2>Login</h2>
            <div className="LoginContainer">


                <input type="username" placeholder="Enter Username" required
                    onChange={e => setUsername(e.target.value)}
                    onKeyPress={handleKeyDown} />



                <input type="password" placeholder="Enter Password" required
                    onChange={e => setPassword(e.target.value)}
                    onKeyPress={handleKeyDown}
                />

                <button
                    type="submit"
                    className="btn btn-primary btn-block"
                    onClick={() => handleSubmit()}
                >Login</button>
                <p className="NewRegister">Need to <Link to="/register">Register</Link>?</p>
            </div>

        </React.Fragment>
    )

}

const mapStateToProps = (state: IState) => ({

});
const mapDispatcherToProps = {
    setUser: setUser,
    getCalendar: getCalendar
}

export default connect(mapStateToProps, mapDispatcherToProps)(LoginComponent);