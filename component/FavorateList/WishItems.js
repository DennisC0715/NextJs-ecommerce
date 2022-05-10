import classes from "./WishItems.module.css";
import Image from "next/image";
import addtoWishlist from "../img/addtoWishlist.png";
// import NoWishlist from "../img/NoWishlist.png";
import { removeItemFromList } from "../ReduxStore/slices/wishListSlice";

import { useDispatch } from "react-redux";
import { useRouter } from "next/router";

const WishItem = (props) => {
  const { id, image, price, set, year, made, model } = props;
  const router = useRouter();

  const detailPageHandler = () => {
    router.push("/" + props.id);
  };

  const dispatch = useDispatch();

  const removeItemHandler = () => {
    dispatch(removeItemFromList(id));
  };

 

  return (
    <div className={classes.container}>
      <div className={classes.item}>
        <Image
          src={image}
          alt={set}
          width={150}
          height={150}
          onClick={detailPageHandler}
        />
        <div className={classes.text}>
          <h3 onClick={detailPageHandler}>
            {year} {made} {model} {set} BRAKE KIT.
          </h3>
          <div className={classes.price}>
            <p>Price: ${price}</p>
          </div>
        </div>
        <div className={classes.image}>
          <Image
            src={addtoWishlist}
            alt="FavImage"
            width={100}
            height={100}
            onClick={removeItemHandler}
          />
        </div>
      </div>
    </div>
  );
};

export default WishItem;
