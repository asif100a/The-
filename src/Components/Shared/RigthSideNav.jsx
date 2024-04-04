import { FaGoogle, FaGithub, FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import qZonePhoto1 from '../../assets/qZone1.png';
import qZonePhoto2 from '../../assets/qZone2.png';
import qZonePhoto3 from '../../assets/qZone3.png';

const RigthSideNav = () => {
    return (
        <div>
            <div>
                <h2 className="text-2xl font-semibold">Login With</h2>
                <div className="mt-4 space-y-3">
                    <button className="flex gap-2 w-full justify-center items-center text-base px-8 py-1 text-blue-500 border-2 border-blue-500 rounded-md">
                        <FaGoogle />
                        Login with google
                    </button>

                    <button className="flex gap-2 w-full justify-center items-center text-base px-8 py-1 text-[#161616] border-2 border-[#161616] rounded-md">
                        <FaGithub />
                        Login with google
                    </button>
                </div>

                <h2 className="text-2xl font-semibold mt-12">Find Us On</h2>
                <div className="border-2 rounded-md mt-3">
                    <a href="" className="flex justify-start items-center gap-3 py-4 ml-6">
                        <span className="p-2 bg-gray-100 rounded-full"><FaFacebookF /></span>
                        <span className="text-lg font-semibold opacity-80">Facebook</span>
                    </a>
                    <hr className="h-2" />
                    <a href="" className="flex justify-start items-center gap-3 py-4 ml-6">
                        <span className="p-2 bg-gray-100 rounded-full"><FaTwitter className="text-[#58A7DE]" /></span>
                        <span className="text-lg font-semibold opacity-80">Twitter</span>
                    </a>
                    <hr className="h-2" />
                    <a href="" className="flex justify-start items-center gap-3 py-4 ml-6">
                        <span className="p-2 bg-gray-100 rounded-full"><FaInstagram className="text-[#D82D7E]" /></span>
                        <span className="text-lg font-semibold opacity-80">Instagram</span>
                    </a>
                </div>
                <div className="bg-gray-100 mt-12 py-6 rounded-sm">
                    <h2 className="text-2xl font-semibold mb-3 ml-6">Q-Zone</h2>
                    <div className="flex flex-col items-center gap-3">
                        <img src={qZonePhoto1} alt="" />
                        <img src={qZonePhoto2} alt="" />
                        <img src={qZonePhoto3} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RigthSideNav;