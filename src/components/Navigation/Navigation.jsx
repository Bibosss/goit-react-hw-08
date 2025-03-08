import { NavLink } from "react-router-dom"
import s from "./Navigation.module.css"
import clsx from "clsx"

export const Navigation = () => {
    return (
        <nav className="nav">
            <NavLink className={({ isActive }) => clsx(s.link, isActive && s.active)} to="/">
                Home
            </NavLink>
            <NavLink className={({ isActive }) => clsx(s.link, isActive && s.active)} to="/contacts">
                Contacts
            </NavLink>
        </nav>
    )
}