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
};

export default handler;
