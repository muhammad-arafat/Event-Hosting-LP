import eventImage from "../assets/hostYourEvent.png";
import checkmarkIcon from "../assets/icon/checkmark-icon.png";
import clockIcon from "../assets/clock.png";

const EventHosting = () => {
  return (
    <div className='max-w-[1160px] mx-auto bg-event-gradient flex items-center justify-center gap-x-16 relative py-24 rounded-[30px] overflow-hidden mt-32 mb-16'>
      <div className=''>
        <img src={eventImage} alt='' />
      </div>
      <div className=' space-y-5'>
        <h2 className=' text-primary text-opacity-90 text-3xl font-semibold'>
          Host Your Event Easily & Automatedly <br /> With Us
        </h2>
        <p className=' text-2xl text-primary text-opacity-90'>
          We Provide The Best Event Ticketing & <br />
          Management Solutions
        </p>
        <div className=' space-y-3'>
          <div className=' flex items-center gap-x-2'>
            <div className=' bg-primary rounded-full p-1'>
              <img className=' w-6' src={checkmarkIcon} alt='' />
            </div>
            <p className=' text-primary text-opacity-95 text-base'>
              Host Your Event With Easy Steps
            </p>
          </div>
          <div className=' flex items-center gap-x-2'>
            <div className=' bg-primary rounded-full p-1'>
              <img className=' w-6' src={checkmarkIcon} alt='' />
            </div>
            <p className=' text-primary text-opacity-95 text-base'>
              Automated Payment System & Ticket Will Be Sent To Mail
            </p>
          </div>
          <div className=' flex items-center gap-x-2'>
            <div className=' bg-primary rounded-full p-1'>
              <img className=' w-6' src={checkmarkIcon} alt='' />
            </div>
            <p className=' text-primary text-opacity-95 text-base'>
              Access To Registration And transaction Reports
            </p>
          </div>
          <div className=' flex items-center gap-x-2'>
            <div className=' bg-primary rounded-full p-1'>
              <img className=' w-6' src={checkmarkIcon} alt='' />
            </div>
            <p className=' text-primary text-opacity-95 text-base'>
              Send Bulk Personalized Mail With Attachments
            </p>
          </div>
        </div>
      </div>
      <div className=' absolute right-0 bottom-0'>
        <img src={clockIcon} alt='' />
      </div>
    </div>
  );
};

export default EventHosting;
