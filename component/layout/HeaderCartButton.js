import styles from "./HeaderCartButton.module.css";
import CartIcon from "./CartIcon";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";

const HeaderCartButton = (props) => {
  const [btnIsMoving, setBtnIsMoving] = useState(false);
  const cartNumber = useSelector((state) => state.cart.cartItemNumber);
  // const cartItem = useSelector((state) => state.cart.cartItems);

  const router = useRouter();

  const CartPage = () => {
    router.push("/cart");
  };

  const btnClasses = `${styles.button} ${btnIsMoving ? styles.bump : ""}`;

  useEffect(() => {
    if (cartNumber === 0) {
      return;
    }
    setBtnIsMoving(true);

    const timer = setTimeout(() => {
      setBtnIsMoving(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [cartNumber]);

  return (
    <button className={btnClasses} onClick={CartPage}>
      <span className={styles.icon}>
        <CartIcon></CartIcon>
      </span>
      <span>Your Cart</span>
      <span className={styles.badge}>{cartNumber}</span>
    </button>
  );
};

export default HeaderCartButton;
