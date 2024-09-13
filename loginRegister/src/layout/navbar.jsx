import React, { useEffect, useState } from "react";
import "./style.css";
import { Link, NavLink } from "react-router-dom";
function Navbar() {
  const [userActive, setUserActive] = useState(false);
  useEffect(() => {
    let user = localStorage.getItem("userId");
    console.log(user);
    
    if (user) {
      setUserActive(true);
    }
  }, []);


  const logOut = ()=>{
    if(userActive){
        localStorage.getItem("userId")
        setUserActive(false)
    }
  }
  return (
    <div className="flex">
      <NavLink className="nav-item" to={"/"}>
        Home
      </NavLink>
      <NavLink className="nav-item" to={"/about"}>
        About
      </NavLink>
      <Link className="nav-item" to={"/login"} onClick={logOut}>{userActive ? "Logout" : "Login"}</Link>
    </div>
  );
}

export default Navbar;
