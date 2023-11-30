import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import '../../styles/globals.css'

export default function Layout({children}: any) {
  return (
    <div className={"flex flex-col h-[100vh] w-screen"}>
      <Navbar/>
      <main className="h-full overflow-auto">{children}</main>
      <Footer/>
    </div>
  )
}