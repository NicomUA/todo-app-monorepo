import { AxiosError } from 'axios';
import { FormEvent, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import TodoBtn from '../components/todo-btn/todo-btn';
import TodoHeader from '../components/todo-header/todo-header';
import TodoText from '../components/todo-text/todo-text';
import { UserApi } from '../services/user.api.service';


export interface FormError {
  status: number;
  statusText: string;
}

export function RegisterPage() {
  const navigator = useNavigate();

  const [email, setEmail] = useState('test@test.com');
  const [password, setPassword] = useState('test');
  const [name, setName] = useState('test_name');
  const [error, setError] = useState<FormError | null>(null);

  async function register(e: FormEvent) {
    e.preventDefault();

    let access_token;
    try {
      const data = await UserApi.register(email, password, name);
      access_token = data.access_token;
      navigator("/");
    } catch (e: any) {
      if (e.response.status === 409) {
        setError({ status: 409, statusText: 'User already exist' })
      }
      else setError(e.response)

      throw new Error(e);
    }

    setEmail('');
    setPassword('');
    setName('');
    setError(null);
  }

  return (
    <>
      {error && (
        <div className='form-error Text-Style-6'>
          <p>{error.status}: {error.statusText}</p>
        </div>
      )}

      <TodoHeader title='Welcome!' subtitle='Sign up to start using Simpledo today.' />

      <form action="" onSubmit={register}>
        <TodoText type='text' value={name} placeholder='Name' onChange={(e) => setName(e.target.value)} />
        <TodoText type='email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
        <TodoText type='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />

        <Link to="/login">Already have account?</Link>

        <TodoBtn type='submit' title='Register' />
      </form>
    </>

  );
}


export default RegisterPage;
