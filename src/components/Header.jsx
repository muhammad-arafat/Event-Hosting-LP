import eventLogo from "../assets/EventHost.png";
import curve from "../assets/Group 2.png";
import avatar from "../assets/icon/avatar.png";
import cart from "../assets/icon/cart.png";

const Header = () => {
  return (
    <div className='bg-header-texture bg-no-repeat m-auto max-w-[1160px] h-[72px] flex items-center justify-between px-10'>
      <div className=' flex items-center'>
        <div className='w-[114px] h-[27px]'>
          <img className='w-full h-full' src={eventLogo} alt='Event Logo' />
        </div>
        <div className=' pl-10'>
          <img src={curve} alt='' />
        </div>
      </div>
      <div className=' w-[321px] h-[19px] flex items-center justify-between'>
        <h3 className=' text-primary text-base font-normal text-opacity-95 '>
          Home
        </h3>
        <h3 className=' text-primary text-base font-normal text-opacity-95 '>
          Events
        </h3>
        <h3 className=' text-primary text-base font-normal text-opacity-95 '>
          About Us
        </h3>
        <h3 className=' text-primary text-base font-normal text-opacity-95 '>
          Contact
        </h3>
      </div>

      <div className=' flex items-center'>
        <div className=' pr-10'>
          <img src={curve} alt='' />
        </div>
        <div className=' flex items-center gap-x-5'>
          <img className=' w-7 h-7' src={avatar} alt='' />
          <img className=' w-7 h-7' src={cart} alt='' />
        </div>
      </div>
    </div>
  );
};

export default Header;
