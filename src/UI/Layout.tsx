import {PropsWithChildren} from "react";

const Layout =(props:PropsWithChildren)=>{
    return(<section className="min-h-screen w-screen overflow-hidden bg-[#FAFAFA] relative">
        {props.children}

    </section>);
};
export default  Layout;