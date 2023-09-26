import { configureStore } from '@reduxjs/toolkit';
import { contactsSlice } from './contactsSlise';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// const persistConfig = {
//   key: 'root',
//   storage,
// };

// const persistedClicks = persistReducer(persistConfig, contactsSlice.reducer);

export const store = configureStore({
  reducer: {
    contacts: contactsSlice.reducer,
  },
});

// export const persistor = persistStore(store);
