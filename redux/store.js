import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import { createWrapper } from "next-redux-wrapper";

// Middleware
import thunk from "redux-thunk";
import createSagaMiddleware from "redux-saga";

//
import { watchCategoryPostGET } from "./actions/categoryPageAction";

// Static state from "./staticState.js"
import { sources, authors, contentTypes } from "./staticsState";
import {
  categoryPostGETReducer,
  postGetReducer,
} from "./reducers/homePageReducer";
import { searchPostGETReducer } from "./reducers/searchPageReducer";
import { watchSearchPostGET } from "./actions/searchPageAction";
import { watchAlert } from "./actions/alertAction";
import { alertReducer } from "./reducers/alertReducer";

// Reducer Import
const reducer = combineReducers({
  sources: sources,
  authors: authors,
  contentTypes: contentTypes,
  posts: postGetReducer,
  categoryPost: categoryPostGETReducer,
  searchPost: searchPostGETReducer,
  alert: alertReducer,
});

const initialState = {};

const sagaMiddleware = createSagaMiddleware();

const middleware = [thunk, sagaMiddleware];

export const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

sagaMiddleware.run(watchSearchPostGET);
sagaMiddleware.run(watchCategoryPostGET);
sagaMiddleware.run(watchAlert);

// assigning store to next wrapper
const makeStore = () => store;
export const wrapper = createWrapper(makeStore);

// https://medium.com/how-to-react/how-to-setup-redux-in-nextjs-5bce0d82b8de
