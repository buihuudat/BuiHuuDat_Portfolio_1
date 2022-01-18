import React, {useEffect, useRef} from "react";
import { Link, useLocation } from "react-router-dom";
import './header.css';

const headerNav = [
  {
    display: 'Home',
    path: '#',
  },
  {
    display: 'Services',
    path: '#services',
  },
  {
    display: 'About',
    path: '#about',
  },
  {
    display: 'Skills',
    path: '#skills'
  },
  {
    display: 'Portfolio',
    path: '#portfolio',
  },
  {
    display: 'Blog',
    path: '#blog',
  },
  {
    display: 'Contact',
    path: '#contact',
  }
]

const Header = () => {
  const { pathName } = useLocation();
  const headerRef = useRef(null);
  const active = headerNav.findIndex(e => e.path === pathName);

  useEffect(() => {
    const shrinkHeader = () => {
      if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        headerRef.current.classList.add('shrink');
      } else {
        headerRef.current.classList.remove('shrink');
      }
    }
    window.addEventListener('scroll', shrinkHeader);
    return () => {
      window.addEventListener('scroll', shrinkHeader);
    }
  },[]);
  return (
    <div className="header" ref={headerRef}>
      <div className="header__wrap">
        <div className="header__logo">
          <Link to="/">Bui Huu Dat</Link>
        </div>
        <ul className="header__link">
          {headerNav.map((e,i) => (
            <li key={i} className={`${i === active ? 'active' : ''}`}>
              <a href={e.path}>{e.display}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Header;
