import { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { FaRegCalendarCheck } from "react-icons/fa6";

const LeftSideNav = () => {
    const { allNews } = useContext(AuthContext);
    // console.log(allNews[0].author.published_date.split(" ")[0]);

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('categories.json')
            .then(res => res.json())
            .then(data => setCategories(data));
    }, [])

    return (
        <div>
            <h2 className="text-2xl font-semibold">All Categories</h2>

            <div className="mt-6">
                {
                    categories.map(category => <NavLink
                        key={category.id}
                        to={`category/${category.id}`}
                        className="btn btn-ghost w-full flex-wrap justify-start pl-6 h-16 min-h-16 text-2xl font-semibold text-black opacity-60"
                    >{category.name}</NavLink>)
                }
            </div>

            <div className="space-y-6">
                {
                    allNews.map((news, i) => <>
                        <div key={i} className="max-w-xs rounded-md dark:bg-gray-50 dark:text-gray-800">
                            <img src={news.image_url} alt="" className="object-cover object-center w-full rounded-t-md h-52 dark:bg-gray-500" />
                            <div className="flex flex-col justify-between space-y-8 w-full">
                                <div className="space-y-2">
                                    <h2 className="text-xl font-semibold tracking-wide mt-3">{news.title}</h2>
                                </div>
                                <div className="flex justify-between">
                                    <p>By: {news.author.name}</p>
                                    <p className="flex gap-2">
                                        <span><FaRegCalendarCheck className="w-6 h-6" /></span>
                                        <span>{news.author.published_date?.split(" ")[0]}</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </>
                    )
                }
            </div>
        </div>
    );
};

export default LeftSideNav;