import { Formik, Form, Field } from "formik"
import { useDispatch } from "react-redux"
import { register } from "../../redux/auth/operations";
import { Link, useNavigate } from "react-router-dom";
import css from "./RegistrationForm.module.css"

export const RegistrationForm = () => {
    const dispatch = useDispatch();

    const navigate = useNavigate()

    const initialValues = {
        name: "",
        email: "",
        password: "",
    }

    const handleSubmit = (values, options) => {
        console.log(values);
        dispatch(register(values))
            .unwrap()
            .then(() => navigate("/", {replace: true}))
            .catch(() => console.log("Invalid data"))
        options.resetForm();
    }

    return (
        <div className='formWrapper'>
            <Formik initialValues={initialValues} onSubmit={handleSubmit}>
                <Form className='form'>
                    <label>
                        <span>Name:</span>
                        <Field name="name"/>
                    </label>
                    <label>
                        <span>Email:</span>
                        <Field name="email"/>
                    </label>
                    <label>
                        <span>Password:</span>
                        <Field name="password" type="password"/>
                    </label>
                    <button type="submit">Register</button>

                    <p className={css.link}>You do not have account<Link to="/login" >Get it!</Link></p>
                </Form>
            </Formik>
        </div>
    )
}