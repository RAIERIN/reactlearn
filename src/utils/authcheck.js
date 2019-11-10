import React, { useEffect, useContext } from "react";
import history from "./history";
import Context from "./context";
import * as ACTIONS from "../store/actions/login_actions/login_actions";

const AuthCheck = () => {
  const context = useContext(Context);

  useEffect(() => {
    if (context.authObj.isAuthenticated()) {
      context.handleUserLogin();
      context.handleUserAddProfile(context.authObj.userProfile);
      history.replace("/");
    } else {
      context.hanlleUserLogout();
      context.handleUserRemoveProfile();
      history.replace("/");
    }
  }, []);

  return <div></div>;
};

export default AuthCheck;
