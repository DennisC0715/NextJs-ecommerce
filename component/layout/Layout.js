import MainNavigation from "./MainNavigation";
import classes from "./Layout.module.css";
import Footer from "./Footer";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setIsLoggedIn } from "../ReduxStore/slices/authSlice";


function Layout(props) {
  const dispatch = useDispatch();

  useEffect(() => {
    const initialToken = localStorage.getItem("token");
    if (initialToken) {
      dispatch(setIsLoggedIn());
    }
  });

  return (
    <div>
      <MainNavigation />
      <main className={classes.main}>{props.children}</main>
      <Footer></Footer>
    </div>
  );
}

export default Layout;
