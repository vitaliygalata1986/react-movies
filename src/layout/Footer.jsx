function Footer() {
  return (
    <footer className="page-footer dark darken-1">
      <div className="footer-copyright">
        <div className="container">
          © {new Date().getFullYear()} Copyright Vitaliy Galata
          <a
            className="grey-text text-lighten-4 right"
            href="https://vitaliygalata1986.github.io/react-movies/"
            target="__blanck"
          >
            Link to production
          </a>
        </div>
      </div>
    </footer>
  );
}

export { Footer };
