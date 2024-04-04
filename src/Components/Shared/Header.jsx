import logo from '../../assets/logo.png';
import moment from 'moment';

const Header = () => {
    return (
        <div className='flex flex-col justify-center items-center text-center gap-3 mt-8'>
            <img src={logo} alt="" />
            <p className="text-lg mt-4">Journalism Without Fear or Favour</p>
            <p className="text-lg">{moment().format("dddd, MMMM D, YYYY")}</p>
        </div>
    );
};

export default Header;