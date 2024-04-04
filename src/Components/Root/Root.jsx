import { Outlet } from 'react-router-dom';

const Root = () => {
    return (
        <div className='max-w-[95%] md:max-w-[90%] lg:max-w-[85%] mx-auto'>
            <Outlet />
        </div>
    );
};

export default Root;