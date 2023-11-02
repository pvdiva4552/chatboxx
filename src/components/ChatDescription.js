import righttab from '../assets/righttab.jpg'
const ChatDescription=()=>{
    return(
        <div className="m-auto justify-between justify-items-center w-10/12 flex flex-wrap flex-row mt-10">
            <div className='lg:w-6/12 w-full lg:mt-0 mt-12'>
                <img src={righttab} className='w-full px-12' />
            </div>
            <div className='lg:w-6/12 w-full lg:mt-8 mt-2 px-12'>
                <div>
                    <p className='text-2xl leading-normal lg:text-5xl lg:leading-[60px]'>Send messages in <span className='font-medium text-[#014dfe]'>Real Time</span> without any delay between us</p>
                    <p className='py-5 font-medium text-[#b6b6b6]'>Send message easily using only mobile or desktop applications and with a myriad of features that can make your experience different from other applications.</p>
                </div>
                <div className="flex flex-wrap flex-row justify-between lg:mt-8 m-0">
                    <button className='py-2 px-8 rounded-full bg-[#014dfe] text-white'>Learn More</button>
                </div>
            </div>
        </div>
    )
}

export default ChatDescription