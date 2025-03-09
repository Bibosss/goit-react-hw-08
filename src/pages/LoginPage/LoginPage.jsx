import { useSelector } from "react-redux";
import DocumentTitle from "../../components/DocumentTitle/DocumentTitle";
import { LoginForm } from "../../components/LoginForm/LoginForm";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { Navigate } from "react-router-dom";

export default function LoginPage() {
    const isLoggedIn = useSelector(selectIsLoggedIn);

    if (isLoggedIn) {
    return <Navigate to="/contacts" />;
    }

    return (
        <div>
            <DocumentTitle>Please log in</DocumentTitle>
            <LoginForm />
        </div>
    )
}