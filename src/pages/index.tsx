import Head from "next/head";
import React from "react";
import Header from "../components/Header";
import CardGrid from "../layout/CardGrid";
import { data } from "~/utils/book-data.json";

const HomePage = () => {
  return (
    <div className="h-screen">
      <Head>
        <title>BookShelf</title>
      </Head>
      <Header />
      <CardGrid data={data} />
    </div>
  );
};

export default HomePage;
