import Header from './Header';
import { useState } from 'react';
import NetflixBackground from '../Utility/netflixbackgroundimg.jpg';

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  const ToggleSignInForm = () => {
    setIsSignIn(!isSignIn);
  };
  return (
    <div>
      <Header />
      <div className=''>
        <img
          className='w-screen h-screen object-cover'
          src={NetflixBackground}
          alt='background'
        />
      </div>
      <form
        className='my-3 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
bg-black/80 p-10 rounded-md flex flex-col w-100 space-y-4'
      >
        <h1 className='text-white text-3xl font-bold mb-4'>
          {isSignIn ? 'Sign In' : 'Sign Up'}
        </h1>
        {!isSignIn && (
          <input
            type='text'
            placeholder='Full Name'
            className='p-3 my-4 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none'
          />
        )}
        <input
          type='text'
          placeholder='Email'
          className='p-3 my-4 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none'
        />

        <input
          type='password'
          placeholder='Password'
          className='p-3 my-4 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none'
        />
        <button
          type='submit'
          className='p-3 my-4 bg-red-600 hover:bg-red-700 text-white py-3 rounded font-semibold'
        >
          {isSignIn ? 'Sign In' : 'Sign Up'}
        </button>
        <p
          className='text-cyan-50 py-4 cursor-pointer'
          onClick={ToggleSignInForm}
        >
          {isSignIn
            ? "Don't have an account? Sign Up"
            : 'Already have an account? Sign In'}
        </p>
      </form>
    </div>
  );
};
export default Login;
