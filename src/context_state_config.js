import React, { useReducer } from "react";
import Context from "./utils/context";
import * as ACTIONS from "./store/actions/login_actions/login_actions";
import * as Reducer1 from "./store/reducers/plain_reducer";
import * as AuthReducer from "./store/reducers/auth_reducer";
import * as FormReducer from "./store/reducers/form_reducer";
import Routes from "./routes";
import Auth from "./utils/auth";

const auth = new Auth();

const ContextState = () => {
  //Plain Reducer
  const [stateReducer1, dispatchReducer1] = useReducer(
    Reducer1.Reducer1,
    Reducer1.initalState
  );

  const handleDispatchTrue = () => {
    dispatchReducer1(ACTIONS.success());
  };

  const handleDispatchFalse = () => {
    dispatchReducer1(ACTIONS.failure());
  };

  //Auth Reducer
  const [stateAuthReducer, dispatchAuthReducer] = useReducer(
    AuthReducer.AuthReducer,
    AuthReducer.initialState
  );

  const handleLogin = () => {
    dispatchAuthReducer(ACTIONS.login_success());
  };

  const handleLogout = () => {
    dispatchAuthReducer(ACTIONS.login_failure());
  };

  const handleAddProfile = profile => {
    dispatchAuthReducer(ACTIONS.add_profile(profile));
  };

  const handleRemoveProfile = () => {
    dispatchAuthReducer(ACTIONS.remove_profile());
  };
  /*
      Form Reducer
    */

  const [stateFormReducer, dispatchFormReducer] = useReducer(
    FormReducer.FormReducer,
    FormReducer.initialState
  );

  const handleFormChange = event => {
    dispatchFormReducer(ACTIONS.user_input_change(event.target.value));
  };

  const handleFormSubmit = event => {
    //prevents page reloading
    event.preventDefault();
    //we are using Context and this data is coming from a child component, we have to use this function for the form to function properly.
    event.persist();

    //useContext" is not referring to the hook, it is the user defined id property supplied to the form input element. I decided to name the id “useContext” because the component has 2 other forms as well and they use the "useState" and "useReducer" hooks to save the state and therefore have the id of “useState” and “useReducer”.
    dispatchFormReducer(
      ACTIONS.user_input_submit(event.target.useContext.value)
    );
  };

  //Handle authentication from callback
  const handleAuthentication = props => {
    if (props.location.hash) {
      auth.handleAuth();
    }
  };

  return (
    <div>
      <Context.Provider
        value={{
          //Reducer1
          stateProp1: stateReducer1.stateprop1,
          stateProp2: stateReducer1.stateprop2,
          dispatchContextTrue: () => handleDispatchTrue(),
          dispatchContextFalse: () => handleDispatchFalse(),

          //Form Reducer
          useContextChangeState: stateFormReducer.user_textChange,
          useContextSubmitState: stateFormReducer.user_textSubmit,
          useContextSubmit: event => handleFormSubmit(event),
          useContextChange: event => handleFormChange(event),

          //Auth Reducer
          authState: stateAuthReducer.is_authenticated,
          profileState: stateAuthReducer.profile,
          handleUserLogin: () => handleLogin(),
          handleUserLogout: () => handleLogout(),
          handleUserAddProfile: profile => handleAddProfile(profile),
          handleUserRemoveProfile: () => handleRemoveProfile(),

          //Handle auth
          handleAuth: props => handleAuthentication(props),
          authObj: auth
        }}
      >
        <Routes />
      </Context.Provider>
    </div>
  );
};
export default ContextState;
