import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './todo-nav.module.scss';

type UserData = {
  name: string;
  email: string;
  id: string;
}

export function TodoNav() {
  const [user, setUser] = useState<UserData | null>();

  function checkUser() {
    const user = localStorage.getItem('user');
    if (user) {
      setUser(JSON.parse(user));
    } else {
      setUser(null);
    }
  }

  useMemo(checkUser, []);
  window.addEventListener("storage", checkUser);

  return (
    <div role="navigation" className={styles['nav']}>
      <ul>
        {user && (
          <>
            <li>
              <span className={styles['greeting']}>Welcome back, {user.name}!</span>
            </li>

            <li>
              <Link to="/">Todos</Link>
            </li>
          </>
        )}

        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/reg">Register</Link>
        </li>
        {user && (
          <li>
            <Link to="/logout">Logout</Link>
          </li>
        )}
      </ul>
    </div>
  );
}

export default TodoNav;
