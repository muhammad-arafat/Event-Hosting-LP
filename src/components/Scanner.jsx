import clickIcon from "../assets/icon/click (1) 1.png";
import qrIcon from "../assets/icon/click.png";
import checkIcon from "../assets/icon/check 1.png";
import mailIcon from "../assets/icon/Vector-1.png";

const Scanner = () => {
  return (
    <div className=' py-20'>
      <div className=' text-center space-y-5'>
        <h1 className=' text-heading font-semibold text-5xl '>
          Automated QR Scanner
        </h1>
        <p className=' text-[#8053FA] opacity-80 text-2xl font-normal'>
          Scan & Verify The Attendees Directly By Our QR Scanning
          <br />
          Solution.
        </p>
      </div>
      <div className='pt-8 flex items-center justify-center gap-x-4'>
        <div className='bg-card inline-block w-[275px] h-[209px] pl-5 pt-5  rounded-3xl border-scanner-border border'>
          <div className=' bg-primary rounded-full inline-block p-3'>
            <img className=' w-full' src={clickIcon} alt='' />
          </div>
          <h2 className=' text-heading text-[32px] font-bold'>One Click </h2>
          <h4 className=' text-heading opacity-60 text-base font-normal'>
            QR verification System
          </h4>
        </div>
        <div className='bg-card inline-block w-[275px] h-[209px] pl-5 pt-5  rounded-3xl border-scanner-border border'>
          <div className=' bg-primary rounded-full inline-block p-3'>
            <img className=' w-full' src={qrIcon} alt='' />
          </div>
          <h2 className=' text-heading text-[32px] font-bold'>One time</h2>
          <h4 className=' text-heading opacity-60 text-base font-normal'>
            QR Code
          </h4>
        </div>
        <div className='bg-card inline-block w-[275px] h-[209px] pl-5 pt-5  rounded-3xl border-scanner-border border'>
          <div className=' bg-primary rounded-full inline-block p-3'>
            <img className=' w-full' src={checkIcon} alt='' />
          </div>
          <h2 className=' text-heading text-[32px] font-bold'>Easy Access</h2>
          <h4 className=' text-heading opacity-60 text-base font-normal'>
            Gain access instantly
          </h4>
        </div>
        <div className='bg-card inline-block w-[275px] h-[209px] pl-5 pt-5  rounded-3xl border-scanner-border border'>
          <div className=' bg-primary rounded-full inline-block p-3'>
            <img className=' w-full' src={mailIcon} alt='' />
          </div>
          <h2 className=' text-heading text-[32px] font-bold'>Mail </h2>
          <h4 className=' text-heading opacity-60 text-base font-normal'>
            Send bulk personalized mail
            <br />
            with attachments
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Scanner;
