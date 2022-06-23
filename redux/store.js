import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import { createWrapper } from "next-redux-wrapper";

// Middleware
import createSagaMiddleware from "redux-saga";

//
import { watchCategoryPostGET } from "./actions/categoryPageAction";

// Static state from "./staticState.js"
import { auth, sources, authors, contentTypes } from "./staticsState";
import {
  categoryPostGETReducer,
  postGetReducer,
} from "./reducers/homePageReducer";
import { searchPostGETReducer } from "./reducers/searchPageReducer";
import { watchSearchPostGET } from "./actions/searchPageAction";

import { homePagePostGET } from "./actions/homePageActions";

// Reducer Import
const reducer = combineReducers({
  sources: sources,
  authors: authors,
  contentTypes: contentTypes,
  posts: postGetReducer,
  categoryPost: categoryPostGETReducer,
  searchPost: searchPostGETReducer,

  auth: auth,
});

const initialState = {};

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];

export const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

sagaMiddleware.run(homePagePostGET);
sagaMiddleware.run(watchSearchPostGET);
sagaMiddleware.run(watchCategoryPostGET);
// sagaMiddleware.run(watchAlert);

// assigning store to next wrapper
const makeStore = () => store;
export const wrapper = createWrapper(makeStore);

// https://medium.com/how-to-react/how-to-setup-redux-in-nextjs-5bce0d82b8de
