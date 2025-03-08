import { useDispatch } from "react-redux"
import ContactForm from "../../components/ContactForm/ContactForm"
import ContactList from "../../components/ContactList/ContactList"
import SearchBox from "../../components/SearchBox/SearchBox"
import { useEffect } from "react"
import { fetchContacts } from "../../redux/contacts/operations"
import DocumentTitle from "../../components/DocumentTitle/DocumentTitle"

export const ContactsPage = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchContacts())
    }, [dispatch])
    
    return (
        <div>
            <DocumentTitle>Phonebook</DocumentTitle>
            <ContactForm />
            <SearchBox />
            <ContactList />
        </div>
    )
}