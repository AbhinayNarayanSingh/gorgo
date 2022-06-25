import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import { createWrapper } from "next-redux-wrapper";

// Middleware
import createSagaMiddleware from "redux-saga";

//
import { watchCategoryPostGET } from "./actions/categoryPageAction";

// Static state from "./staticState.js"
import { auth, sources, authors, contentTypes } from "./staticsState";

// Reducers
import {
  categoryPostGETReducer,
  postGetReducer,
} from "./reducers/homePageReducer";
import { searchPostGETReducer } from "./reducers/searchPageReducer";
import { userAuthenticationReducer } from "./reducers/userAuthenticationReducer";
import { blogPostReducer } from "./reducers/blogPostReducer";

// SagaWatcher
import { watchSearchPostGET } from "./actions/searchPageAction";
import { watchHomePagePostGET } from "./actions/homePageActions";
import { watchUserAuthentication } from "./actions/userAuthenticationAction";
import { watchBlogPostPOST } from "./actions/blogPostAction";

//
import { userInfoFromLocalStorage } from "./initialState";

const reducer = combineReducers({
  sources: sources,
  authors: authors,
  contentTypes: contentTypes,

  posts: postGetReducer,
  categoryPost: categoryPostGETReducer,
  searchPost: searchPostGETReducer,

  auth: userAuthenticationReducer,
  blog: blogPostReducer,
});

const initialState = {
  // auth: userInfoFromLocalStorage,
};

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];

export const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

sagaMiddleware.run(watchHomePagePostGET);
sagaMiddleware.run(watchSearchPostGET);
sagaMiddleware.run(watchCategoryPostGET);
sagaMiddleware.run(watchUserAuthentication);
sagaMiddleware.run(watchBlogPostPOST);

// assigning store to next wrapper
const makeStore = () => store;
export const wrapper = createWrapper(makeStore);

// https://medium.com/how-to-react/how-to-setup-redux-in-nextjs-5bce0d82b8de
