import BrakeItems from "../../component/ItemsInShop/BrakeItems";
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
    coating: "silver",
    price: 500,
    detailImage:
      "https://firebasestorage.googleapis.com/v0/b/areion.appspot.com/o/XFULLdes.jpg?alt=media&token=21ffd07b-884b-4dd0-8fd5-e1f9f6561f5d",
    image:
      "https://firebasestorage.googleapis.com/v0/b/areion.appspot.com/o/XSFR.jpg?alt=media&token=7a37b3d4-c550-4874-8949-7de5d713d095",
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
    coating: "silver",
    price: 320,
    image:
      "https://firebasestorage.googleapis.com/v0/b/areion.appspot.com/o/XFront.jpg?alt=media&token=e75adb56-1df7-48b3-885f-6cd321052e8d",
    detailImage:
      "https://firebasestorage.googleapis.com/v0/b/areion.appspot.com/o/XFrontDes.jpg?alt=media&token=d734240b-d33f-4516-a54d-f2614eb1e267",
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
    coating: "silver",
    price: 200,
    image:
      "https://firebasestorage.googleapis.com/v0/b/areion.appspot.com/o/XRear.jpg?alt=media&token=9a2b31d1-dca3-4c58-bc9e-58f5f0692ff1",
    detailImage:
      "https://firebasestorage.googleapis.com/v0/b/areion.appspot.com/o/XREARDes.jpg?alt=media&token=01b3e521-89e1-4a03-9d55-662245a90642",
    description:
      "It includes included 2 REAR Brake Roters and 4 REAR Brake Pads.",
  },
  {
    id: "b4",
    set: "Full Set",
    year: "2022",
    made: "FORD",
    model: "F-150",
    engine: "ALL ENGINE",
    coating: "silver",
    price: 500,
    detailImage:
      "https://firebasestorage.googleapis.com/v0/b/areion.appspot.com/o/XSFR.jpg?alt=media&token=7a37b3d4-c550-4874-8949-7de5d713d095",
    image:
      "https://firebasestorage.googleapis.com/v0/b/areion.appspot.com/o/XSFR.jpg?alt=media&token=7a37b3d4-c550-4874-8949-7de5d713d095",
    description:
      "It includes included 4 (2 FRONT, 2 REAR) Brake Roters and 8 (4 FRONT, 4 REAR) Brake Pads.",
  },
  {
    id: "b5",
    set: "Front Set",
    year: "2022",
    made: "FORD",
    model: "F-150",
    engine: "ALL ENGINE",
    coating: "silver",
    price: 320,
    image:
      "https://firebasestorage.googleapis.com/v0/b/areion.appspot.com/o/XFront.jpg?alt=media&token=e75adb56-1df7-48b3-885f-6cd321052e8d",
    detailImage:
      "https://firebasestorage.googleapis.com/v0/b/areion.appspot.com/o/XFrontDes.jpg?alt=media&token=d734240b-d33f-4516-a54d-f2614eb1e267",
    description:
      "It includes included 2 FRONT Brake Roters and 4 FRONT Brake Pads.",
  },
  {
    id: "b6",
    set: "Rear Set",
    year: "2022",
    made: "FORD",
    model: "F-150",
    engine: "ALL ENGINE",
    coating: "black",
    price: 200,
    image:
      "https://firebasestorage.googleapis.com/v0/b/areion.appspot.com/o/XBRear.jpg?alt=media&token=b31ccce3-1eb4-40f7-8bca-22e77ac21c1b",
    detailImage:
      "https://firebasestorage.googleapis.com/v0/b/areion.appspot.com/o/XB%20RearDes.jpg?alt=media&token=e7e7566c-9253-4a72-8ba6-17eb1cd37fb8",
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
      <Head>
        <title>Shop</title>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1.0" />
      </Head>
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
