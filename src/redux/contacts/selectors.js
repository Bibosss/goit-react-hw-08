import { createSelector } from "@reduxjs/toolkit";
import { selectNameFilter } from "../filters/selector";

export const selectContacts = (state) => state.contacts.items;
export const selectError = (state) => state.contacts.error;
export const selectLoading = (state) => state.contacts.loading;

export const selectFilteredContacts = createSelector([selectContacts, selectNameFilter], (contacts, filters) => {
    return contacts.filter(contact => contact.name.toLowerCase().includes(filters.toLowerCase()) || contact.number.toLowerCase().includes(filters.toLowerCase()))
})