import ReasonItem from "./ReasonItem";

const reasons = [
    {
        id: 1,
        image: "icon-online.svg",
        title: "Online Banking",
        content: "Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world."
    },
    {
        id: 2,
        image: "icon-budgeting.svg",
        title: "Simple Budgeting",
        content: "See exactly where your money goes each month. Receive notifications when you’re close to your hitting limits."
    },
    {
        id: 3,
        image: "icon-onboarding.svg",
        title: "Fast Onboarding",
        content: "We don’t do branches. Open your account in minutes online and start taking control of your finances right away."
    },
    {
        id: 4,
        image: "icon-api.svg",
        title: "Open API",
        content: "Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.."
    },
];
const ReasonsList = () => {
    return (<div
        className="flex flex-col justify-start items-center py-[64px] px-6 bg-[#F4F5F7] overflow-hidden lg:pt-[96px] lg:pb-[94px] lg:px-[165px] lg:items-start">
        <h3 className="font-public not-italic font-light text-[32px]  leading-[38px] text-center tracking-[-0.571429px] text-[#2D314D] lg:text-[40px] lg:leading-[64px] lg:tracking-[-0.714286px] ">Why
            choose Easybank?</h3>
        <p className="mt-[14px] font-public not-italic font-normal text-[15px] leading-[25px] text-center tracking-[-0.234375px] text-[#9597A5] lg:text-left lg:w-[635px] lg:text-lg lg:leading-7 lg:tracking-[-0.28125px] lg:mt-4">We
            leverage Open Banking to turn your bank account into your financial hub. Control your finances like never
            before.</p>
        <ul className="mt-[56px] lg:mt-[72px] flex  flex-col justify-start items-center gap-y-8 list-none  lg:w-full lg:flex-row lg:justify-between  ">
            {reasons.map(item => <li key={item.id}><ReasonItem image={item.image} title={item.title}
                                                               content={item.content}/></li>)}

        </ul>

    </div>)


};
export default ReasonsList;
