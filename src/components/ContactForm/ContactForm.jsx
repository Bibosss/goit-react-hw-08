import { Field, Form, Formik } from "formik";
import { useId } from "react";
import css from "./ContactForm.module.css"

import { ErrorMessage } from "formik";
import * as Yup from "yup";
import { toast, ToastContainer } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { addContact } from "../../redux/contacts/operations";
import { selectContacts } from "../../redux/contacts/selectors";

const ContactForm = () => {
    const FeedbackSchema = Yup.object().shape({
        username: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Required"),
        tel: Yup.string().matches(/^[+\d\s\-()]{3,20}$/, "Invalid phone number format").required("Required"),
    });

    const dispatch = useDispatch();

    const usernameID = useId();
    const numberID = useId();

    const initialValues = {
        username: "",
        tel: "",
    };

    const contacts = useSelector(selectContacts);

    const handleAdd = (values, actions) => {
        const isDublicate = contacts.some(contact => contact.number === values.number)
        console.log(values);
        if (isDublicate) {
            toast.error("This number is already in use!");
        } else {
            dispatch(addContact({ name: values.username, number: values.tel }));
            toast.success("Contact added successfully!");
            actions.resetForm();
        }
    }

    return (
        <div>
            <ToastContainer />
            <Formik initialValues={initialValues} onSubmit={handleAdd} validationSchema={FeedbackSchema} >
                <Form className={css.formCss}>
                    <label htmlFor={usernameID}>Name</label>
                    <Field id={usernameID} className={css.inputField} type="text" name="username" placeholder="Enter name" />
                    <ErrorMessage className={css.errorMes} name="username" component="span" />

                    <label htmlFor={numberID}>Number</label>
                    <Field className={css.inputField} type="tel" name="tel" id={numberID} component={({ field, }) => (
                        <input
                            {...field}
                            className={css.inputField}
                            placeholder="xxx-xx-xx"
                        />
                    )} />
                    <ErrorMessage className={css.errorMes} name="tel" component="span" />
                    
                    <div className={css.divButton} >
                        <button className={css.button} type="submit" >Add contact</button>
                    </div>
                </Form>
            </Formik>
        </div>
    )
}

export default ContactForm;