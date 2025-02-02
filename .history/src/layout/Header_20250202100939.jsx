import { Link } from 'react-router-dom';

function Header() {
  return (
    <nav className='dark darken-1'>
      <div className='nav-wrapper'>
        <Link to='/' className='brand-logo'>
          Home
        </Link>
        <ul id='nav-mobile' className='right hide-on-med-and-down'>
          <li>
            <Link to='https://github.com/vitaliygalata1986/react-movies/'>
              Link to GitHub Repository
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export { Header };
