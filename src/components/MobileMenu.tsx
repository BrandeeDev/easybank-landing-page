import {Fragment, useState} from "react";
import icon from "../images/icon-hamburger.svg";
import cross from "../images/icon-close.svg";

const MobileMenu = () => {
    const [isMenuVisible, setIsMenuVisible] = useState(false);
    const toggleHandler = () => {
        setIsMenuVisible(prevState => !prevState);

    }
    return (<div className="sm:hidden">
        {!isMenuVisible &&
            <img src={icon} alt="w-[24px] h-[11px] " onClick={toggleHandler}/>

        }
        {
            isMenuVisible &&
            <Fragment>
                <img src={cross} alt="w-[18px] h-[19px]" onClick={toggleHandler}/>
                <div className="w-screen h-[603px] absolute top-[64px] right-0 left-0 bg-mobile_menu_gradient z-50  ">
                    <div
                        className=" mt-6 mx-6 py-8 bg-white rounded-[4px] flex flex-col justify-start items-center gap-y-6 font-public font-normal not-italic text-lg leading-[21px] text-center tracking-[-0.138462px] text-[#2D314D]  ">
                        <p>Home</p>
                        <p>About</p>
                        <p>Contact</p>
                        <p>Blog</p>
                        <p>Careers</p>

                    </div>
                </div>


            </Fragment>
        }
    </div>);


}
export default MobileMenu;