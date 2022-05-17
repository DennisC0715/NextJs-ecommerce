import BrakeDetail from "../../component/ItemsInShop/BrakeDetail";
import { Fragment } from "react";
import Head from "next/head";

const ItemDetail = (props) => {
  return (
    <Fragment>
      <Head>
        <title>detial</title>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1.0" />
      </Head>
      <BrakeDetail
        image={props.detailData.image}
        detailImage={props.detailData.detailImage}
        set={props.detailData.set}
        year={props.detailData.year}
        engine={props.detailData.engine}
        made={props.detailData.made}
        model={props.detailData.model}
        key={props.detailData.id}
        id={props.detailData.id}
        description={props.detailData.description}
        coating={props.detailData.coating}
        price={props.detailData.price}
        item={props.detailData}
      />
    </Fragment>
  );
};

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          itemdetailId: "b1",
        },
      },
      {
        params: {
          itemdetailId: "b2",
        },
      },
      {
        params: {
          itemdetailId: "b3",
        },
      },
    ],
  };
}

export async function getStaticProps(context) {
  const detailId = context.params.itemdetailId;

  return {
    props: {
      detailData: {
        id: detailId,
        set: "Full Set",
        year: "2022",
        made: "RAM",
        model: "1500",
        engine: "ALL ENGINE",
        coating: "silver",
        price: "500",
        detailImage:
          "https://firebasestorage.googleapis.com/v0/b/areion.appspot.com/o/XFULLdes.jpg?alt=media&token=21ffd07b-884b-4dd0-8fd5-e1f9f6561f5d",
        image:
          "https://firebasestorage.googleapis.com/v0/b/areion.appspot.com/o/XSFR.jpg?alt=media&token=7a37b3d4-c550-4874-8949-7de5d713d095",
        description:
          "It includes included 4 (2 FRONT, 2 REAR) Brake Roters and 8 (4 FRONT, 4 REAR) Brake Pads.",
      },
    },
  };
}

export default ItemDetail;
