import type { NextPage } from "next";
import Head from "next/head";
import {
  Blog,
  CallToAction,
  Footer,
  Hero,
  NavBar,
  Services,
} from "../components";

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>GRDC - Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar />
      <Hero />
      <Services />
      <Blog />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Home;
