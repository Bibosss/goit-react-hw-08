import { NavLink } from "react-router-dom"
import s from "./Navigation.module.css"
import clsx from "clsx"
import { selectIsLoggedIn } from "../../redux/auth/selectors"
import { useSelector } from "react-redux"

export const Navigation = () => {
    const isLoggedIn = useSelector(selectIsLoggedIn);

    return (
        <nav className="nav">
            <NavLink className={({ isActive }) => clsx(s.link, isActive && s.active)} to="/">
                Home
            </NavLink>
            {isLoggedIn && (
                <NavLink
                    className={({ isActive }) => clsx(s.link, isActive && s.active)}
                    to="/contacts"
                >
                    Contacts
                </NavLink>
            )}
        </nav>
    )
}   