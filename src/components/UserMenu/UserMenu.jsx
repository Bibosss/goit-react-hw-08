import { useDispatch, useSelector } from "react-redux"
import { selectUser } from "../../redux/auth/selectors"
import css from "./UserMenu.module.css"
import { logout } from "../../redux/auth/operations";

const UserMenu = () => {
    const user = useSelector(selectUser);
    const dispatch = useDispatch();

    return (
        <nav className="nav">
            <p>Welcome {user.email}</p>
            <button className={css.button} onClick={() => dispatch(logout())}>Logout</button>
        </nav>
    )
}

export default UserMenu