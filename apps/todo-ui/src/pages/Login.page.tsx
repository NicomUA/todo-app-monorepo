import { FormEvent, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import FormError from '../components/form-error/form-error';
import TodoBtn from '../components/todo-btn/todo-btn';
import TodoHeader from '../components/todo-header/todo-header';
import TodoText from '../components/todo-text/todo-text';
import { UserApi } from '../services/user.api.service';

export function LoginPage() {
  const navigator = useNavigate();

  const [email, setEmail] = useState('test@test.com');
  const [password, setPassword] = useState('test!test');
  const [error, setError] = useState<FormError | null>(null);

  async function loginUser(e: FormEvent) {
    e.preventDefault();

    try {
      await UserApi.login(email, password);
      navigator("/");
    } catch (e: any) {
      if (e.response.status === 400) {
        setError({ status: 400, error: e.response.data.error, message: ['Wrong email or password'] })
      }
      else setError(e.response)

      throw new Error(e);
    }

    setEmail('');
    setPassword('');
    setError(null);
  }

  return (
    <>
      {error && (<FormError {...error}></FormError>)}

      <TodoHeader title='Welcome back!' subtitle='Log in to continue.' />

      <form action="" onSubmit={loginUser}>
        <TodoText type='email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
        <TodoText type='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />

        <Link to="/reg">Don't have an account?</Link>

        <TodoBtn type='submit' title='Login' />
      </form>
    </>
  );
}


export default LoginPage;
