import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from '../../styles/Breadcrumb.module.css';

export default function Breadcrumb() {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  return (
    <nav className={styles.breadcrumb}>
      <ul className={styles.breadcrumbList}>
        <li className={styles.breadcrumbItem}>
          <Link to="/" className={styles.breadcrumbLink}>
            Inicio
          </Link>
        </li>
        {pathnames.map((name, index) => {
          const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
          const isLast = index === pathnames.length - 1;

          return (
            <li key={name} className={styles.breadcrumbItem}>
              <Link to={routeTo} className={styles.breadcrumbLink}>
                / {name}
              </Link>
              {!isLast && <span className={styles.separator}> / </span>}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
