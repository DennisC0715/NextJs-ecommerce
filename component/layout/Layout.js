import classes from "./Layout.module.css";
import Footer from "./Footer";
import NavBar from "./NavBar";
import ScrollTop from "./ScrollToTop";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setIsLoggedIn } from "../ReduxStore/slices/authSlice";
import { useRouter } from "next/router";

function Layout(props) {
  const dispatch = useDispatch();
  // const router = useRouter();

  // useEffect(() => {
  //   const initialToken = localStorage.getItem("token");
  //   if (initialToken) {
  //     dispatch(setIsLoggedIn());
  //   } else {
  //     router.push("/login");
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
