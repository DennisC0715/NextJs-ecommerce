import classes from "./CartItem.module.css";
import Image from "next/image";

const CartItem = (props) => {
  const { itemQuantity, price } = props;

  const OneItemTotalPrice = price * itemQuantity;

  return (
    <div className={classes.container}>
      <div className={classes.item}>
        <Image src={props.image} alt={props.set} width={150} height={150} />
        <div className={classes.text}>
          <h3>
            {props.year} {props.made} {props.model} {props.set} BRAKE KIT.
          </h3>
          <h6>{props.description}</h6>
          <div className={classes.quantity}>
            x <span>{props.itemQuantity}</span>
          </div>
        </div>
        <div className={classes.price}>${OneItemTotalPrice}</div>
        <div className={classes.details}>{`($${props.price}/item)`}</div>
        <div className={classes.actions}>
          <button onClick={props.onRemoveQuantity}>-</button>
          <button onClick={props.onAdd}> +</button>
          <button onClick={props.onRemoveOneItem}>REMOVE</button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
