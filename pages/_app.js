import "../styles/globals.css";
import Layout from "../component/layout/Layout";
import { store } from "../component/ReduxStore/store";
import { Provider } from "react-redux";


function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}
export default MyApp;
