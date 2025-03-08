import DocumentTitle from "../../components/DocumentTitle/DocumentTitle";
import { RegistrationForm } from "../../components/RegistrationForm/RegistrationForm";

export default function RegistrationPage() {
    return (
        <div>
            <DocumentTitle>Register your account</DocumentTitle>
            <RegistrationForm/>
        </div>
    )
}