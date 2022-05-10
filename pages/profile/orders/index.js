import { Fragment } from "react";
import UserNav from "../../../component/User/UserNav";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Head from "next/head";

const Orderpage = () => {
  const router = useRouter();
  useEffect(() => {
    const initialToken = localStorage.getItem("token");
    if (!initialToken) {
      router.push("/login");
    }
  });

  return (
    <Fragment>
      <Head>
        <title>orderHistory Page</title>
        <meta charset="uft-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1.0" />
      </Head>
      <UserNav></UserNav>
      <h1>Order History is Empty</h1>
    </Fragment>
  );
};
export default Orderpage;
