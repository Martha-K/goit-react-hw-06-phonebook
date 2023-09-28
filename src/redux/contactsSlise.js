import { createSlice } from '@reduxjs/toolkit';


export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    filter: '',
  },
  reducers: {
    addContact(state, action) {
      state.items = [...state.items, action.payload];
    },
    removeContact(state, action) {
      state.items = state.items.filter(el => el.id !== action.payload);
    },
    addFilter(state, action) {
      state.filter = action.payload;
    },
  },
});

export const { addContact, removeContact, addFilter} =
  contactsSlice.actions;
