import classes from "./Checkout.module.css";
import { useSelector } from "react-redux";

const Checkout = (props) => {
  const subtotal = useSelector((state) => state.cart.totalPrice);
  const totalItemQuantity = useSelector((state) => state.cart.cartItemNumber);
  const saleTax = Math.ceil(Math.round(subtotal * 0.13));
  const deliveryFee = totalItemQuantity * 20;
  const totalPrice = subtotal + saleTax + deliveryFee;

  return (
    <div className={classes.container}>
      <h1>Order Summary</h1>
      <h3>
        <span>{totalItemQuantity} ITEMS</span>
        <span className={classes.split}>${subtotal}</span>
      </h3>
      <h3>
        <span>DELIVERY</span>
        <span className={classes.split}>{deliveryFee}</span>
      </h3>
      <h3>
        <span>SALE TAX</span>
        <span className={classes.split}>${saleTax}</span>
      </h3>
      <p>
        <span>Total</span>
        <span className={classes.split}>${totalPrice}</span>
      </p>
      <botton className={classes.button} onClick={props.ClearCart}>
        Clear
      </botton>
      <botton className={classes.button}>Checkout</botton>
    </div>
  );
};

export default Checkout;
