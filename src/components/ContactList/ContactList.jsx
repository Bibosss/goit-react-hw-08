import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css"
import { selectFilteredContacts } from "../../redux/contacts/selectors";

const ContactList = () => {

    const contacts = useSelector(selectFilteredContacts);

    return (
        <ul className={css.ulCss} >
            {contacts.map((contact, index) => (
                <li key={`${contact.id}-${index}`}>
                    <Contact id={contact.id} name={contact.name} number={contact.number} />
                </li>
            ))}
        </ul>
    )
}

export default ContactList;