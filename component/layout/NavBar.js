import classes from "./NavBar.module.css";
import HeaderCartButton from "./HeaderCartButton";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/dist/client/router";
import writelogo from "../img/Areion_Decal_Inverted_1.png";
import { useDispatch, useSelector } from "react-redux";
import { popLogoutModal } from "../ReduxStore/slices/modalSlice";
import { useState } from "react";

function NavBar() {
  const [navbarShowed, setNavbarShowed] = useState(false);
  const userIsLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const dispatch = useDispatch();
  const router = useRouter();

  const homePage = () => {
    router.push("/");
  };

  const toggleNavbar = () => {
    setNavbarShowed((navbarShowed) => !navbarShowed);
  };

  const logoutAndToggle = () => {
    dispatch(popLogoutModal());
    toggleNavbar();
  };

  const showNavbar = `${classes.navbarLinksul} ${
    navbarShowed ? classes.active : ""
  }`;

  const links = userIsLoggedIn ? "/profile" : "/login";

  return (
    <nav className={classes.navbar}>
      {/* <div>{logInOrOut}</div> */}
      <div>
        <a href className={classes.toggle} onClick={toggleNavbar}>
          <span className={classes.bar}></span>
          <span className={classes.bar}></span>
          <span className={classes.bar}></span>
        </a>
      </div>
      <div className={classes.logo}>
        <Image onClick={homePage} src={writelogo} alt="areionBrakes inc logo" />
      </div>
      <div className={classes.cartbutton}>
        <HeaderCartButton />
      </div>
      <div>
        <ul className={showNavbar}>
          <a href="#" className={classes.closebtn} onClick={toggleNavbar}>
            &times;
          </a>

          <li className={classes.navbarLinksli} onClick={toggleNavbar}>
            <Link href="/">Home</Link>
          </li>
          <li className={classes.navbarLinksli} onClick={toggleNavbar}>
            <Link href="/cart">Cart</Link>
          </li>
          <li className={classes.navbarLinksli} onClick={toggleNavbar}>
            <Link href="/shop">Shop</Link>
          </li>
          <li className={classes.navbarLinksli} onClick={toggleNavbar}>
            <Link href="/wishList">WishLists</Link>
          </li>
          <li className={classes.navbarLinksli} onClick={toggleNavbar}>
            <Link href={links}>Account</Link>
          </li>
          {/* <li className={classes.navbarLinksli} onClick={toggleNavbar}>
            <Link href="https://github.com/DennisC0715/NextJs-ecommerce">
              GitHub
            </Link>
          </li> */}
          <li className={classes.navbarLinksli} onClick={logoutAndToggle}>
            {userIsLoggedIn && <Link href="">Logout</Link>}
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
