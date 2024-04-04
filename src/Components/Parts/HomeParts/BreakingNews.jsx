import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const BreakingNews = () => {
    return (
        <div className="flex gap-6 bg-[#F3F3F3] p-3 mt-6 mb-3">
            <button className="btn bg-[#D72050] text-lg text-white">Breaking</button>
            <Marquee pauseOnHover={true} speed={60}>
                <Link>Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</Link>
            </Marquee>
        </div>
    );
};

export default BreakingNews;