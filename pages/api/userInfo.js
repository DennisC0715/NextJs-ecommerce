import { MongoClient } from "mongodb";

const handler = async (req, res) => {
  if (req.method === "POST") {
    const data = req.body;

    const client = await MongoClient.connect(
      "mongodb+srv://dennis:qwe123@cluster0.h3bzw.mongodb.net/areionUserInfo?retryWrites=true&w=majority"
    );
    const dataBase = client.db();
    const areionUserInfoCollection = dataBase.collection("areionUserInfo");
    const result = await areionUserInfoCollection.insertOne(data);

    console.log(result);

    client.close();
    res.status(201).json({
      message: `User: ${data.firstName} ${data.lastName} inserted!`,
    });
  }

  if (req.method === "PATCH") {
    const data = req.body;
    const filter = data.email;
    const updateCart = data.cart;
    const updateWishlist = data.wishlist;

    console.log(filter);
    console.log(updateCart);
    console.log(updateWishlist);

    const client = await MongoClient.connect(
      "mongodb+srv://dennis:qwe123@cluster0.h3bzw.mongodb.net/areionUserInfo?retryWrites=true&w=majority"
    );
    const dataBase = client.db();
    const areionUserInfoCollection = dataBase.collection("areionUserInfo");
    const result = await areionUserInfoCollection.updateOne(
      { email: filter },
      { $set: { cart: updateCart, wishlist: updateWishlist } }
    );

    console.log(result);

    client.close();

    res.status(201).json({
      message: `User: ${data.firstName} ${data.lastName} updated!`,
    });
  }
};

export default handler;
