import ragImage from "../assets/Rectangle 16.png";
import singers from "../assets/singers.png";
import players from "../assets/players.png";
import line from "../assets/Line.png";
import heart from "../assets/icon/Heart.png";
import ticket from "../assets/icon/Vector.png";
import location from "../assets/icon/location.png";

const Events = () => {
  return (
    <div>
      <div>
        <h1 className=' text-heading font-bold text-[48px] text-center'>
          Events
        </h1>
        <div className='w-[619px] flex justify-between mx-auto py-5'>
          <p className=' text-heading font-normal text-xl'> All</p>
          <p className=' text-heading font-normal text-xl'> For You</p>
          <p className=' text-heading font-normal text-xl'> This day</p>
          <p className=' text-heading font-normal text-xl'> This Week</p>
          <p className='font-normal text-xl  bg-event-gradient px-2 py-1 rounded-[4px] text-primary'>
            Music
          </p>
          <p className=' text-heading font-normal text-xl'>Union</p>
        </div>
      </div>

      <div className=' flex items-center justify-center gap-x-10'>
        <div className='bg-card-subtract  bg-no-repeat w-[373px] h-[491px] rounded-[20px] p-5  '>
          <div className='relative'>
            <img className=' w-full' src={ragImage} alt='Rag Image' />
            <div className='absolute top-3 left-3 right-3 flex justify-between mx-auto items-center'>
              <button className='bg-event-gradient px-2 py-1 h-[29px] w-[71px] text-primary text-[17px]'>
                Online
              </button>
              <button className='bg-event-gradient px-2 py-1 gap-x-3 h-[29px] w-[111px] text-primary text-[17px] flex items-center'>
                <img src={heart} alt='Heart Icon' />
                Favorite
              </button>
            </div>
          </div>
          <div className='flex justify-center py-5'>
            <img src={line} alt='Line Image' />
          </div>

          <div className=' flex items-center justify-between gap-x-5'>
            <div className=' flex flex-col justify-between gap-y-4'>
              <div className=' flex justify-between'>
                <div className=' space-y-3'>
                  <button className=' bg-event-gradient px-2 py-1 text-primary font-normal text-sm rounded-[4px]'>
                    Music
                  </button>
                  <div className=' flex items-center gap-x-2'>
                    <img src={location} alt='' />
                    <p className=' text-heading font-normal text-sm'>
                      Celebrity Convention Hall
                    </p>
                  </div>
                  <h2 className=' font-semibold text-[22px] text-heading'>
                    Roufian’s HSC-24 Rag <br /> Day
                  </h2>
                </div>
                <div className=' flex flex-col justify-center items-center bg-primary p-2 w-[81px] rounded-lg h-[95px]'>
                  <p className=' text-heading font-normal'>Apr</p>
                  <p className=' text-date font-semibold text-[32px]'>20</p>
                  <p className=' text-heading text-sm font-normal'>10:00 PM</p>
                </div>
              </div>
              <div className=' flex items-center justify-between '>
                <button className='bg-event-gradient px-2 py-2 w-[134px] h-[43px] text-primary font-normal text-base rounded-[4px] flex items-center gap-x-3'>
                  <img src={ticket} alt='' />
                  See Ticket
                </button>
                <div className=' flex items-center justify-center bg-primary w-[86px] h-[43px] rounded-lg gap-x-1'>
                  <p className=' text-date font-semibold text-2xl'>20</p>
                  <div className=' flex flex-col justify-center items-center text-[10px]'>
                    <p className=''>Seat</p>
                    <p> Left</p>
                  </div>
                </div>
                <p className=' text-date text-base font-normal text-opacity-75'>
                  See More
                </p>
              </div>
            </div>
          </div>
        </div>
        {/*  */}
        <div className='bg-card-subtract  bg-no-repeat w-[373px] h-[491px] rounded-[20px] p-5  '>
          <div className='relative'>
            <img className=' w-full' src={singers} alt='Rag Image' />
            <div className='absolute top-3 left-3 right-3 flex justify-between mx-auto items-center'>
              <button className='bg-event-gradient px-2 py-1 h-[29px] w-[71px] text-primary text-[17px]'>
                Online
              </button>
              <button className='bg-event-gradient px-2 py-1 gap-x-3 h-[29px] w-[111px] text-primary text-[17px] flex items-center'>
                <img src={heart} alt='Heart Icon' />
                Favorite
              </button>
            </div>
          </div>
          <div className='flex justify-center py-5'>
            <img src={line} alt='Line Image' />
          </div>

          <div className=' flex items-center justify-between gap-x-5'>
            <div className=' flex flex-col justify-between gap-y-4'>
              <div className=' flex justify-between'>
                <div className=' space-y-3'>
                  <button className=' bg-event-gradient px-2 py-1 text-primary font-normal text-sm rounded-[4px]'>
                    Music
                  </button>
                  <div className=' flex items-center gap-x-2'>
                    <img src={location} alt='' />
                    <p className=' text-heading font-normal text-sm'>
                      Celebrity Convention Hall
                    </p>
                  </div>
                  <h2 className=' font-semibold text-[22px] text-heading'>
                    Roufian’s HSC-24 Rag <br /> Day
                  </h2>
                </div>
                <div className=' flex flex-col justify-center items-center bg-primary p-2 w-[81px] rounded-lg h-[95px]'>
                  <p className=' text-heading font-normal'>Apr</p>
                  <p className=' text-date font-semibold text-[32px]'>20</p>
                  <p className=' text-heading text-sm font-normal'>10:00 PM</p>
                </div>
              </div>
              <div className=' flex items-center justify-between '>
                <button className='bg-event-gradient px-2 py-2 w-[134px] h-[43px] text-primary font-normal text-base rounded-[4px] flex items-center gap-x-3'>
                  <img src={ticket} alt='' />
                  See Ticket
                </button>
                <div className=' flex items-center justify-center bg-primary w-[86px] h-[43px] rounded-lg gap-x-1'>
                  <p className=' text-date font-semibold text-2xl'>20</p>
                  <div className=' flex flex-col justify-center items-center text-[10px]'>
                    <p className=''>Seat</p>
                    <p> Left</p>
                  </div>
                </div>
                <p className=' text-date text-base font-normal text-opacity-75'>
                  See More
                </p>
              </div>
            </div>
          </div>
        </div>
        {/*  */}
        <div className='bg-card-subtract  bg-no-repeat w-[373px] h-[491px] rounded-[20px] p-5  '>
          <div className='relative'>
            <img className=' w-full' src={players} alt='Rag Image' />
            <div className='absolute top-3 left-3 right-3 flex justify-between mx-auto items-center'>
              <button className='bg-event-gradient px-2 py-1 h-[29px] w-[71px] text-primary text-[17px]'>
                Online
              </button>
              <button className='bg-event-gradient px-2 py-1 gap-x-3 h-[29px] w-[111px] text-primary text-[17px] flex items-center'>
                <img src={heart} alt='Heart Icon' />
                Favorite
              </button>
            </div>
          </div>
          <div className='flex justify-center py-5'>
            <img src={line} alt='Line Image' />
          </div>

          <div className=' flex items-center justify-between gap-x-5'>
            <div className=' flex flex-col justify-between gap-y-4'>
              <div className=' flex justify-between'>
                <div className=' space-y-3'>
                  <button className=' bg-event-gradient px-2 py-1 text-primary font-normal text-sm rounded-[4px]'>
                    Music
                  </button>
                  <div className=' flex items-center gap-x-2'>
                    <img src={location} alt='' />
                    <p className=' text-heading font-normal text-sm'>
                      Celebrity Convention Hall
                    </p>
                  </div>
                  <h2 className=' font-semibold text-[22px] text-heading'>
                    Roufian’s HSC-24 Rag <br /> Day
                  </h2>
                </div>
                <div className=' flex flex-col justify-center items-center bg-primary p-2 w-[81px] rounded-lg h-[95px]'>
                  <p className=' text-heading font-normal'>Apr</p>
                  <p className=' text-date font-semibold text-[32px]'>20</p>
                  <p className=' text-heading text-sm font-normal'>10:00 PM</p>
                </div>
              </div>
              <div className=' flex items-center justify-between '>
                <button className='bg-event-gradient px-2 py-2 w-[134px] h-[43px] text-primary font-normal text-base rounded-[4px] flex items-center gap-x-3'>
                  <img src={ticket} alt='' />
                  See Ticket
                </button>
                <div className=' flex items-center justify-center bg-primary w-[86px] h-[43px] rounded-lg gap-x-1'>
                  <p className=' text-date font-semibold text-2xl'>20</p>
                  <div className=' flex flex-col justify-center items-center text-[10px]'>
                    <p className=''>Seat</p>
                    <p> Left</p>
                  </div>
                </div>
                <p className=' text-date text-base font-normal text-opacity-75'>
                  See More
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
