

import { Navbar } from 'flowbite-react';

export default function DefaultNavbar() {
  return (
    <Navbar fluid rounded className="bg-[#014dfe] lg:w-11/12 m-auto pt-10 pb-5 md:w-full">
      <Navbar.Brand href="#">
        <svg className="text-white text-3xl mr-2 w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 18" fill="currentColor">
          <path d="M18 4H16V9C16 10.0609 15.5786 11.0783 14.8284 11.8284C14.0783 12.5786 13.0609 13 12 13H9L6.846 14.615C7.17993 14.8628 7.58418 14.9977 8 15H11.667L15.4 17.8C15.5731 17.9298 15.7836 18 16 18C16.2652 18 16.5196 17.8946 16.7071 17.7071C16.8946 17.5196 17 17.2652 17 17V15H18C18.5304 15 19.0391 14.7893 19.4142 14.4142C19.7893 14.0391 20 13.5304 20 13V6C20 5.46957 19.7893 4.96086 19.4142 4.58579C19.0391 4.21071 18.5304 4 18 4Z" fill="currentColor"/>
          <path d="M12 0H2C1.46957 0 0.960859 0.210714 0.585786 0.585786C0.210714 0.960859 0 1.46957 0 2V9C0 9.53043 0.210714 10.0391 0.585786 10.4142C0.960859 10.7893 1.46957 11 2 11H3V13C3 13.1857 3.05171 13.3678 3.14935 13.5257C3.24698 13.6837 3.38668 13.8114 3.55279 13.8944C3.71889 13.9775 3.90484 14.0126 4.08981 13.996C4.27477 13.9793 4.45143 13.9114 4.6 13.8L8.333 11H12C12.5304 11 13.0391 10.7893 13.4142 10.4142C13.7893 10.0391 14 9.53043 14 9V2C14 1.46957 13.7893 0.960859 13.4142 0.585786C13.0391 0.210714 12.5304 0 12 0Z" fill="currentColor"/>
        </svg>
        <span className="text-white text-3xl self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Chatbox
        </span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link active href="#" className='mx-8 sm:mx-4 xs:mx-0'>
          <p className='text-white'>
            Home
          </p>
        </Navbar.Link>
        <Navbar.Link href="#" className='text-white mx-8 sm:mx-4 xs:mx-0'>
            Features
        </Navbar.Link>
        <Navbar.Link href="#" className='text-white mx-8 sm:mx-4 xs:mx-0'>
          About Us
        </Navbar.Link>
        <Navbar.Link href="#" className='text-white mx-8 sm:mx-4 xs:mx-0'>
          Download
        </Navbar.Link>
        
      </Navbar.Collapse>
      <Navbar.Collapse>
        <Navbar.Link href="#">
          <p className='lg:px-7 py-4 md:px-0 lg:px-3 rounded-full bg-white text-[#014dfe] md:px-2 text-center'>Try For Free</p>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  )
}


