import { useContext } from "react";
import BreakingNews from "../Parts/HomeParts/BreakingNews";
import Header from "../Shared/Header";
import LeftSideNav from "../Shared/LeftSideNav";
import Navber from "../Shared/Navber";
import RigthSideNav from "../Shared/RigthSideNav";
import { AuthContext } from "../AuthProvider/AuthProvider";
import AllNews from "../Parts/HomeParts/AllNews";

const Home = () => {
    const {allNews} = useContext(AuthContext);
    
    return (
        <div className="poppins">
            <Header />
            <BreakingNews />
            <Navber />
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mt-8">
                <div className="">
                    <LeftSideNav />
                </div>
                <div className="lg:col-span-2 space-y-6">
                    {
                        allNews.map(news => <AllNews key={news._id} news={news}></AllNews>)
                    }
                </div>
                <div>
                    <RigthSideNav />
                </div>
            </div>
        </div>
    );
};

export default Home;