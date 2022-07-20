import { Navbar, Sidebar } from "../components";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="flex h-full">
        <div className="flex-[0.3]">
          <Sidebar />
        </div>
      </div>
    </>
  )
}

export default Home;