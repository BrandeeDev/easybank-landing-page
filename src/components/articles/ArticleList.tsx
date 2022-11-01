import Article from "./Article";

const articles = [
    {
        id: 1,
        image: "image-currency.jpg",
        author: "By Claire Robinson",
        title: "Receive money in any currency with no fees",
        content: "The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single …",
        isOnTop: true,

    },

    {
        id: 2,
        image: "image-restaurant.jpg",
        author: "By Wilson Hutton",
        title: "Treat yourself without worrying about money",
        content: "Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …",
        isOnTop: true,

    },

    {
        id: 3,
        image: "image-plane.jpg",
        author: "By Wilson Hutton",
        title: "Take your Easybank card wherever you go",
        content: "We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you …",
        isOnTop: false,

    },

    {
        id: 4,
        image: "image-confetti.jpg",
        author: "By Claire Robinson",
        title: "Our invite-only Beta accounts are now live!",
        content: "After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site ...",
        isOnTop: false,

    },


];
const ArticleList = () => {

    return (<div className="py-[88px] px-6 flex flex-col justify-start items-center lg:items-start lg:px-[165px] lg:py-[80px] ">
        <h3 className="font-public not-italic text-[32px] leading-[38px] text-center tracking-[-0.571429px] text-[#2D314D] lg:text-[40px] lg:leading-[64px) lg:tracking-[-0.714286px]">Latest
            Articles</h3>
        <ul className="mt-[31px] lg:mt-[40px] w-full  flex flex-col justify-start items-end gap-y-6 list-none lg:w-full lg:flex-row lg:justify-between lg:gap-x-[30px] lg:items-start ">
            {articles.map(a => <li key={a.id}><Article image={a.image} author={a.author} title={a.title}
                                                       content={a.content} isOnTop={a.isOnTop}/></li>)}
        </ul>


    </div>);
}
export default ArticleList;
