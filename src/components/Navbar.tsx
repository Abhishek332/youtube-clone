import { MenuIcon, SearchIcon, MicIcon, VideoCallOutlinedIcon, NotificationsOutlinedIcon, Avatar } from '../icons';
import { Link } from 'react-router-dom';
// import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
    return (
        <div className="h-14 px-5 w-full bg-white flex items-center justify-between sticky t-0 l-0">
            <div className="flex items-center h-full">
                <MenuIcon className="cursor-pointer" />
                <div className="h-full relative w-32 flex items-center">
                    <img src="https://www.citypng.com/public/uploads/preview/-516095138081bnlgvzegi.png" alt="" className="h-[80%] absolute" />
                </div>
            </div>
            <div className="flex items-center md:w-[45%] ml-24">
                <div className="flex w-full h-10 rounded-sm md:border-[0.1px] lg:border-gray-300">
                    <input type="text" className="h-full flex-[0.9] border-none bg-transparent px-3 text-gray-400 outline-none hidden md:block" placeholder="Search" />
                    <div className="flex items-center justify-center flex-[0.1] h-full text-gray-400 border-l-[0.1px] md:border-gray-300 px-2 cursor-pointer rounded-r-sm md:bg-gray-100">
                        <SearchIcon />
                    </div>
                </div>
                <div className="mx-3 cursor-pointer p-2 rounded-full bg-gray-100 hidden lg:block">
                    <MicIcon />
                </div>
            </div>
            <div className="flex items-center">
                <VideoCallOutlinedIcon className="mx-2 cursor-pointer !hidden lg:block" />
                <NotificationsOutlinedIcon className="mx-2 cursor-pointer !hidden lg:block" />
                <Avatar className="mx-2 cursor-pointer text-[0.625rem]" />
            </div>
        </div>
    )
}

export default Navbar