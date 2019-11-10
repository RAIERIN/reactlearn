//action types

//SUCCESS and FAILURE will be uses as our boiler plate actions
export const SUCCESS = "SUCCESS";
export const FAILURE = "FAILURE";

//LOGIN_SUCCESS and LOGIN_FAILURE is used for updating authentication state of the user.
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

//ADD_PROFILE and REMOVE_PROFILE will be used to save the profile data from Auth0 to the global state.
export const ADD_PROFILE = "ADD_PROFILE";
export const REMOVE_PROFILE = "REMOVE_PROFILe";

//USER_INPUT_CHANGE and USER_INPUT_SUBMIT is used to track the changes and submit of the user submitted text of the form
export const USER_INPUT_CHANGE = "USER_INPUT_CHANGE";
export const USER_INPUT_SUBMIT = "USER_INPUT_SUBMIT";
