import hero from "../images/image-mockups.png";
import bg from "../images/bg-intro-mobile.svg";
import RequestButton from "./RequestButton";

const Presentation = () => {
    return (<div
        className="flex flex-col justify-start items-center  lg:items-start  px-6 lg:pl-[165px]   bg-cover bg-no-repeat	 bg-bg_presentation   bg-[right_-280px] lg:bg-bg_presentation_desktop  lg:bg-[length:2000px_1000px] lg:bg-[right_-1150px_top_-240px]  ">
        <img src={hero}
             className=" absolute h-[402px]  object-cover  -top-[116px] lg:w-[732px] lg:h-[901px] lg:-right-[115px] lg:-top-[112px]"/>
        <div className=" flex flex-col justify-start items-center mt-[322px] pb-[88px] lg:items-start lg:w-[447px] lg:my-[170px]  ">
            <h1 className="font-public not-italic font-light text-[40px] leading-[47px] text-center tracking-[-0.714286px] text-[#2D314D] lg:text-left lg:text-[56px] lg:leading-[64px] lg:tracking-[-1px]">Next
                generation
                digital banking</h1>
            <p className="font-public not-italic font-normal text-[15px] leading-[25px] text-center tracking-[-0.234375px] text-[#9597A5] mt-4 mb-8 lg:text-left lg:text-lg lg:leading-7 lg:tracking-[-0.28125px] lg:mt-6 lg:mb-9 ">Take
                your financial life online. Your Easybank account will be a one-stop-shop for spending, saving,
                budgeting, investing, and much more.</p>
            <RequestButton/>

        </div>


    </div>);
};
export default Presentation;
