import Head from "next/head";
import { useState, useContext, useEffect } from "react";
import { DataContext } from "../store/GlobalState";
import Hero from "../components/Hero/Hero";
import { useRouter } from "next/router";

import FourSquareInfo from "../components/FourSquareInfo/FourSquareInfo";

const Home = (props) => {
  const [page, setPage] = useState(1);
  const router = useRouter();

  useEffect(() => {
    if (Object.keys(router.query).length === 0) setPage(1);
  }, [router.query]);

  return (
    <div>
      <Head>
        <title>Home Page</title>
      </Head>
      <Hero />
      <FourSquareInfo />
    </div>
  );
};

export default Home;
