import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Context from "../utils/context";

const Header = () => {
  const context = useContext(Context);

  return (
    <div>
      <Link to="/" style={{ padding: "5px" }}>
        Home
      </Link>
      <Link to="/profile" style={{ padding: "5px" }}>
        Profile
      </Link>
      <Link to="/hooksform" style={{ padding: "5px" }}>
        Hooks Form
      </Link>
      <Link to="/privateroute" style={{ padding: "5px" }}>
        Private Route
      </Link>
      {!context.authState ? (
        <button onClick={() => context.authObj.login()}>login</button>
      ) : (
        <button onClick={() => context.authObj.login()}>Logout</button>
      )}
    </div>
  );
};

export default Header;
