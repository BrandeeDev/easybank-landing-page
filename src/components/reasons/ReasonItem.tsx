const ReasonItem = (props: { image: string, title: string, content: string }) => {
    return (<div className="flex flex-col justify-start items-center lg:items-start  ">
        <img src={require(`../../images/${props.image}`)} alt="" className="w-[72px] h-[72px]"/>
        <h3 className="mt-6 lg:mt-[40px] font-public font-light text-[20px] leading-7 tracking-[-0.36px] text-center text-[#2D314D] lg:text-2xl leading-7 tracking-[-0.428571px] ">{props.title}</h3>
        <p className="mt-4 lg:mt-[26px] font-public not-italic text-[15px] font-normal leading-[25px] text-center tracking-[-0.234375px] text-[#9597A5] lg:w-[255px] lg:text-left  lg:text-base lg:leading-[26px]  lg:tracking-[-0.25px]">{props.content}</p>

    </div>);

}
export default ReasonItem;