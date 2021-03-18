import {UserType} from '../actions/authentication.actions'
export interface User{
    userID: number;
    userName: string;
    password: string;
    email: string;
}
export interface authenticationState{
    user: User;
}


const initialState: authenticationState = {
    user: {
        userID: 1,
        userName:'',
        password:'',
        email:''
    }
}

const userReducer = (state = initialState, action:any) => {
    console.log(state, action);

    switch(action.type){
        case UserType.SET_USER:
            return{
                user: action.payload
            }
    }
    return state;
}

export default userReducer;