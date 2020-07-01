// import history from "@history";

import {
  AUTH_LOGIN,
  AUTH_LOGIN_SUCCESS,
  AUTH_LOGIN_FAILURE,
  AUTH_SIGNUP,
  AUTH_SIGNUP_SUCCESS,
  AUTH_SIGNUP_FAILURE,
  AUTH_LOGOUT,
} from "./actionTypes";

export const authLogin = payload => {
  return {
    type: AUTH_LOGIN,
    payload: payload
  };
};
export const authLoginSuccess = payload => {
  return {
    type: AUTH_LOGIN_SUCCESS,
    payload: payload
  };
};
export const authLoginFailure = payload => {
  return {
    type: AUTH_LOGIN_FAILURE,
    payload: payload
  };
};
export const userLogin = (body,userLoginSuccess) => async dispatch => {
  console.log('body',body);
  dispatch(authLogin(body));
  localStorage.setItem("user-token", 'user-token......');
  userLoginSuccess && userLoginSuccess()  
  // axios
  //   .post(`/login`, body)
  //   .then(res => {
  //     if(res.data.flag){
  //       dispatch(authLoginSuccess(res.data.data));
  //       localStorage.setItem("user-token", res.data.data.token);
        
  //     }else{
  //       dispatch(authLoginFailure({error : res.data.message}))
  //     }
  //   })
  //   .catch(error => {
  //     dispatch(authLoginFailure({ error: error }));
  //   });
};



export const authSignUp = payload => {
  return {
    type: AUTH_SIGNUP,
    payload: payload
  };
};
export const authSignUpSuccess = payload => {
  return {
    type: AUTH_SIGNUP_SUCCESS,
    payload: payload
  };
};
export const authSignUpFailure = payload => {
  return {
    type: AUTH_SIGNUP_FAILURE,
    payload: payload
  };
};
export const signUp = (body) => async dispatch => {
  dispatch(authSignUp());

  // axios
  //   .post(`/register`, body)
  //   .then(res => {
  //     if(res.data.flag){
  //       dispatch(authSignUpSuccess(res.data.data));
  //       localStorage.setItem("user-token", res.data.data.token);
        
  //     }else{
  //       dispatch(authSignUpFailure({error: res.data.message}))
  //     }
  //   })
  //   .catch(error => {
  //     console.error("error", error);
  //     dispatch(authSignUpFailure({ error: error }));
  //   });
};





export const logOut = payload => {
  return {
    type: AUTH_LOGOUT,
    payload: payload
  };
};

export const userLogOut = () => async dispatch => {
  dispatch(logOut());
};

