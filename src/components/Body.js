import Clients from './Clients';
import DefaultNavbar from './DefaultNavbar'
import Featured from './Featured';
import Stores from './Stores'
import Advantages from './Advantages'
import Statistics from './Statistics';
import ChatDescription from './ChatDescription';
import BottomSection from './BottomSection';
import Footerr from './Footerr';
const Body=()=>{
    return(
    <>
        <div className=" bg-[#014dfe]">
            <DefaultNavbar />
            <Stores />
        </div>
    
        <Clients />
        <Featured />
        <Advantages />
        <Statistics />
        <ChatDescription />
        <BottomSection />
        <Footerr />
    </>
    )
}

export default Body;