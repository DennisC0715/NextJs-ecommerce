const OrderHistoryPageItem = (props) => {
  return (
    <div className={classes.container}>
      <div>Your Order : {props.id}</div>
      <div className={classes.text}>
        <p>
          <span> {props.date}</span> | <span> {props.orderTotal}</span> |
          <span> {props.orderItemQuantity}</span>
        </p>
      </div>
      <div className={classes.image}>
          <image></image>
      </div>
    </div>
  );
};
export default OrderHistoryPageItem;
