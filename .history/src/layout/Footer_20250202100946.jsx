function Footer() {
  return (
    <footer className='page-footer dark darken-1'>
      <div className='footer-copyright'>
        <div className='container'>
          © {new Date().getFullYear()} Copyright Vitaliy Galata
          <a
            className='grey-text text-lighten-4 right'
            href='https://github.com/vitaliygalata1986/react-movies'
            target='__blanck'
          >
            Link to GitHub Repository
          </a>
        </div>
      </div>
    </footer>
  );
}

export { Footer };
