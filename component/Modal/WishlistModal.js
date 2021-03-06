import style from "./WishlistModal.module.css";
import Card from "../layout/Card";
import { useSelector } from "react-redux";

const WishlistModal = (props) => {
  const isAdding = useSelector((state) => state.wishlist.isAdding);

  const modalMessage = isAdding ? "added to" : "removed from";

  return (
    <div>
      <div className={style.backdrop} onClick={props.onHide} />
      <Card className={style.modal}>
        <header className={style.header}>
          <h2>WishList</h2>
        </header>
        <div className={style.content}>
          <p>Item has been {modalMessage} your wishlist</p>
        </div>
        <footer className={style.actions}>
          <button className={style.btn} onClick={props.onHide}>OK</button>
        </footer>
      </Card>
    </div>
  );
};

export default WishlistModal;
