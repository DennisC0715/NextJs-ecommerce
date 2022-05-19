import style from "./WishlistModal.module.css";
import Card from "../layout/Card";

const ClearCartModal = (props) => {
  return (
    <div>
      <div className={style.backdrop} onClick={props.onHideModal} />
      <Card className={style.modal}>
        <header className={style.header}>
          <h2>Clear Cart Alert</h2>
        </header>
        <div className={style.content}>
          <p>
            ALL items from your shopping cart will be removed, click OK to
            proceed.
          </p>
        </div>
        <footer className={style.actions}>
          <button className={style.btn} onClick={props.onClearCart}>
            OK
          </button>
          <button className={style.btn} onClick={props.onHideModal}>
            CANCEL
          </button>
        </footer>
      </Card>
    </div>
  );
};

export default ClearCartModal;
