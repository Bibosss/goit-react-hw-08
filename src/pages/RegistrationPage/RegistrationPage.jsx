import { useSelector } from "react-redux";
import DocumentTitle from "../../components/DocumentTitle/DocumentTitle";
import { RegistrationForm } from "../../components/RegistrationForm/RegistrationForm";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { Navigate } from "react-router-dom";

export default function RegistrationPage() {

    const isLoggedIn = useSelector(selectIsLoggedIn);

    if (isLoggedIn) {
      return <Navigate to="/contacts" />
    };
    
    return (
        <div>
            <DocumentTitle>Register your account</DocumentTitle>
            <RegistrationForm />
        </div>
    )
}