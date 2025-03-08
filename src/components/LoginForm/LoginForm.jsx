import { Formik, Form, Field } from "formik"
import { useDispatch } from "react-redux"
import { login } from "../../redux/auth/operations";
import { Link, useNavigate } from "react-router-dom";
import css from "./LoginForm.module.css"

export const LoginForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const initialValues = {
            email: "",
            password: "",
        }
    
    const handleSubmit = (values, options) => {
        console.log(values);
        dispatch(login(values))
            .unwrap()
            .then(() => navigate("/contacts", {replace: true}))
            .catch(() => console.log("Invalid data"))
        options.resetForm();
    }
    
        return (
            <div className='formWrapper'>
                <Formik initialValues={initialValues} onSubmit={handleSubmit}>
                    <Form className='form'>
                        <label>
                            <span>Email:</span>
                            <Field name="email"/>
                        </label>
                        <label>
                            <span>Password:</span>
                            <Field name="password" type="password"/>
                        </label>
                        <button type="submit">Login</button>

                        <p className={css.link}>You do not have account yet? <Link to="/register" >Get it!</Link></p>
                    </Form>
                </Formik>
            </div>
        )
}