export default function Layout({ children, props }) {
  return (
    <>
      <header>
        <h2>This is the header</h2>
      </header>
      <main>{children}</main>
      <footer>
        <p>This is the footer</p>
      </footer>
    </>
  );
}
