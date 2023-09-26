import { createSlice } from '@reduxjs/toolkit';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: [],
  reducers: {
    addContact(state, action) {
      return [...state, action.payload];
    },
    removeContact(state, action) {
      return state.filter(el => el.name !== action.payload);
    },
  },
});

export const { addContact, removeContact } =
  contactsSlice.actions;
