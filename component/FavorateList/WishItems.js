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
      
      <div>
        <Image
          src={image}
          alt={set}
          width={100}
          height={100}
          onClick={detailPageHandler}
        />
      </div>
      <div className={classes.text}>
        <p onClick={detailPageHandler}>
          {year} {made} {model} {set} BRAKE KIT.
        </p>
        <div className={classes.price}>
          <p>Price: ${price}</p>
        </div>
      </div>
      <div className={classes.image}>
        <Image
          src={addtoWishlist}
          alt="FavImage"
          width={50}
          height={50}
          onClick={removeItemHandler}
        />
      </div>
    </div>
  );
};

export default WishItem;
