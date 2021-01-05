import Head from "next/head";
import Layout from "../components/layout/layout";
import Heading from "../components/homeSections/heading";
import Activities from "../components/homeSections/activities";
import Methodology from "../components/homeSections/methodology";
import Mission from "../components/homeSections/mission";
import Team from "../components/homeSections/team";
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
      <Mission />
      <Team />
      <Action />
      <Podcast />
    </Layout>
  );
}
