import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "@redux-devtools/extension";
import { createWrapper } from "next-redux-wrapper";

// Static state from "./staticState.js"
import { sources, authors, contentTypes } from "./staticsState";
import { postGetReducer } from "./features/homePage";
// Reducer Import

const reducer = combineReducers({
  sources: sources,
  authors: authors,
  contentTypes: contentTypes,
  posts: postGetReducer,
});

const initialState = {};

const middleware = [thunk];

export const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

// assigning store to next wrapper
const makeStore = () => store;

export const wrapper = createWrapper(makeStore);

// https://medium.com/how-to-react/how-to-setup-redux-in-nextjs-5bce0d82b8de
