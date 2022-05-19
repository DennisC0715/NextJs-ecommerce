import { Fragment } from "react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Head from "next/head";
import OrderHistoryPage from "../../../component/ProfilePage/OrderHistoryPage";
import ProfilePageLayout from "../../../component/ProfilePage/profilePageLayout";
import { useSelector } from "react-redux";

const Orderpage = (props) => {
  const firstName = useSelector((state) => state.user.firstName);
  const router = useRouter();
  useEffect(() => {
    const initialToken = localStorage.getItem("token");
    if (!initialToken) {
      router.push("/login");
    }
  });

  return (
    <Fragment>
      <ProfilePageLayout userFirstName={firstName}>
        <Head>
          <title>orderHistory Page</title>
          <meta charset="utf-8" />
          <meta
            name="viewport"
            content="width=device-width,initial-scale=1.0"
          />
        </Head>
        <OrderHistoryPage />
      </ProfilePageLayout>
    </Fragment>
  );
};
export default Orderpage;
