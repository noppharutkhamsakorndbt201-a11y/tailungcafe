// มีแค่ import และเรียง component ตามเงื่อนไข ห้ามยัดโค้ดรวมกัน
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Menu from "./components/Menu";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-amber-50/30 text-stone-800 font-sans scroll-smooth">
      <Navbar />
      <Hero />
      <Menu />
      <Footer />
    </div>
  );
}