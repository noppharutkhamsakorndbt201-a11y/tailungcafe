'use client';

export default function Hero() {
  return (
    <header className="relative text-white py-24 md:py-32 overflow-hidden h-[60vh] md:h-[70vh] flex items-center justify-center" style={{ background: "#3E2430" }}>
      
      {/* 1. วิดีโอพื้นหลัง */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        {/* เรียกใช้ไฟล์วิดีโอจากโฟลเดอร์ public */}
        <source src="/hero-bg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* 2. Overlay แผ่นสีดำโปร่งแสงซ้อนทับ เพื่อให้ตัวอักษรอ่านง่ายขึ้น */}
      <div className="absolute inset-0 z-10" style={{ background: "rgba(62,36,48,0.60)" }}></div>
      
      {/* 3. ส่วนเนื้อหาข้อความ */}
      <div className="relative z-20 max-w-4xl mx-auto px-4 text-center space-y-6">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight drop-shadow-md" style={{ color: "#FFF8F2" }}>
          Tailung Cafe
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed drop-shadow" style={{ color: "#F5DEC0" }}>
          สัมผัสความอบอุ่นในทุกจิบ กับกาแฟระดับพรีเมียมและบรรยากาศที่ทำให้คุณรู้สึกเหมือนอยู่บ้าน
        </p>
        <div className="pt-4">
          <a 
            href="#menu" 
            className="inline-block font-medium px-8 py-3 rounded-full shadow-lg transition-all transform hover:-translate-y-0.5"
            style={{ background: "#C68A52", color: "#FFF8F2" }}
            onMouseEnter={e => e.currentTarget.style.background = "#7D5438"}
            onMouseLeave={e => e.currentTarget.style.background = "#C68A52"}
          >
            ดูเมนูของเรา
          </a>
        </div>
      </div>

    </header>
  );
}
