import { Navbar, Sidebar, VideoSection } from "../components";
import { useState } from 'react';

const Home = () => {
  const [active, setActive] = useState<boolean>(false);

  return (
    <div className="h-full w-full">
      <Navbar active={active} setActive={setActive} />
      <div className="flex h-[calc(100vh-56px)] w-full relative scroll overflow-hidden">
        <div className={`h-full absolute left-0 lg:relative z-20 w-56 ${!active && 'w-[0rem] lg:w-[4.25rem] shadow-none'} shadow-md overflow-hidden duration-300`}>
          <Sidebar setActive={setActive} />
        </div>
        <VideoSection />
      </div>
    </div>
  )
}

export default Home;