import { Navbar, Sidebar } from "../components";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="flex h-full w-full">
        <div className="lg:w-44">
          <Sidebar />
        </div>
      </div>
    </>
  )
}

export default Home;