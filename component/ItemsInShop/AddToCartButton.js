import { Fragment } from "react";
import { ButtonIcon } from "../layout/CartIcon";
import classes from "./AddToCartButton.module.css";

const AddToCartButton = (props) => {
  return (
    <button className={classes.btn} onClick={props.onClick}>
      ADD TO CART
    </button>
  );
};

export default AddToCartButton;
