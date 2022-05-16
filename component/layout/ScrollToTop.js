import classes from "./ScrollToTop.module.css";

const ScrollTop = (props) => {
  return (
    <button className={classes.myBtn} onClick={props.onScrollTop}>
      TOP
    </button>
  );
};

export default ScrollTop;
