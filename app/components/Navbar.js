import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-stone-100">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        
        {/* ส่วนโลโก้รูปภาพ + ชื่อร้าน */}
        <div className="flex items-center gap-3">
          <img 
            src="https://i.ibb.co/6JTfxTYS/Black-and-White-Circle-Icon-Business-Logo-9.png" 
            alt="Tailung Cafe Logo" 
            className="w-10 h-10 rounded-full object-cover"
          />
          <span className="text-xl font-bold tracking-wider text-amber-800">
            TAILUNG CAFE
          </span>
        </div>

        {/* เมนู 3 ลิงก์ */}
        <div className="flex gap-6 text-sm font-medium text-stone-600">
          <a href="#menu" className="hover:text-amber-700 transition-colors">เมนูเครื่องดื่ม</a>
          <a href="#features" className="hover:text-amber-700 transition-colors">จุดเด่นของร้าน</a>
          <a href="#contact" className="hover:text-amber-700 transition-colors">ติดต่อเรา</a>
        </div>
        
      </div>
    </nav>
  );
}