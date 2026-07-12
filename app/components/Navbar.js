'use client';

import Image from 'next/image';

export default function Navbar() {
  return (
    <nav style={{ background: "#7D5438", borderBottom: "1px solid #C68A52" }} className="sticky top-0 z-50 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        
        {/* ส่วนโลโก้รูปภาพ + ชื่อร้าน */}
        <div className="flex items-center gap-3">
          <img 
            src="https://i.ibb.co/6JTfxTYS/Black-and-White-Circle-Icon-Business-Logo-9.png" 
            alt="Tailung Cafe Logo" 
            className="w-10 h-10 rounded-full object-cover"
          />
          <span className="text-xl font-bold tracking-wider" style={{ color: "#FFF8F2" }}>
            TAILUNG CAFE
          </span>
        </div>

        {/* เมนู 3 ลิงก์ */}
        <div className="flex gap-6 text-sm font-medium">
          <a href="#menu" className="transition-colors" style={{ color: "#F5DEC0" }} onMouseEnter={e => e.target.style.color="#FFF8F2"} onMouseLeave={e => e.target.style.color="#F5DEC0"}>เมนูเครื่องดื่ม</a>
          <a href="#features" className="transition-colors" style={{ color: "#F5DEC0" }} onMouseEnter={e => e.target.style.color="#FFF8F2"} onMouseLeave={e => e.target.style.color="#F5DEC0"}>จุดเด่นของร้าน</a>
          <a href="#contact" className="transition-colors" style={{ color: "#F5DEC0" }} onMouseEnter={e => e.target.style.color="#FFF8F2"} onMouseLeave={e => e.target.style.color="#F5DEC0"}>ติดต่อเรา</a>
        </div>
        
      </div>
    </nav>
  );
}
