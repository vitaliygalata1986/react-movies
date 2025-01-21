function Header() {
  return (
    <nav className='dark darken-1'>
      <div className='nav-wrapper'>
        <a target='__blanck' href='/' className='brand-logo'>
          Movie catalog on React
        </a>
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
