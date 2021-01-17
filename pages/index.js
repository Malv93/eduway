import Head from "next/head";
import Layout from "../components/layout/layout";
import Heading from "../components/homeSections/heading";
import Activities from "../components/homeSections/activities";
import Methodology from "../components/homeSections/methodology";
import About from "../components/homeSections/about";
import Action from "../components/homeSections/action";
import Podcast from "../components/homeSections/podcast";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Eduway</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Heading />
      <Activities />
      <Methodology />
      <About />
      <Action />
      <Podcast />
    </Layout>
  );
}
