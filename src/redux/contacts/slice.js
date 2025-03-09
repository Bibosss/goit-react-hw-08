import { createSlice } from "@reduxjs/toolkit";
import { addContact, deleteContact, fetchContacts } from "./operations";
import { logout } from "../auth/operations";

const initialState = {
    items: [],
    loading: false,
    error: null,
};

export const contactsSlice = createSlice({
    name: "contacts",
    initialState,
    extraReducers: builder => {
        builder.addCase(fetchContacts.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(fetchContacts.fulfilled, (state, action) => {
            state.loading = false;
            state.items = action.payload;
            state.error = null;
        })
        .addCase(fetchContacts.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
        .addCase(addContact.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(addContact.fulfilled, (state, action) => {
            state.loading = false;
            state.items.push(action.payload)
            state.error = null;
        })
        .addCase(addContact.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
        .addCase(deleteContact.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(deleteContact.fulfilled, (state, action) => {
            state.loading = false;
            state.items = state.items.filter((item) => item.id !== action.payload.id)
            state.error = null;
        })
        .addCase(deleteContact.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
            .addCase(logout.fulfilled, (state) => {
                state.items = [];
                state.loading = false;
                state.error = null;
        })
    }
})

export default contactsSlice.reducer;