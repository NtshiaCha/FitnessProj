import { User } from "../reducers/authentication-reducer";
export const UserType = {
  SET_USER: "SET_USER"
};

export const setUser = (user: User) => (dispatch: any) => {
  console.log("setting user");
  dispatch({
    payload: user,
    type: UserType.SET_USER
  });
};
