import classes from "./UserNav.module.css";
import Link from "next/link";
import { useSelector } from "react-redux";

const UserNav = (props) => {
  const firstName = useSelector((state) => state.user.firstName);

  return (
    <header className={classes.headerUser}>
      <ul>
        <h1>Hi {firstName}</h1>
        <li>
          <Link href="/profile">PROFILE</Link>
        </li>
        <li>
          <Link href="/profile/orders">ORDERS</Link>
        </li>
        <li>
          <Link href="/profile/account">ACCOUNT</Link>
        </li>
      </ul>
    </header>
  );
};

export default UserNav;
