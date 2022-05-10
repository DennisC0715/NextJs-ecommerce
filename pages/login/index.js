import { Fragment } from "react";
import LoginPage from "../../component/Login/LoginPage";
import Head from "next/head";

const Login = () => {
  return (
    <Fragment>
      {/* <Head>
        <title>Login</title>
        <mata charset="uft-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head> */}
      <LoginPage />
    </Fragment>
  );
};
export default Login;
