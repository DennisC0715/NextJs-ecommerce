import { useSelector } from "react-redux";
import WishItem from "./WishItems";
import classes from "./WishList.module.css";

const WishList = () => {
  const wishList = useSelector((state) => state.wishlist.wishListItems);

  const itemNumber = wishList.length;
  const hasItemInList = itemNumber > 0;
  const itemText = hasItemInList > 1 ? "ITEM" : "ITEMS";
  const itemTextP = hasItemInList
    ? ""
    : "You haven't saved any items to your wishlist yet. Start shopping and add your favorite items to your wishlist.";

  const wishListItemInPage = wishList.map((item) => (
    <WishItem
      key={item.id}
      id={item.id}
      image={item.image}
      year={item.year}
      made={item.made}
      model={item.model}
      engine={item.engine}
      price={item.price}
      set={item.set}
    />
  ));

  return (
    <div className={classes.container}>
      <h1>MY WISHLIST</h1>
      <h4>
        {itemNumber} {itemText}
      </h4>
      <h4>{itemTextP}</h4>
      {wishListItemInPage}
    </div>
  );
};

export default WishList;
