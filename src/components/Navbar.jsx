import { useNavigate, useLocation } from 'react-router';
import { ReactComponent as DiscoverIcon } from '../assets/svg/compass.svg';
import { ReactComponent as WatchListIcon } from '../assets/svg/watchlist.svg';
import { ReactComponent as ProfileIcon } from '../assets/svg/profile.svg';

import '../css/Navbar.css';

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const pathMatchRoute = (route) => {
    if (route === location.pathname) return true;
  };

  return (
    <footer className='navbar'>
      <nav className='navbar-container'>
        <ul className='nav-list-items'>
          <li className='nav-list-item' onClick={() => navigate('/')}>
            <DiscoverIcon
              fill={
                pathMatchRoute('/')
                  ? 'var(--primary-color)'
                  : 'var(--dark-secondary)'
              }
              height='30px'
              width='30px'
            />
            <p
              className={
                pathMatchRoute('/')
                  ? 'nav-list-item-name-active'
                  : 'nav-list-item-name'
              }
            >
              Discover
            </p>
          </li>
          <li className='nav-list-item' onClick={() => navigate('/watchlist')}>
            <WatchListIcon
              fill={
                pathMatchRoute('/watchlist')
                  ? 'var(--primary-color)'
                  : 'var(--dark-secondary)'
              }
              height='30px'
              width='30px'
            />
            <p
              className={
                pathMatchRoute('/watchlist')
                  ? 'nav-list-item-name-active'
                  : 'nav-list-item-name'
              }
            >
              WatchList
            </p>
          </li>
          <li className='nav-list-item' onClick={() => navigate('/profile')}>
            <ProfileIcon
              fill={
                pathMatchRoute('/profile')
                  ? 'var(--primary-color)'
                  : 'var(--dark-secondary)'
              }
              height='30px'
              width='30px'
            />
            <p
              className={
                pathMatchRoute('/profile')
                  ? 'nav-list-item-name-active'
                  : 'nav-list-item-name'
              }
            >
              Profile
            </p>
          </li>
        </ul>
      </nav>
    </footer>
  );
}

export default Navbar;
