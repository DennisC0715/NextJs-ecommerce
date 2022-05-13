import classes from "./UserNav.module.css";
import Link from "next/link";
import { useSelector } from "react-redux";

const UserNav = (props) => {
  const firstName = useSelector((state) => state.user.firstName);

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
    </div>
  );
};

export default UserNav;
