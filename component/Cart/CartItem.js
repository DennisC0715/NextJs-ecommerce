import classes from "./CartItem.module.css";
import Image from "next/image";

const CartItem = (props) => {
  const { itemQuantity, price } = props;

  const OneItemTotalPrice = price * itemQuantity;

  return (
    <div className={classes.container}>
      <div>
        <Image src={props.image} alt={props.set} width={100} height={100} />
      </div>
      <div className={classes.description}>
        <p>
          {props.year} {props.made} {props.model} {props.set} BRAKE KIT.
        </p>
        <p>{props.description}</p>
        <p>
          <button className={classes.button} onClick={props.onRemoveQuantity}>
            -
          </button>
          <button className={classes.button} onClick={props.onAdd}>
            +
          </button>
        </p>
      </div>
      <div className={classes.price}>
        <div>
          <h3> ${OneItemTotalPrice}</h3>
          <p>{`($${props.price}/item)`}</p>
          <p>Quantity : x {props.itemQuantity}</p>
          <button className={classes.button} onClick={props.onRemoveOneItem}>
            REMOVE
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
