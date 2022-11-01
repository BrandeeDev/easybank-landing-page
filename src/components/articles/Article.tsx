const Article = (props: { image: string, author: string, title: string, content: string, isOnTop: boolean }) => {
    return (<div
        className={`w-full bg-white rounded-[5px] flex flex-col justify-start items-center gap-y-[25px] ${!props.isOnTop && "ml-[11px] lg:ml-auto"} lg:h-[395px] `}>
        <img src={require(`../../images/${props.image}`)} alt="" className=" box-content w-full h-[200px] "/>
        <div className={`flex flex-col justify-start items-start pb-6 gap-y-2 ${props.isOnTop? "px-[31px] ":" pl-[30px] pr-[29px]"} lg:px-6 `}>
            <h4 className="font-public not-italic font-normal text-[10px] leading-[18px] tracking-[-0.15625px] text-[#9597A5]">{props.author}</h4>
            <h3 className="font-public not-italic font-light text-base leading-[20px] tracking-[-0.285714px] text-[#2D314D] hover:text-[#30C88F]">{props.title}</h3>
            <p className="font-public font-normal text-[13px] leading-[18px] tracking-[-0.203125px] text-[#9597A5]">{props.content}</p>

        </div>

    </div>)
}
export default Article;
