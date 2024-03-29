import Header from "./header";
import Footer from "./footer";
export default function Layout({ children, props }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
