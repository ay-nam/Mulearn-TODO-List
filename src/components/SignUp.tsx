import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import "../styles/signup.css";

interface SignUpData {
  name: string;
  username: string;
  password: string;
}

const SignUp: React.FC = () => {
  const [formData, setFormData] = useState<SignUpData>({
    name: '',
    username: '',
    password: '',
  });
  const [isSignedUp, setIsSignedUp] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
   
    console.log('Form submitted:', formData);
   
    setIsSignedUp(true);
  };

  if (isSignedUp) {
    return <Redirect to="/login" />;
  }

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      <form className= "signup-form" onSubmit={handleSubmit}>
        <div className='name'>
          <label className='name-label' htmlFor="name">Name</label>
          <input
            className="name-input"
            type="text"
            name="name"
            id="name"
            placeholder='Enter your name'
            value={formData.name}
            onChange={handleChange}
            autoComplete="name"
            required
          />
        </div>
        <div className='username'>
          <label className='username-label' htmlFor="username">Username</label>
          <input
            className="username-input"
            type="text"
            name="username"
            id="username"
            placeholder='Enter your username'
            value={formData.username}
            onChange={handleChange}
            autoComplete="username"
            required
          />
        </div>
        <div className="password">
          <label className='password-label' htmlFor="password">Password</label>
          <input
            className='password-input'
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            placeholder='Enter your password'
          />
        </div>
        <button className="btn" type="submit">Sign Up</button>
      </form>
      <p>Already have an account? <Link to="/login">Login</Link></p>
    </div>
  );
};

export default SignUp;
