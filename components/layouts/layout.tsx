import Navbar from "@/components/navbar/Navbar";
import '../../styles/globals.css'
import Footer from "@/components/footer/Footer";

export default function Layout({children}: any) {
  return (
    <div className={"flex flex-col h-[100vh] w-screen"}>
      <Navbar/>
      <main className="h-full overflow-auto">{children}</main>
      <Footer/>
    </div>
  )
}