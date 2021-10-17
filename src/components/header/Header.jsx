import { useEffect, useState } from 'react';
import logo from '../../assets/cinema.logo.svg';
import { HEADER_LIST } from './header.config';
import './Header.scss';

const Header = () => {
  const [navClass, setNavClass] = useState(false);
  const [menuClass, setMenuClass] = useState(false);

  const toggleMenu = () => {
    setMenuClass(prevMenuClass => !prevMenuClass);
    setNavClass(prevNavClass => !prevNavClass);
  };

  useEffect(() => {
    if (navClass) document.body.classList.add('header-nav-open');
    else document.body.classList.remove('header-nav-open');
  }, [navClass]);

  return (
    <>
      <div className="header-nav-wrapper">
        <div className="header-bar" />
        <div className="header-navbar">
          <div className="header-image">
            <img src={logo} alt="Cinema App" />
          </div>
          <div
            id="header-mobile-menu"
            role="button"
            tabIndex="0"
            className={`${menuClass ? 'header-menu-toggle is-active' : 'header-menu-toggle'}`}
            onKeyDown={e => e.key === 'Enter' && toggleMenu}
            onClick={toggleMenu}
          >
            <span className="bar" />
            <span className="bar" />
            <span className="bar" />
          </div>
          <ul className={`${navClass ? 'header-nav header-mobile-nav' : 'header-nav'}`}>
            {HEADER_LIST.map(data => (
              <li key={data.id} className="header-nav-item">
                <span className="header-list-name">
                  <i className={data.iconClass} />
                </span>
                &nbsp;
                <span className="header-list-name">{data.name}</span>
              </li>
            ))}
            <input type="search" className="search-input" placeholder="Search for a movie" />
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
