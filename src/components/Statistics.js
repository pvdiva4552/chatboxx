import lefttab from '../assets/lefttab.jpg'
const Statistics=()=>{
    return(
        <div className="m-auto justify-between justify-items-center w-10/12 flex flex-wrap flex-row">
           
            <div className='lg:w-6/12 w-full lg:mt-8 mt-2'>
                <div>
                    <p className='text-2xl leading-normal lg:text-5xl lg:leading-[60px]'>Communicate more effeciently by using <span className='font-medium text-[#014dfe]'>Chatbox</span></p>
                    <p className='py-5 font-medium text-[#b6b6b6]'>Send message easily using only mobile or desktop applications and with a myriad of features that can make your experience different from other applications.</p>
                </div>
                <div className="flex flex-wrap flex-row justify-between lg:m-8 m-0">
                    <p className='text-center'>
                        <span className='text-5xl font-bolder'>1M+</span><br />
                        <span className="font-medium text-xl tracking-[5px] text-[#b6b6b6]">Users</span>
                    </p>
                    <p className='text-center'>
                        <span className='text-5xl font-bolder'>2M+</span><br />
                        <span className="font-medium text-xl tracking-[5px] text-[#b6b6b6]">Downloads</span>
                    </p>
                    <p className='text-center'>
                        <span className='text-5xl font-bolder'>2+</span><br />
                        <span className="font-medium text-xl tracking-[5px] text-[#b6b6b6]">Years</span>
                    </p>
                </div>
            </div>
            <div className='lg:w-6/12 w-full lg:mt-0 mt-12'>
                <img src={lefttab} className='w-full px-12' />
            </div>
        </div>
    )
}

export default Statistics