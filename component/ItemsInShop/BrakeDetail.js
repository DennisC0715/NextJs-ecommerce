import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { cartAddItem } from "../ReduxStore/slices/cartSlice";
import drilledsloted from "../../component/detailPageImages/drilledsloted.jpg";
import Pads from "../../component/detailPageImages/Pads.jpg";
import productinfo from "../../component/detailPageImages/productinfo.jpg";
import returnDetail from "../../component/detailPageImages/returnDetail.jpg";
import shippingDetail from "../../component/detailPageImages/shippingDetail.jpg";
import AddToCartButton from "./AddToCartButton";
import classes from "./BrakeDetail.module.css";

const BrakeDetail = (props) => {
  const dispatch = useDispatch();
  const {
    detailImage,
    set,
    year,
    made,
    model,
    engine,
    price,
    id,
    key,
    image,
    isFavorite,
    description,
  } = props;

  const detailButtonHandler = () => {
    dispatch(
      cartAddItem({
        id: id,
        key: key,
        detailImage: detailImage,
        set: set,
        year: year,
        made: made,
        model: model,
        engine: engine,
        price: price,
        image: image,
        isFavorite: isFavorite,
        description: description,
      })
    );
  };

  return (
    <section>
      <Swiper
        pagination={{
          type: "progressbar",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className={classes.mySwiper}
      >
        <SwiperSlide>
          <div className={classes.image}>
            <div className={classes.image}>
              <Image src={detailImage} alt={set} width={960} height={808} />
            </div>
            <div className={classes.btn}>
              <AddToCartButton onClick={detailButtonHandler} />
            </div>
            <h2>
              {year} {made} {model} {engine}
            </h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={classes.image}>
            <Image src={productinfo} alt={set} width={960} height={808} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={classes.image}>
            <Image src={drilledsloted} alt={set} width={960} height={808} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={classes.image}>
            <Image src={Pads} alt={set} width={960} height={808} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={classes.image}>
            <Image src={shippingDetail} alt={set} width={960} height={808} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={classes.image}>
            <Image src={returnDetail} alt={set} width={960} height={808} />
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default BrakeDetail;
