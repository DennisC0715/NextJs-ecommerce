import BrakeItems from "../../component/ItemsInShop/BrakeItems";
import oesfull from "../../component/img/OESFull.jpg";
import oesFront from "../../component/img/OESFront.jpg";
import oesRear from "../../component/img/OESrear.jpg";
import fullset from "../../component/detailPageImages/fullsetdetail.jpg";
import frontset from "../../component/detailPageImages/frontsetdetail.jpg";
import rearset from "../../component/detailPageImages/rearsetdetail.jpg";
import WishlistModal from "../../component/Modal/WishlistModal";
import { useSelector, useDispatch } from "react-redux";
import { toggleModal } from "../../component/ReduxStore/slices/wishListSlice";
import { Fragment } from "react";
import Head from "next/head";

const Dummy_Brakes = [
  {
    id: "b1",
    set: "Full Set",
    year: "2022",
    made: "RAM",
    model: "1500",
    engine: "ALL ENGINE",
    price: "500",
    detailImage: fullset,
    image: oesfull,
    description:
      "It includes included 4 (2 FRONT, 2 REAR) Brake Roters and 8 (4 FRONT, 4 REAR) Brake Pads.",
  },
  {
    id: "b2",
    set: "Front Set",
    year: "2022",
    made: "RAM",
    model: "1500",
    engine: "ALL ENGINE",
    price: "320",
    image: oesFront,
    detailImage: frontset,
    description:
      "It includes included 2 FRONT Brake Roters and 4 FRONT Brake Pads.",
  },
  {
    id: "b3",
    set: "Rear Set",
    year: "2022",
    made: "RAM",
    model: "1500",
    engine: "ALL ENGINE",
    price: "200",
    image: oesRear,
    detailImage: rearset,
    description:
      "It includes included 2 REAR Brake Roters and 4 REAR Brake Pads.",
  },
];

const Brakes = (props) => {
  const showModal = useSelector((state) => state.wishlist.showModal);
  const dispatch = useDispatch();

  const hideModalHandler = () => {
    dispatch(toggleModal());
  };

  return (
    <Fragment>
      {/* <Head>
        <title>Shop</title>
        <mata charset="uft-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head> */}
      <BrakeItems itemData={props.brakeItems} />
      {showModal && <WishlistModal onHide={hideModalHandler} />}
    </Fragment>
  );
};

export async function getStaticProps() {
  // fetch aip to get date from database
  return {
    props: { brakeItems: Dummy_Brakes },
    revalidate: 10,
  };
}

export default Brakes;
