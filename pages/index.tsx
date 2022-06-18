import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
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
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
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
