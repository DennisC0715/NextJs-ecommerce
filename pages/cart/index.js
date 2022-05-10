import Cart from "../../component/Cart/Cart";
import { useSelector } from "react-redux";
import { Fragment } from "react";
import Head from "next/head";

const ShopingCart = () => {
  return (
    <Fragment>
      {/* <Head>
        <title>Cart</title>
        <mata charset="uft-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head> */}
      <Cart />
    </Fragment>
  );
};

export default ShopingCart;
