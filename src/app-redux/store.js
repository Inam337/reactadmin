// store.js
import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "../app-redux/features/postSlice";
import appStateReducer from "../app-redux/features/appStateSlice";
const store = configureStore({
  reducer: {
   posts: postsReducer,
    appState: appStateReducer
    // Include other reducers if you have them
  },
});

export default store;