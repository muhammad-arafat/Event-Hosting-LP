import ticket from "../assets/icon/Vector.png";
import dots from "../assets/icon/dot.png";

const Banner = () => {
  return (
    <div className='pb- pt-10'>
      <div className='relative bg-banner-image w-[1160px] h-[441px] bg-no-repeat mx-auto'>
        <div className='flex flex-col pl-10 justify-center h-full space-y-5'>
          <h1 className='font-bold text-[40px] text-primary'>CMA Fest</h1>
          <p className='text-xl font-normal text-primary text-opacity-85'>
            Make memories that will last a lifetime. See your favorite <br />{" "}
            artists live at CMA Fest!
          </p>
          <div className='flex items-center gap-x-2'>
            <button className='bg-event-gradient px-2 py-2 w-[134px] h-[43px] text-primary text-opacity-70 font-normal text-base rounded-[4px] flex items-center gap-x-3'>
              <img src={ticket} alt='' />
              Get Ticket
            </button>
            <button className='w-[167px] h-[43px] flex items-center justify-center py-3 border-[#F1F3FF] border-[1px] text-base text-primary border-opacity-50 text-opacity-60 rounded-[10px]'>
              Explore All Events
            </button>
          </div>
        </div>
        <div className='absolute bottom-3 left-0 right-0 flex justify-center'>
          <img src={dots} alt='' />
        </div>
      </div>
    </div>
  );
};

export default Banner;
