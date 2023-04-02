import { Route, Routes, Link } from 'react-router-dom';
import ToDoPage from '../pages/ToDo.page';
import LoginPage from '../pages/Login.page';
import { LogoutPage } from '../pages/Logout.page';


import styles from './app.module.scss';
import RegisterPage from '../pages/Register.page';
import TodoNav from '../components/todo-nav/todo-nav';

export function App() {

  return (
    <div className={styles['container']}>

      <div className={styles['app-container']}>
        <TodoNav />

        <Routes>
          <Route
            path="/"
            element={
              <ToDoPage />
            }
          />
          <Route
            path="/login"
            element={
              <LoginPage />
            }
          />
          <Route
            path="/reg"
            element={
              <RegisterPage />
            }
          />
          <Route
            path="/logout"
            element={
              <LogoutPage />
            }
          />
        </Routes>

      </div>
    </div>
  );
}

export default App;
