import React from 'react';
import './Layout.css'
import { NavLink } from "react-router-dom";

function Layout  (props) {

  
  return(
        <div className="layout">
            <div className="nav-bar">
            <NavLink className="linkb" to="/">
                HOME
            </NavLink>
            <NavLink className="linkb" to="/landingpage">
                Sets of Flashcards
            </NavLink>
            <NavLink className="linkb" to="/">
                Create New Flashcard Set
            </NavLink>

            </div>
            <div className="layout-children">{props.children}</div>
        </div>
  );
}

export default Layout;