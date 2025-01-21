function Header() {
  return (
    <nav className='dark darken-1'>
      <div className='nav-wrapper'>
        <Link ='__blanck' href='/react-movies' className='brand-logo'>
          Home
        </Link>
        <ul id='nav-mobile' className='right hide-on-med-and-down'>
          <li>
            <a
              target='__blanck'
              href='https://vitaliygalata1986.github.io/react-movies/'
            >
              Link to production
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export { Header };
