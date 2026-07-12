// มีแค่ import และเรียง component ตามเงื่อนไข ห้ามยัดโค้ดรวมกัน
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Menu from "./components/Menu";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen font-sans scroll-smooth" style={{ background: "#FFF8F2", color: "#3E2430" }}>
      <Navbar />
      <Hero />
      <Menu />
      <Footer />
    </div>
  );
}