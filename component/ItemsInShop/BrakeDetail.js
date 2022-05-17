// import { Swiper, SwiperSlide } from "swiper/react";
// import { Pagination, Navigation } from "swiper";
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { cartAddItem } from "../ReduxStore/slices/cartSlice";
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
    coating,
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
        coating: coating,
        description: description,
      })
    );
  };

  const descriptionImageLong =
    coating === "silver"
      ? "https://firebasestorage.googleapis.com/v0/b/areion.appspot.com/o/OESdescription.jpg?alt=media&token=2f9bf3a9-51ad-46ad-af2d-f4206b317bdc"
      : "https://firebasestorage.googleapis.com/v0/b/areion.appspot.com/o/XBdescription.jpg?alt=media&token=a39383c7-b204-4280-ab88-a33b6f1ccb29";

  const descriptionImageLongHeight = coating === "silver" ? 4378 : 4927;

  return (
    <div className={classes.image}>
      <ul>
        <li>
          <div className={classes.image}>
            <div className={classes.image}>
              <Image src={detailImage} alt={set} width={1200} height={908} />
              <Image
                src="https://firebasestorage.googleapis.com/v0/b/areion.appspot.com/o/001.jpg?alt=media&token=485ba368-d6b7-468d-aae4-4dd6d37ae562"
                alt="blank"
                width={1200}
                height={348}
              />
              <Image
                src={descriptionImageLong}
                alt={set}
                width={1200}
                height={descriptionImageLongHeight}
              />
            </div>
            <div className={classes.btn}>
              <AddToCartButton onClick={detailButtonHandler} />
            </div>
            <h2>
              {year} {made} {model} {engine}
            </h2>
          </div>
        </li>
        {/* <li className={classes.image}>
          <Image src={drilledsloted} alt={set} width={960} height={808} />
        </li>
        <li className={classes.image}>
          <Image src={Pads} alt={set} width={960} height={808} />
        </li>
        <li className={classes.image}>
          <Image src={shippingDetail} alt={set} width={960} height={808} />
        </li>
        <li className={classes.image}>
          <Image src={returnDetail} alt={set} width={960} height={808} />
        </li> */}
      </ul>
    </div>
  );

  // return (
  //   <section>
  //     <Swiper
  //       pagination={{
  //         type: "progressbar",
  //       }}
  //       navigation={true}
  //       modules={[Pagination, Navigation]}
  //       className={classes.mySwiper}
  //     >
  //       <SwiperSlide>
  //         <div className={classes.image}>
  //           <div className={classes.image}>
  //             <Image src={detailImage} alt={set} width={960} height={808} />
  //           </div>
  //           <div className={classes.btn}>
  //             <AddToCartButton onClick={detailButtonHandler} />
  //           </div>
  //           <h2>
  //             {year} {made} {model} {engine}
  //           </h2>
  //         </div>
  //       </SwiperSlide>
  //       <SwiperSlide>
  //         <div className={classes.image}>
  //           <Image src={productinfo} alt={set} width={960} height={808} />
  //         </div>
  //       </SwiperSlide>
  //       <SwiperSlide>
  //         <div className={classes.image}>
  //           <Image src={drilledsloted} alt={set} width={960} height={808} />
  //         </div>
  //       </SwiperSlide>
  //       <SwiperSlide>
  //         <div className={classes.image}>
  //           <Image src={Pads} alt={set} width={960} height={808} />
  //         </div>
  //       </SwiperSlide>
  //       <SwiperSlide>
  //         <div className={classes.image}>
  //           <Image src={shippingDetail} alt={set} width={960} height={808} />
  //         </div>
  //       </SwiperSlide>
  //       <SwiperSlide>
  //         <div className={classes.image}>
  //           <Image src={returnDetail} alt={set} width={960} height={808} />
  //         </div>
  //       </SwiperSlide>
  //     </Swiper>
  //   </section>
  // );
};

export default BrakeDetail;
