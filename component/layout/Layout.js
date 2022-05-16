import MainNavigation from "./MainNavigation";
import classes from "./Layout.module.css";
import Footer from "./Footer";
import NavBar from "./NavBar";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setIsLoggedIn } from "../ReduxStore/slices/authSlice";
import LogoutModal from "../Modal/LogoutModal";

function Layout(props) {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   const initialToken = localStorage.getItem("token");
  //   if (initialToken) {
  //     dispatch(setIsLoggedIn());
  //   }
  // });

  return (
    <div>
      <NavBar />
      <main className={classes.main}>{props.children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
