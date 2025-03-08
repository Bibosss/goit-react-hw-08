import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../auth/operations";

// const BASE_URL = "https://67b86255699a8a7baef3dca1.mockapi.io/contacts";

export const fetchContacts = createAsyncThunk("contacts/fetchContacts", async (_, thunkAPI) => {
    try {
        const { data } = await api.get("/contacts");
        return data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
})

export const addContact = createAsyncThunk("contacts/addContact", async (contact, thunkAPI) => {
    try {
        const { data } = await api.post("/contacts", contact);
        return data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
})

export const deleteContact = createAsyncThunk("contacts/deleteContact", async (taskId, thunkAPI) => {
    try {
        const { data } = await api.delete(`/contacts/${taskId}`);
        return data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
})