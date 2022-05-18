import classes from "./UserNav.module.css";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { popLogoutModal } from "../ReduxStore/slices/modalSlice";

const UserNav = (props) => {
  const dispatch = useDispatch();
  const firstName = props.userFirstName;

  const showLogoutModal = () => {
    dispatch(popLogoutModal());
  };

  return (
    <div className={classes.headerUser}>
      <li>Hi {firstName},</li>
      <li>
        <Link href="/profile">PROFILE</Link>
      </li>
      <li>
        <Link href="/profile/orders">ORDERS</Link>
      </li>
      <li>
        <Link href="/profile/account">ACCOUNT</Link>
      </li>
      <li onClick={showLogoutModal}>
        <Link href="">LOGOUT</Link>
      </li>
    </div>
  );
};

export default UserNav;
