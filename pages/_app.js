import "../styles/globals.css";
import Layout from "../component/layout/Layout";
import { store } from "../component/ReduxStore/store";
import { Provider } from "react-redux";
import LogoutWrapper from "../component/Modal/LougoutModalWrapper";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Layout>
        <LogoutWrapper>
          <Component {...pageProps} />
        </LogoutWrapper>
      </Layout>
    </Provider>
  );
}
export default MyApp;
