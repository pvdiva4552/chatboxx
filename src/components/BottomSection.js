import bottom from '../assets/bottom.jpg'
const BottomSection=()=>{
    return(
        <div>
            <div className='w-full bg-[#014dfe] mt-14 sm:pt-16 sm:px-16 pt-8 sm-8'>
                <img src={bottom} className='w-full' />
            </div>

            <div className='bg-black flex flex-wrap flex-row justify-between justify-items-center sm:p-16 p-8 m-auto bottom-2'>
                <p className='text-white  m-auto sm:w-6/12 sm:text-5xl text-3xl sm:text-left text-center'>Want to stay<br />connected?</p>
                <div className="flex flex-wrap w-full justify-items-center  sm:w-6/12 flex-row justify-center">
                    <div className="flex justify-end my-3 mx-2 justify-items-center">
                        <button className="text-white sm:py-5 bg-[#014dfe] sm:px-8 py-2 px-5 text-white border-2 border-solid border-white font-semibold rounded-full">
                        <svg className="inline text-white  mx-2 w-6 h-6 text-gray-800 dark:text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                            <path fill-rule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clip-rule="evenodd" />
                        </svg>

                            Download Now
                        </button>
                    </div>
                    <div className="flex justify-end my-3 mx-2">
                        <button className="text-white sm:py-5 sm:px-8 py-2 px-5 text-white border-2 border-solid border-white font-semibold rounded-full">
                        <svg className="inline text-white  mx-2 w-6 h-6 text-gray-800 dark:text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                            <path fill-rule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clip-rule="evenodd" />
                        </svg>

                            Download Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BottomSection