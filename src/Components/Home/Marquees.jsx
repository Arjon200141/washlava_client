import Marquee from "react-fast-marquee";

const Marquees = () => {
    return (
        <div className="px-6 my-12">
            <Marquee>
                <div className="flex gap-40">
                    <img className="h-36" src="https://i.ibb.co.com/jPg5RrFC/1g6a-dscq-140724.jpg" alt="" />
                    <img className="h-36" src="https://i.ibb.co.com/9H6P77mC/41621.jpg" alt="" />
                </div>
            </Marquee>
        </div>
    );
};

export default Marquees;