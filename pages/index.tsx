import type { NextPage } from "next";
import Head from "next/head";
import {
  Blog,
  Content,
  Footer,
  Hero,
  NavBar,
  Services,
  Team,
} from "../components";

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>GRDC - Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar />
      <main className="relative">
        <Hero />
        <Services />
        <Content />
        <div className="overflow-x-scroll scrollbar-hide">
          <Blog />
        </div>
        <Team />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
