import { useDispatch, useSelector } from "react-redux"
import { selectUser } from "../../redux/auth/selectors"
import { logout } from "../../redux/auth/operations";

const UserMenu = () => {
    const user = useSelector(selectUser);
    const dispatch = useDispatch();

    return (
        <nav className="nav">
            <p>Welcome {user.email}</p>
            <button onClick={() => dispatch(logout())}>Logout</button>
        </nav>
    )
}

export default UserMenu