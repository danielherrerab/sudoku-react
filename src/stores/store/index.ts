import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import rootReducer from "stores/reducer";

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middelwares = [...getDefaultMiddleware({ serializableCheck: false })]

const store = configureStore({
  reducer: persistedReducer,
  middleware: middelwares,
  ...(process.env.NODE_ENV !== "production" ? { devTools: true } : {})
})

const persistor = persistStore(store);

export type RootState = ReturnType<typeof rootReducer>;
export { store, persistor };
