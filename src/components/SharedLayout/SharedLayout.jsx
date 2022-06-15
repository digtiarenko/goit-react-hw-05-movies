import { Outlet, NavLink } from 'react-router-dom';
import styles from './SharedLayout.module.css';

export const SharedLayout = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <nav className={styles.nav}>
          <NavLink className={styles.link} to="/">
            Home
          </NavLink>
          <NavLink className={styles.link} to="/movies">
            Movies
          </NavLink>
        </nav>
      </header>
      <Outlet />
    </div>
  );
};
