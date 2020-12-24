import Header from "./header";
export default function Layout({ children, props }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <footer>
        <p>This is the footer</p>
      </footer>
    </>
  );
}
