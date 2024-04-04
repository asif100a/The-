import BreakingNews from "../Parts/HomeParts/BreakingNews";
import Header from "../Shared/Header";
import LeftSideNav from "../Shared/LeftSideNav";
import Navber from "../Shared/Navber";
import RigthSideNav from "../Shared/RigthSideNav";

const Home = () => {
    return (
        <div className="poppins">
            <Header />
            <BreakingNews />
            <Navber />
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mt-8">
                <div className="">
                    <LeftSideNav />
                </div>
                <div className="lg:col-span-2">
                    <h2 className="text-2xl">News comming soon..</h2>
                </div>
                <div>
                    <RigthSideNav />
                </div>
            </div>
        </div>
    );
};

export default Home;