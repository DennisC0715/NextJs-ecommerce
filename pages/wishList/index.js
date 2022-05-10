import { Fragment } from "react";
import WishList from "../../component/FavorateList/WishList";
import Head from "next/head";

const WishListPage = () => {
  return (
    <Fragment>
      {/* <Head>
        <title>WishList</title>
        <mata charset="uft-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head> */}
      <WishList />
    </Fragment>
  );
};

export default WishListPage;
