import { useDispatch } from "react-redux";
import css from "./Contact.module.css";
import { deleteContact } from "../../redux/contacts/operations";

const Contact = ({ name, number, id }) => {

    const dispatch = useDispatch()

    const handleDelete = () => {
        dispatch(deleteContact(id))
    }

    return (
        <div className={css.contactCard}>
            <p>{name}</p>
            <p>{number}</p>
            <button className={css.contactBut} onClick={handleDelete}>Delete</button>
        </div>
    )
}

export default Contact;