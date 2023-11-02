import chatpage from '../assets/chatpage.jpg'

const Stores=()=>{
    return(
        <div className='  border-b-[40px] border-[#051b4a] xl:h-[900px]'>
            <div className="w-11/12 m-auto xs:py-10 md:py-15 lg:py-18 flex lg:flex-row sm:flex-column flex-wrap">
                <div className="tracking-wider py-16 text-center m-auto text-5xl md:text-6xl lg:text-8xl font-light text-white lg:bg-none lg:text-left md:text-center lg:text-center xl:text-left md:w-[100%] xl:w-[70%] xl:w-[100%]">
                    Get the best<br />
                    <span className="font-semibold">experience</span> when
                    sending messages.
                </div>
                <div className="flex flex-wrap xl:flex-col lg:flex-row justify-center xl:w-[30%] w-[100%] w-[100%]">
                    <p className="font-normal lg:w-full text-center xl:text-left text-white tracking-widest leading-7 my-3">Platform used to send messages with a myriad of features, by prioritizing the user experience</p>
                    
                    <div className="flex justify-end my-3 mx-2">
                        <button className="text-white py-5 px-8 bg-white text-[#014dfe] font-semibold rounded-full">
                            <svg className="inline  text-[#014dfe] mx-2 w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 21">
                                <path d="M14.537 10.625a4.421 4.421 0 0 0 2.684 4.047 10.96 10.96 0 0 1-1.384 2.845c-.834 1.218-1.7 2.432-3.062 2.457-1.339.025-1.769-.794-3.3-.794s-2.009.769-3.275.82c-1.316.049-2.317-1.318-3.158-2.532C1.323 14.984.01 10.451 1.772 7.391a4.9 4.9 0 0 1 4.139-2.507c1.292-.025 2.511.869 3.3.869.789 0 2.271-1.075 3.828-.917A4.67 4.67 0 0 1 16.7 6.82a4.524 4.524 0 0 0-2.161 3.805M12.02 3.193A4.4 4.4 0 0 0 13.06 0a4.482 4.482 0 0 0-2.946 1.516 4.185 4.185 0 0 0-1.061 3.093 3.708 3.708 0 0 0 2.967-1.416Z"/>
                            </svg>
                            Download Now
                        </button>
                    </div>
                    <div className="flex justify-end my-3 mx-2">
                        <button className="text-white py-5 px-8 text-white border-2 border-solid border-white font-semibold rounded-full">
                        <svg className="inline text-white  mx-2 w-6 h-6 text-gray-800 dark:text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                            <path fill-rule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clip-rule="evenodd" />
                        </svg>

                            Download Now
                        </button>
                    </div>
                </div>
            </div>
            <br />
            <img src={chatpage} className='w-10/12 m-auto rounded-xl'/>
        </div>
    )
}

export default Stores