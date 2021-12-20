//Importando react
import React from 'react';

const Header = (props) => {
return(
  <nav className="navbar navbar-light bg-light ">
      <div>
          <img src="logo192" width="32px"  height="32" className="d-inline-block align-top mr-sm-2" alt="Logo"/>
          <a className="navbar-brand"  href="/">Facebook Login</a>
          </div>
          {props.children}
  </nav>
);
};






export default Header;
