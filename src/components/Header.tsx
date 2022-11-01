import  logo from "../images/logo.svg";
import MobileMenu from "./MobileMenu";
import Menu from "./Menu";
const Header =()=>{
    return<div className=" bg-white flex flex-row w-screen overflow-hidden justify-between items-center px-6 py-[22px] lg:px-[165px] lg:py-[18px] relative ">
        <img src={logo} alt="" className="w-[139px] h-[20px]"/>
        <MobileMenu />
        <Menu />


    </div>
};
export default  Header;