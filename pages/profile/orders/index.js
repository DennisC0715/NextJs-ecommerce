import { Fragment } from "react";
import UserNav from "../../../component/User/UserNav";
import { useRouter } from "next/router";
import { useEffect } from "react";

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
      <UserNav></UserNav>
      <h1>Order History is Empty</h1>
    </Fragment>
  );
};
export default Orderpage;
