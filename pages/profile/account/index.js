import { Fragment } from "react";
import UserNav from "../../../component/User/UserNav";
import { useRouter } from "next/router";
import { useEffect } from "react";

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
      <UserNav></UserNav>
      <h1>Personal Information</h1>
      <h1>Address Book</h1>
      <h1>Log Out</h1>
    </Fragment>
  );
};
export default AccountPage;
