import { configureStore } from "@reduxjs/toolkit";
import productList from "./features/ListView/ProductSlice";
import SearchAndFilter from "./features/SearchAndFilter/SearchAndFilterSlice";
import { persistStore, persistCombineReducers } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['products', 'searchAndFilter'] 
};
const rootReducer = {
    products: productList,
    searchAndFilter: SearchAndFilter
}
const persistedReducer = persistCombineReducers(persistConfig, rootReducer);
export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            immutableCheck: { warnAfter: 128 },
            serializableCheck: {
                ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
            },
        }),
})

export const persistor = persistStore(store);