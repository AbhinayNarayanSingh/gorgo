import "../styles/bootstrap.css";
import "../styles/global.css";
import { wrapper, store } from "../redux/store";
import { Provider, useSelector, useDispatch } from "react-redux";
import { getCookie } from "../utils/session";
import { useEffect } from "react";
import { userSessionResumeAction } from "../redux/actions/userAuthenticationAction";

// Provider

function MyApp({ Component, pageProps }) {
  const { isUserIsAuthenticated } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    const auth = getCookie("token");
    if (auth && !isUserIsAuthenticated) {
      dispatch(userSessionResumeAction());
    }
  }, []);
  return (
    <>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  );
}
export default wrapper.withRedux(MyApp);
