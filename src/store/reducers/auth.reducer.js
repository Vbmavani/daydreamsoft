import {
  AUTH_LOGIN,
  AUTH_LOGIN_SUCCESS,
  AUTH_LOGIN_FAILURE,
  AUTH_SIGNUP,
  AUTH_SIGNUP_SUCCESS,
  AUTH_SIGNUP_FAILURE,
  AUTH_LOGOUT,
} from "../actions/actionTypes";

let initialState = {
  loading: false,
  user:null,
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_LOGIN:
      console.log('reducer',action.payload);
      return {
        ...state,
        loading: true,
        user:action.payload,
      };

    case AUTH_LOGIN_SUCCESS:
      return {
        ...state,
        
      };

    case AUTH_LOGIN_FAILURE:
      return {
        ...state,
       
      };

    case AUTH_SIGNUP:
      return {
        ...state,
        loading: true,
        user:action.payload,
      };

    case AUTH_SIGNUP_SUCCESS:
      return {
      
      };

    case AUTH_SIGNUP_FAILURE:
      return {
        ...state,
       
      };
    case AUTH_LOGOUT:
      localStorage.removeItem("user-token");
      return initialState;

    default:
      return state;
  }
};

export default auth;
