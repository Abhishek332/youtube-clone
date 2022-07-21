import { Navbar, Sidebar, VideoSection } from "../components";
import { useState } from 'react';

const Home = () => {
  const [active, setActive] = useState<boolean>(true);

  return (
    <div className="h-full w-full">
      <Navbar active={active} setActive={setActive} />
      <div className="flex h-full w-full relative">
        <div className={`absolute h-full w-full bg-zinc-900 opacity-60 z-20 ${active ? 'block' : 'hidden'}`}>

        </div>
        <div className={`lg:w-56 ${!active && 'lg:w-[4.3725rem]'} overflow-hidden duration-300`}>
          <Sidebar />
        </div>
        <VideoSection />
      </div>
    </div>
  )
}

export default Home;