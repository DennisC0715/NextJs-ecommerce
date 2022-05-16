import OrderHistoryPageItem from "./OrderHistoryPageItem";
import classes from "./OrderHistoryPage.module.css";

const OrderHistoryPage = () => {
  //   const wishListItemInPage = wishList.map((order) => (
  //     <OrderHistoryPageItem
  //       key={order.id}
  //       id={order.id}
  //       date={order.date}
  //       image={order.image}
  //       orderTotal={order.orderTotal}
  //       orderItemQuantity={order.orderItemQuantity}
  //     />
  //   ));

  return (
    <div className={classes.container}>
      <div className={classes.text}>
        <h1>Order History</h1>
        <h4>{/* {itemNumber} {itemText} */}</h4>
        {/* <h4>{itemTextP}</h4> */}
      </div>
      {/* {wishListItemInPage} */}
    </div>
  );
};

export default OrderHistoryPage;
