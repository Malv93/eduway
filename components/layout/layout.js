import Header from "./header";
import Footer from "./footer";
import Head from "next/head";
export default function Layout({ children, props }) {
  return (
    <>
      <Head>
        {/* include Font Awesome */}
        <script
          src="https://kit.fontawesome.com/ad5b7d42e8.js"
          crossOrigin="anonymous"
        ></script>
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
