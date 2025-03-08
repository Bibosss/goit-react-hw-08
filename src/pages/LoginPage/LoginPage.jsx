import DocumentTitle from "../../components/DocumentTitle/DocumentTitle";
import { LoginForm } from "../../components/LoginForm/LoginForm";

export default function LoginPage() {
    return (
        <div>
            <DocumentTitle>Please log in</DocumentTitle>
            <LoginForm />
        </div>
    )
}