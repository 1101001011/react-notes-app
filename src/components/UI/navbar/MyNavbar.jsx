import React from "react";
import { NavLink } from "react-router-dom";
import classes from './MyNavbar.module.scss'

const MyNavbar = () => (
    <nav className={classes.navbar}>
        <ul className={classes.navbar__list}>
            <li className={classes.navbar__item}>
                <NavLink className={classes.navbar__link} to="/">
                    Home
                </NavLink>
            </li>
            <li className={classes.navbar__item}>
                <NavLink className={classes.navbar__link} to="/about">
                    About
                </NavLink>
            </li>
      </ul>
    </nav>
)

export default MyNavbar