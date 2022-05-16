import { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Head from "next/head";
import { useRouter } from "next/router";
import { mergeWishlist } from "../../component/ReduxStore/slices/wishListSlice";
import { mergeCarts } from "../../component/ReduxStore/slices/cartSlice";
import { mergeUserCart } from "../../component/ReduxStore/slices/userSlice";
import UserNav from "../../component/User/UserNav";
import { addUserInfo } from "../../component/ReduxStore/slices/userSlice";
import LogoutModal from "../../component/Modal/LogoutModal";
import { logoutHandler } from "../../component/ReduxStore/slices/authSlice";
import { clearUserInfo } from "../../component/ReduxStore/slices/userSlice";
import { clearCart } from "../../component/ReduxStore/slices/cartSlice";
import { clearWishList } from "../../component/ReduxStore/slices/wishListSlice";
import ProfilePageLayout from "../../component/ProfilePage/profilePageLayout";

// import { MongoClient } from "mongodb";

const Profile = (props) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const webCart = useSelector((state) => state.cart.cartItems);
  const userCart = useSelector((state) => state.user.cart);
  const webWishList = useSelector((state) => state.wishlist.wishListItems);
  const userWishList = useSelector((state) => state.user.wishlist);
  const showModalState = useSelector((state) => state.modal.showModal);

  const showModalHandler = () => {
    setShowLogoutModal(true);
  };

  const hideModalHandler = () => {
    setShowLogoutModal(false);
  };

  const logoutFunction = () => {
    setShowLogoutModal(false);
    dispatch(logoutHandler());
    dispatch(clearUserInfo());
    dispatch(clearCart());
    dispatch(clearWishList());
  };

  useEffect(() => {
    const initialToken = localStorage.getItem("token");
    if (!initialToken) {
      router.push("/login");
      return;
    }
    

    // dispatch(mergeCarts(mergedCart));
    // dispatch(mergeWishlist(mergedWishList));
  });

  const user = props.userInfo;

  dispatch(addUserInfo(user));

  console.log(webCart);
  console.log(userCart);
  console.log(webWishList);
  console.log(userWishList);

  // dispatch(
  //   mergeUserCart({ mergedCart: mergedCart, mergedWishList: mergedWishList })
  // );

  return (
    <Fragment>
      <ProfilePageLayout userfirstName={props.userInfo.firstName}>
        <Head>
          <title>profile</title>
          <meta charset="uft-8" />
          <meta
            name="viewport"
            content="width=device-width,initial-scale=1.0"
          />
        </Head>
        <h1>User profile</h1>
        <h1>addresses</h1>
        <h1>change password</h1>
      </ProfilePageLayout>
    </Fragment>
  );
};

export async function getServerSideProps(context) {
  // const client = await MongoClient.connect(
  //   "mongodb+srv://dennis:qwe123@cluster0.h3bzw.mongodb.net/areionUserInfo?retryWrites=true&w=majority"
  // );
  // const dataBase = client.db();
  // const collection = dataBase.collection("areionUserInfo");
  // const userInfo = await collection.findOne({ email: email });
  // client.close();

  return {
    props: {
      userInfo: {
        id: "b1",
        firstName: "Dennis",
        lastName: "Chen",
        email: "dennis@email.com",
        address: "321 yonge st",
        city: "Markham",
        province: "Ontario",
        postalCode: "L6E3S6",
        cart: [],
        orderHistory: [],
        wishlist: [],
      },
    },
  };

  // return {
  //   props:
  //   {
  //     userInfo: userInfo.map((data) => ({
  //       id: data._id.toString(),
  //       firstName: data.firstName,
  //       lastName: data.lastName,
  //       email: data.email,
  //       address: data.address,
  //       city: data.city,
  //       province: data.province,
  //       postalCode: data.postalCode,
  //     })),
  //   },
  // };
}

export default Profile;
