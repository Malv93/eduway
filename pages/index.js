import Head from "next/head";
import Layout from "../components/layout/layout";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Eduway</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <p>This is the main content:</p>
        <h1>Eduway is the Way</h1>
      </div>
    </Layout>
  );
}
