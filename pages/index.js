import Head from "next/head";

const Home = () => {
  return (
    <div>
      <Head>
        <title>Welcome to Areion</title>
        <meta charset="uft-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1.0" />
      </Head>
      <h1
        style={{
          color: "white",
          fontSize: "5rem",
          textAlign: "center",
        }}
      >
        Welcome to{" "}
      </h1>
    </div>
  );
};

export default Home;
