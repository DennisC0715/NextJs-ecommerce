import classes from "./NavBar.module.css";
import HeaderCartButton from "./HeaderCartButton";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/dist/client/router";
import writelogo from "../img/Areion_Decal_Inverted_1.png";
import { useDispatch, useSelector } from "react-redux";
import { logoutHandler } from "../ReduxStore/slices/authSlice";
import { clearUserInfo } from "../ReduxStore/slices/userSlice";
import { clearCart } from "../ReduxStore/slices/cartSlice";
import { clearWishList } from "../ReduxStore/slices/wishListSlice";
import { popLogoutModal } from "../ReduxStore/slices/modalSlice";
import { useState } from "react";
import LogoutModal from "../Modal/LogoutModal";

function NavBar() {
  const [navbarShowed, setNavbarShowed] = useState(false);
  const userIsLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const showLogoutModal = useSelector((state) => state.modal.showModal);
  const dispatch = useDispatch();

  const router = useRouter();

  const homePage = () => {
    router.push("/");
  };

  const logout = () => {
    dispatch(logoutHandler());
    dispatch(clearUserInfo());
    dispatch(clearCart());
    dispatch(clearWishList());
    router.push("/");
  };

  // const login = () => {
  //   router.push("/login");
  // };

  // const logInOrOut = userIsLoggedIn ? (
  //   <button className={classes.btn} onClick={logout}>
  //     Logout
  //   </button>
  // ) : (
  //   <button className={classes.btn} onClick={login}>
  //     Login
  //   </button>
  // );

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
            <Link href="/shop">Shop</Link>
          </li>
          <li className={classes.navbarLinksli} onClick={toggleNavbar}>
            <Link href="/wishList">WishLists</Link>
          </li>
          <li className={classes.navbarLinksli} onClick={toggleNavbar}>
            <Link href={links}>Account</Link>
          </li>
          <li className={classes.navbarLinksli} onClick={logoutAndToggle}>
            {userIsLoggedIn && <Link href="">Logout</Link>}
          </li>
          <li>{showLogoutModal && <LogoutModal></LogoutModal>}</li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
