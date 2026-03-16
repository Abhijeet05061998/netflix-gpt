import Logo from '../Utility/Netflix_Logo_PMS.png';

const Header = () => {
  return (
    <div className='bg-gradient-to-t from-black/50 to-black/50 absolute w-full h-screen'>
      <img
        className='absolute w-58 h-28 object-contain '
        src={Logo}
        alt='logo'
      />
    </div>
  );
};

export default Header;
