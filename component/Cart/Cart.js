import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import Checkout from "./Checkout";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import {
  cartAddItem,
  cartRemoveItemQuantity,
  cartRemoveOneItem,
  clearCart,
} from "../ReduxStore/slices/cartSlice";

const Cart = () => {
  const cartItem = useSelector((state) => state.cart.cartItems);
  const cartItemNumber = useSelector((state) => state.cart.cartItemNumber);
  const dispatch = useDispatch();
  const showSummary = cartItemNumber > 0;

  const addItemHandler = (item) => {
    dispatch(cartAddItem({ ...item, quantity: 1 }));
  };

  const removeQuantiyHandler = (id) => {
    dispatch(cartRemoveItemQuantity(id));
  };

  const removeItemHandler = (id) => {
    dispatch(cartRemoveOneItem(id));
  };

  const clearCartHandler = () => {
    dispatch(clearCart());
  };

  const itemsInCart = cartItem.map((item) => (
    <CartItem
      key={item.id}
      id={item.id}
      set={item.set}
      year={item.year}
      made={item.made}
      model={item.model}
      engine={item.engine}
      price={item.price}
      image={item.image}
      description={item.description}
      itemQuantity={item.quantity}
      onAdd={addItemHandler.bind(null, item)}
      onRemoveOneItem={removeItemHandler.bind(null, item.id)}
      onRemoveQuantity={removeQuantiyHandler.bind(null, item.id)}
    />
  ));

  const bagText = showSummary ? "YOUR BAG" : "YOUR BAG IS EMPTY";

  const itemText = cartItemNumber > 1 ? "items" : "item";

  const text = showSummary ? (
    <p>
      TOTAL {cartItemNumber} {itemText}
    </p>
  ) : (
    <Link href="/shop" className={classes.nostyle}>
      Once you add something to your bag - it will appear here. Ready to get
      started? Click here to start shopping!
    </Link>
  );

  return (
    <div className={classes.container}>
      <div className={classes.text}>
        <h2>{bagText}</h2>
        <h4>{text}</h4>
      </div>
      <div>
        <span>{itemsInCart}</span>
        <span>{showSummary && <Checkout ClearCart={clearCartHandler} />}</span>
      </div>
    </div>
  );
};

export default Cart;
