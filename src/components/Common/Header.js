import React, { useState, useEffect } from 'react';
import NavLink from './NavLink';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHeaderFixed, setIsHeaderFixed] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 78) {
        setIsHeaderFixed(true);
      } else {
        setIsHeaderFixed(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`${isHeaderFixed ? styles.fixed : ''}`}>
      <div className={styles.header}>
        <Link to={'/'}>
          <h1 className={styles.title}>InfoDesign</h1>
        </Link>
        <nav className={`${styles.nav} ${isMenuOpen ? styles.open : ''}`}>
          <div className={styles.menuToggle} onClick={toggleMenu}>
            <div className={styles.bar}></div>
            <div className={styles.bar}></div>
            <div className={styles.bar}></div>
          </div>
          <ul className={styles.navList}>
            <NavLink to="/" text="Inicio" />
            <NavLink to="/tramos" text="Tramos" />
            <NavLink to="/clientes" text="Clientes" />
            <NavLink to="/tramos-clientes" text="Tramos/Clientes" />
          </ul>
        </nav>
      </div>
    </header>
  );
}
