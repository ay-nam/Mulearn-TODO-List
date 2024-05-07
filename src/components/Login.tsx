import React, { ChangeEvent, useState } from 'react';
import { useHistory } from 'react-router-dom';
import "../styles/login.css";

interface FormData {
  username: string;
  password: string;
}

const Login: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    username: '',
    password: '',
  });

  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const history = useHistory();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);

   
    console.log('Submitted Username:', formData.username);
    console.log('Submitted Password:', formData.password);

    
    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');

    console.log('Retrieved Username:', storedUsername);
    console.log('Retrieved Password:', storedPassword);

    if (storedUsername === formData.username && storedPassword === formData.password) {
      setLoading(false);
      history.push('/todolist');
    } else {
      setLoading(false);
      setError('Incorrect username or password');
    }
  };

  return (
    <div className="container">
      <h2>LOGIN</h2>
      <form className='login-form' onSubmit={handleSubmit}>
        <div className='username'>
          <label className='username-label' htmlFor="username">Username</label>
          <input
            className="username-input"
            type="text"
            name="username"
            id="username"
            placeholder='Username'
            value={formData.username}
            onChange={handleChange}
            autoComplete="username"
          />
        </div>
        <div className='password'>
          <label className='password-label' htmlFor="password">Password</label>
          <input
            className='password-input'
            type="password"
            name="password"
            id="password"
            placeholder='Password'
            value={formData.password}
            onChange={handleChange}
            autoComplete="current-password"
          />
        </div>
        <button className="btn" type="submit" disabled={loading}>
          {loading ? 'Logging in...' : 'Login'}
        </button>
        {error && <p className="error-message">{error}</p>}
      </form>
    </div>
  );
};

export default Login;
