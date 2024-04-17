import eventLogo from "../assets/icon/EventHost.png";
import fbIcon from "../assets/icon/fb.png";
import igIcon from "../assets/icon/ig.png";
import inIcon from "../assets/icon/in.png";
import ytIcon from "../assets/icon/yt.png";
import bkash from "../assets/bkash.png";
import nogod from "../assets/nogod.png";
import rocket from "../assets/rocket.png";

const Footer = () => {
  return (
    <div className=' flex flex-col bg-footer-texture font-inter  p-24 '>
      <div className=' flex justify-between'>
        <div className=' space-y-5'>
          <div className=' w-[189px]'>
            <img className=' w-full' src={eventLogo} alt='' />
          </div>
          <p className=' font-normal text-base text-left text-primary'>
            IDEA Project, ICT Tower (0th Floor), <br /> Plot: E-14X, Agargaon,
            Dhaka - 1207 <br />
            02222-222222, 01111111111
          </p>
        </div>

        <div className=' text-primary text-base font-medium space-y-4 '>
          <p>Home</p>
          <p>Events</p>
          <p>About Us</p>
          <p>Contact</p>
        </div>
        <div className=' text-primary text-base font-medium space-y-4 '>
          <p>Event Dashboard</p>
          <p>Terms & Condition</p>
          <p>Privacy & Refund Policy</p>
        </div>
        <div className=' space-y-3'>
          <p className=' text-[#EEE0FF] text-base font-normal'>Follow Us</p>
          <div className=' flex space-x-5'>
            <img src={fbIcon} alt='' />
            <img src={igIcon} alt='' />
            <img src={inIcon} alt='' />
            <img src={ytIcon} alt='' />
          </div>
        </div>
      </div>
      <div className='border-t-2 opacity-20 border-primary flex-grow w-full mt-10'></div>
      <div className='pt-5 flex justify-between'>
        <div className=' flex items-center gap-x-3 '>
          <p className=' text-[#EEE0FF] text-base font-normal'>Pay with</p>
          <img src={bkash} alt='' />
          <img src={nogod} alt='' />
          <img src={rocket} alt='' />
        </div>
        <div className=' opacity-95'>
          <p className=' text-primary font-normal text-base'>
            ©2023 TickHost & <span className=' underline'>UVTR.</span> All right
            reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
