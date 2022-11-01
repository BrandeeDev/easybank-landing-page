import RequestButton from "./RequestButton";

const Menu =()=>{
    return(<div className="hidden  lg:flex flex-row justify-start items-center gap-x-[226px] ">
        <div className="flex flex-row justify-start  items-center gap-x-[30px] font-public not-italic font-normal text-sm leading-4 tracking-[-0.107692px] text-[#9597A5]">
            <div className=" flex flex-col h-full  justify-start  items-center bg-white group  ">
                <a >Home</a>
                <div className="h-[4px] w-[51px] bg-white group-hover:bg-menu_b_gradient  absolute bottom-0"></div>
            </div>
            <div className=" flex flex-col h-full  justify-start  items-center bg-white group  ">
                <a >About</a>
                <div className="h-[4px] w-[51px] bg-white group-hover:bg-menu_b_gradient  absolute bottom-0"></div>
            </div>
            <div className=" flex flex-col h-full  justify-start  items-center bg-white group  ">
                <a >Contact</a>
                <div className="h-[4px] w-[51px] bg-white group-hover:bg-menu_b_gradient  absolute bottom-0"></div>
            </div>
            <div className=" flex flex-col h-full  justify-start  items-center bg-white group  ">
                <a >Blog</a>
                <div className="h-[4px] w-[51px] bg-white group-hover:bg-menu_b_gradient  absolute bottom-0"></div>
            </div>
            <div className=" flex flex-col h-full  justify-start  items-center bg-white group  ">
                <a >Careers</a>
                <div className="h-[4px] w-[51px] bg-white group-hover:bg-menu_b_gradient  absolute bottom-0"></div>
            </div>


        </div>
        <RequestButton />


    </div>);
}
export  default  Menu;

