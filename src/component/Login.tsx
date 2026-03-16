import Header from './Header';
import NetflixBackground from '../Utility/netflixbackgroundimg.jpg';

const Login = () => {
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
        <h1 className='text-white text-3xl font-bold mb-4'>Sign In</h1>

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
          Sign In
        </button>
      </form>
    </div>
  );
};
export default Login;
