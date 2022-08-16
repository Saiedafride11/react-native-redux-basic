import { configureStore, combineReducers } from "@reduxjs/toolkit";
import counterReducer from './counterSlice';
import modeReducer from './themeSlice';


const rootReducer = combineReducers({
      counter: counterReducer,  // slice page name da dibo
      theme: modeReducer, // slice page name da dibo
})

const store = configureStore({
      reducer: rootReducer
})

export default store;