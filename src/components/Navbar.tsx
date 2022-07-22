import { MenuIcon, SearchIcon, MicIcon, VideoCallOutlinedIcon, NotificationsOutlinedIcon, Avatar } from '../icons';

const Navbar: React.FC<NavbarProps> = ({ active, setActive }) => {
    return (
        <div className="h-14 p-2 lg:px-5 w-full bg-white flex items-center justify-between sticky top-0 left-0 border-b-[0.2px] border-gray-100 z-50">
            <div className="flex items-center h-full">
                <MenuIcon className="cursor-pointer" onClick={() => setActive(!active)} />
                <img src="https://www.citypng.com/public/uploads/preview/-516095138081bnlgvzegi.png" alt="" className="h-full w-auto" />
            </div>
            <div className="items-center w-[95%] md:w-[45%] absolute bg-white lg:relative z-20 hidden lg:flex">
                <div className="flex w-full h-10 rounded-sm border-[0.1px] border-gray-300 relative">
                    <input type="text" className="h-full flex-[0.9] border-none bg-white px-3 text-gray-400 outline-none hidden md:block" placeholder="Search" />
                    <div className="absolute right-0 flex items-center justify-center flex-[0.1] h-full text-gray-400 border-l-[0.1px] md:border-gray-300 px-2 cursor-pointer rounded-r-sm bg-gray-100">
                        <SearchIcon />
                    </div>
                </div>
                <div className="mx-3 cursor-pointer p-2 rounded-full bg-gray-100 hidden lg:block">
                    <MicIcon />
                </div>
            </div>
            <div className="flex items-center">
                <SearchIcon className="lg:hidden" />
                {
                    window.innerWidth > 540 && <>
                        <VideoCallOutlinedIcon className="mx-2 cursor-pointer" />
                        <NotificationsOutlinedIcon className="mx-2 cursor-pointer" />
                    </>
                }

                <Avatar className="mx-2 cursor-pointer h-[85%]" />
            </div>
        </div>
    )
}

export default Navbar

interface NavbarProps {
    active: boolean;
    setActive: React.Dispatch<React.SetStateAction<boolean>>;
}