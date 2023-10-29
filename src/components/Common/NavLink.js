import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './Header.module.css';

export default function NavLink({ to, text }) {
  const location = useLocation();

  return (
    <li className={styles.navItem}>
      <Link to={to} className={location.pathname === to ? styles.activeLink : styles.navLink}>
        {text}
      </Link>
    </li>
  );
}
