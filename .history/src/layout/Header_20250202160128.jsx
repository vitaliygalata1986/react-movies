import { Link } from 'react-router-dom';

function Header() {
  return (
    <nav className='dark darken-1'>
      <div className='nav-wrapper'>
        <Link to='/' className='brand-logo'>
          Home
        </Link>
        <ul id='nav-mobile' className='right'>
          <li>
            <a
              className='grey-text text-lighten-4 right'
              href='https://github.com/vitaliygalata1986/react-movies'
              target='__blanck'
            >
              Link to GitHub Repository
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export { Header };
