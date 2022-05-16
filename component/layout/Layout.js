import MainNavigation from "./MainNavigation";
import classes from "./Layout.module.css";
import Footer from "./Footer";
import NavBar from "./NavBar";
import ScrollTop from "./ScrollToTop";
import { useEffect, useState } from "react";
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

  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 20) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // for smoothly scrolling
    });
  };

  return (
    <div>
      {showButton && <ScrollTop onScrollTop={scrollToTop} />}
      <NavBar />
      <main className={classes.main}>{props.children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
