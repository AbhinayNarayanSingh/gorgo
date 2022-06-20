const { connect, Provider } = ReactRedux;
const { createStore, applyMiddleware } = Redux;
const createSagaMiddleware = ReduxSaga.default;
const { takeEvery, put, call } = ReduxSaga.effects;

// Reducer
const initialState = {
  url: "",
  loading: false,
  error: false,
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "REQUESTED_DOG":
      return {
        url: "",
        loading: true,
        error: false,
      };
    case "REQUESTED_DOG_SUCCEEDED":
      return {
        url: action.url,
        loading: false,
        error: false,
      };
    case "REQUESTED_DOG_FAILED":
      return {
        url: "",
        loading: false,
        error: true,
      };
    default:
      return state;
  }
};

// Action Creators
const requestDog = () => {
  return { type: "REQUESTED_DOG" };
};

const requestDogSuccess = (data) => {
  return { type: "REQUESTED_DOG_SUCCEEDED", url: data.message };
};

const requestDogError = () => {
  return { type: "REQUESTED_DOG_FAILED" };
};

const fetchDog = () => {
  return { type: "FETCHED_DOG" };
};

// Sagas
function* watchFetchDog() {
  yield takeEvery("FETCHED_DOG", fetchDogAsync);
}

function* fetchDogAsync() {
  try {
    yield put(requestDog()); // yield put({ type: 'REQUESTED_DOG' })
    const data = yield call(() => {
      return fetch("https://dog.ceo/api/breeds/image/random").then((res) =>
        res.json()
      );
    });
    yield put(requestDogSuccess(data)); // yield put({ type: 'REQUESTED_DOG_SUCCEEDED', url: data.message })
  } catch (error) {
    yield put(requestDogError()); // yield put({ type: 'REQUESTED_DOG_FAILED' })
  }
}

// Component
function App({ loading, dispatch, error, url }) {
  return (
    <div>
      <button onClick={() => dispatch(fetchDog(dispatch))}>Show Dog</button>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error, try again</p>
      ) : (
        <p>
          <img src={url} />
        </p>
      )}
    </div>
  );
}

// Store
const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(watchFetchDog);

const ConnectedApp = connect((state) => state)(App);

// Container component
ReactDOM.render(
  <Provider store={store}>
    <ConnectedApp />
  </Provider>,
  document.getElementById("root")
);

// This is what happens behind the scenes after you click the button:

//     The action constant "FETCHED_DOG" is dispatched, though function fetchDog()

//             <button      onClick={() => dispatch(  fetchDog()  )}     >Show Dog</button>

//     The watcher saga watchFetchDog() takes the dispatched action constant and calls the worker saga fetchDogAsync()

//           function* watchFetchDog() {
//               yield takeEvery('FETCHED_DOG', fetchDogAsync);
//             }

//     The action to show the loading indicator is dispatched

//           yield put(requestDog());                    // yield put({ type: 'REQUESTED_DOG' })

//     The API call is executed

//           const data = yield call(() => {
//               return fetch('https://dog.ceo/api/breeds/image/random')
//                       .then(res => res.json())
//               }
//             );
//            yield put(requestDogSuccess(data));         // yield put({ type: 'REQUESTED_DOG_SUCCEEDED', url: data.message })

//     An action to update the state is dispatched (success or fail)

// resources

// https://blog.logrocket.com/understanding-redux-saga-action-creators-sagas/
// https://www.youtube.com/watch?v=eUMbH6X_Adc
