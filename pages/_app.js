import "../styles/bootstrap.css";
import "../styles/global.css";
import { wrapper, store } from "../redux/store";
import { Provider } from "react-redux";

// Provider

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  );
}

export default wrapper.withRedux(MyApp);
