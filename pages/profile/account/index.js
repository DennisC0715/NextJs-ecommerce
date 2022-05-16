import { Fragment } from "react";
import UserNav from "../../../component/User/UserNav";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Head from "next/head";
import ProfilePageLayout from "../../../component/ProfilePage/profilePageLayout";

const AccountPage = () => {
  const router = useRouter();

  useEffect(() => {
    const initialToken = localStorage.getItem("token");
    if (!initialToken) {
      router.push("/login");
    }
  });

  return (
    <Fragment>
      <ProfilePageLayout>
        <Head>
          <title>account Information Page</title>
          <meta charset="uft-8" />
          <meta
            name="viewport"
            content="width=device-width,initial-scale=1.0"
          />
        </Head>

        <h1>Personal Information</h1>
        <h1>Address Book</h1>
        <h1>Log Out</h1>
      </ProfilePageLayout>
    </Fragment>
  );
};
export default AccountPage;
