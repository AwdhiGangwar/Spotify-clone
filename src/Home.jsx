import Sidebar from "./components/Sidebar"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Mainbar from "./components/Mainbar"
function Home() {


  return (
    <>
    <div>
    <Navbar />
    </div>
      <div className=" flex flex-col w-full h-full">
        <div className="flex ">
      <Sidebar />
      <Mainbar />
        </div>
      <Footer />
      </div>
    </>
  )
}

export default Home
