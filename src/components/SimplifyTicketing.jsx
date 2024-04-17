import shieldIcon from "../assets/icon/fi-sr-shield-check.png";
import phones from "../assets/Group 41.png";

const SimplifyTicketing = () => {
  return (
    <div className='relative h-[700px] mb-32'>
      <div className='absolute top-0 left-0 right-0 flex justify-center pt-5'>
        <img src={phones} alt='' />
      </div>
      <div className='absolute top-0 left-0 right-0 flex flex-col items-center justify-center space-y-5'>
        <h2 className='text-5xl font-bold text-heading'>Simplify Ticketing</h2>
        <p className='text-[#8053FA] opacity-80 text-2xl text-center font-normal'>
          First Ever Unique QR Ticketing
          <br />
          Platform For Event Registration & Booking
        </p>
        <button className='bg-payment-button-gradient opacity-75 flex items-center gap-x-1 px-3 py-2 text-button-text font-medium text-2xl rounded-[10px]'>
          <img src={shieldIcon} alt='' />
          Secure Payment with
        </button>
      </div>
    </div>
  );
};

export default SimplifyTicketing;
