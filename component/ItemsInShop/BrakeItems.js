import classes from "./BrakeItems.module.css";
import CardForBrakeItems from "./CardForBrakeItems";
import { cartAddItem } from "../ReduxStore/slices/cartSlice";
import { useDispatch } from "react-redux";
import { wishListToggle } from "../ReduxStore/slices/wishListSlice";
import { Fragment } from "react";

const BrakeItems = (props) => {
  const brakeData = props.itemData;
  const dispatch = useDispatch();

  const addItemHandler = (item) => {
    dispatch(
      cartAddItem({
        id: item.id,
        key: item.key,
        detailImage: item.detailImage,
        set: item.set,
        year: item.year,
        made: item.made,
        model: item.model,
        engine: item.engine,
        price: item.price,
        image: item.image,
        isFavorite: item.isFavorite,
        description: item.description,
        quantity: 1,
      })
    );
  };

  const toggleWishListHandler = (item) => {
    dispatch(wishListToggle(item));
  };

  const products = brakeData.map((item) => (
    <CardForBrakeItems
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
      onAddItem={addItemHandler.bind(null, item)}
      toggleWishList={toggleWishListHandler.bind(null, item)}
    />
  ));

  return (
    <Fragment>
      <div className={classes.container}>{products}</div>
    </Fragment>
  );
};

export default BrakeItems;
