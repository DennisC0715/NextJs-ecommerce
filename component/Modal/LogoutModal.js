import style from "./LogoutModal.module.css";
import Card from "../layout/Card";
import { useSelector } from "react-redux";
import { clearUserInfo } from "../ReduxStore/slices/userSlice";
import { clearCart } from "../ReduxStore/slices/cartSlice";
import { clearWishList } from "../ReduxStore/slices/wishListSlice";
import { logoutHandler } from "../ReduxStore/slices/authSlice";
import { hideLogoutModal } from "../ReduxStore/slices/modalSlice";
import { useDispatch } from "react-redux";

const LogoutModal = () => {
  const isUserLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const dispatch = useDispatch();
  const hideModal = () => {
    dispatch(hideLogoutModal());
  };

  const lougoutHandler = () => {
    dispatch(logoutHandler());
    setTimeout(() => {
      dispatch(hideLogoutModal());
      dispatch(clearCart());
      dispatch(clearWishList());
      dispatch(clearUserInfo());
    }, 1500);
  };
  return (
    <div>
      <div className={style.backdrop} />
      <Card className={style.modal}>
        <header className={style.header}>
          <h2>Logout Alert</h2>
        </header>
        <div className={style.content}>
          <p>
            {isUserLoggedIn
              ? "Are you sure you want to log out?"
              : "You've logged out successfully!"}
          </p>
        </div>
        <footer className={style.actions}>
          <button className={style.btn} onClick={hideModal}>
            Keep me logged in
          </button>
          <button className={style.btn} onClick={lougoutHandler}>
            Log out anyway
          </button>
        </footer>
      </Card>
    </div>
  );
};

export default LogoutModal;
