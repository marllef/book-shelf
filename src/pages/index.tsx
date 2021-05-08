import Head from "next/head";
import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import CardGrid from "../layout/CardGrid";
import { fetchData } from "~/services/ApiServices";

const HomePage = () => {
  const [mData, setMData] = useState([]);
  useEffect(() => {
    fetchData()
      .then((result) => {
        setMData(result);
        console.log(result);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="h-screen">
      <Head>
        <title>BookShelf</title>
      </Head>
      <Header />
      <CardGrid data={mData} />
    </div>
  );
};

export default HomePage;
