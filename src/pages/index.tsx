import Head from "next/head";
import React from "react";
import Header from "../components/Header";
import CardGrid from "../Layout/CardGrid";

const HomePage = () => {
  const data = [
    {
      title: "Livro 1",
      author: "AutorDaObra",
      link: "/#",
      font: "Domínio Público",
    },
    {
      title: "Livro 2",
      author: "AutorDaObra",
      link: "/#",
      font: "Domínio Público",
    },
    {
      title: "Livro 2",
      author: "AutorDaObra",
      link: "/#",
      font: "Domínio Público",
    },
    {
      title: "Livro 2",
      author: "AutorDaObra",
      link: "/#",
      font: "Domínio Público",
    },
  ];
  return (
    <div className="h-screen">
      <Head>
        <title>BookMark</title>
      </Head>
      <Header />
      <CardGrid data={data} />
    </div>
  );
};

export default HomePage;
