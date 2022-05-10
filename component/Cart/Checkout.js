import classes from "./Checkout.module.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";


const Checkout = (props) => {
  const subtotal = useSelector((state) => state.cart.totalPrice);
  const totalItemQuantity = useSelector((state) => state.cart.cartItemNumber);
  const saleTax = Math.ceil(Math.round(subtotal * 0.13));
  const deliveryFee = totalItemQuantity * 20;
  const totalPrice = subtotal + saleTax + deliveryFee;

 

  return (
    <div className={classes.container}>
      <h1 className={classes.marginleft}>Order Summary</h1>
      <h3>
        <span className={classes.marginleft}>{totalItemQuantity} ITEMS</span>
        <span className={classes.split}>${subtotal}</span>
      </h3>
      <h3>
        <span className={classes.marginleft}>DELIVERY</span>
        <span className={classes.split}>{deliveryFee}</span>
      </h3>
      <h3>
        <span className={classes.marginleft}>SALE TAX</span>
        <span className={classes.split}>${saleTax}</span>
      </h3>
      <h2>
        <span className={classes.marginleft}>Total</span>
        <span className={classes.split}>${totalPrice}</span>
      </h2>
      <botton className={classes.button} onClick={props.ClearCart}>
        Clear Cart
      </botton>
      <botton className={classes.button}>Checkout</botton>
    </div>
  );
};

export default Checkout;
