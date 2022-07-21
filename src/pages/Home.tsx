import { Navbar, Sidebar, VideoSection } from "../components";

const Home = () => {
  return (
    <div className="h-full w-full">
      <Navbar />
      <div className="flex h-full w-full">
        <div className="lg:w-56">
          <Sidebar />
        </div>
        <VideoSection />
      </div>
    </div>
  )
}

export default Home;