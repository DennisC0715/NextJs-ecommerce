import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Head from "next/head";
import { useRouter } from "next/router";
import { mergeWishlist } from "../../component/ReduxStore/slices/wishListSlice";
import { mergeCarts } from "../../component/ReduxStore/slices/cartSlice";
import {
  mergeUserWishlist,
  mergeUserCart,
  addUserInfo,
} from "../../component/ReduxStore/slices/userSlice";
import ProfilePageLayout from "../../component/ProfilePage/profilePageLayout";
import { MongoClient, ObjectId } from "mongodb";

const Profile = (props) => {
  const router = useRouter();
  const webCart = useSelector((state) => state.cart.cartItems); //cart of website
  const webWishList = useSelector((state) => state.wishlist.wishListItems); //wishlist of website
  const dispatch = useDispatch();

  useEffect(() => {
    const initialToken = localStorage.getItem("token");
    if (!initialToken) {
      router.push("/login");
      return;
    } else {
      console.log("merging");
      const user = props.userInfo;
      dispatch(addUserInfo(user)); //merge userdata from server to userSlice
      dispatch(mergeCarts(user.cart));
      dispatch(mergeWishlist(user.wishlist));
      dispatch(mergeUserCart(webCart));
      dispatch(mergeUserWishlist(webWishList));

      console.log(webCart);
      console.log(webWishList);
      //if cart on website is empty, merge cart[] from userinfo from server
      if (webCart.length !== 0) {
        fetch("/api/userInfo", {
          method: "PATCH",
          body: JSON.stringify({
            email: user.email,
            cart: webCart,
            wishlist: webWishList,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((res) => {
            if (res.ok) {
              return res.json();
            } else {
              let errorMessage = "updating user cart failed!";
              throw new Error(errorMessage);
            }
          })
          .catch((err) => {
            alert(err.message);
          });
      }
    }
  }, []);

  console.log("roading");

  return (
    <Fragment>
      <ProfilePageLayout userFirstName={props.userInfo.firstName}>
        <Head>
          <title>profile</title>
          <meta charset="utf-8" />
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
  const userId = "628469816121ab8974ae6063";

  const client = await MongoClient.connect(
    "mongodb+srv://dennis:qwe123@cluster0.h3bzw.mongodb.net/areionUserInfo?retryWrites=true&w=majority"
  );

  const dataBase = client.db();
  const collection = dataBase.collection("areionUserInfo");
  const userInfoData = await collection.findOne({
    _id: ObjectId(userId),
  });

  client.close();

  return {
    props: {
      userInfo: {
        _id: userInfoData._id.toString(),
        firstName: userInfoData.firstName,
        lastName: userInfoData.lastName,
        email: userInfoData.email,
        address: userInfoData.address,
        city: userInfoData.city,
        province: userInfoData.province,
        postalCode: userInfoData.postalCode,
        cart: userInfoData.cart,
        orderHistory: userInfoData.orderHistory,
        wishlist: userInfoData.wishlist,
      },
    },
  };

  // return {
  //   props: {
  //     userInfo: userInfo.map((data) => ({
  //       id: data._id.toString(),
  //       firstName: data.firstName,
  //       lastName: data.lastName,
  //       email: data.email,
  //       address: data.address,
  //       city: data.city,
  //       province: data.province,
  //       postalCode: data.postalCode,
  //       cart: data.cart,
  //       orderHistory: data.orderHistory,
  //       wishlist: data.wishlist,
  //     })),
  //   },
  // };
}

export default Profile;
