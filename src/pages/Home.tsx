import { Navbar, Sidebar } from "../components";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="flex h-full w-full">
        <div className="flex-[0.18]">
          <Sidebar />
        </div>
      </div>
    </>
  )
}

export default Home;