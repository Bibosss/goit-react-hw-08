import clsx from "clsx"
import { NavLink } from "react-router-dom"
import s from "./AuthNav.module.css"

export const AuthNav = () => {

    return (
        <nav className="nav">
            <NavLink className={({ isActive }) => clsx(s.link, isActive && s.active)} to="/register">
                Register
            </NavLink>
            <NavLink className={({ isActive }) => clsx(s.link, isActive && s.active)} to="/login">
                Login
            </NavLink>
        </nav>
    )
}