import Head from "next/head";
import Layout from "../components/layout/layout";
import Heading from "../components/home/heading";
import Activities from "../components/home/activities";
import Methodology from "../components/home/methodology";
import About from "../components/home/about";
import Action from "../components/home/action";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Eduway Impresa Sociale | Podcast, Educazione e Pedagogia</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Heading />
      <Activities />
      <Methodology />
      <About />
      <Action />
    </Layout>
  );
}
