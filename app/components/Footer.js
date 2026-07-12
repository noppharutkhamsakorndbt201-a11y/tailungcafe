const featuresData = [
  {
    id: "f1",
    title: "Premium Beans",
    description: "เมล็ดกาแฟคัดสรรพิเศษ คั่วสดใหม่ทุกสัปดาห์เพื่อรสชาติที่ดีที่สุด",
    image: "https://i.postimg.cc/PrMXfhpq/Black-and-White-Circle-Icon-Business-Logo-(10).png"
  },
  {
    id: "f2",
    title: "Cozy Space",
    description: "บรรยากาศอบอุ่น เหมาะสำหรับนั่งทำงาน อ่านหนังสือ หรือพักผ่อน",
    image: "https://i.postimg.cc/VLFfs1rL/Black-and-White-Circle-Icon-Business-Logo-(11).png"
  },
  {
    id: "f3",
    title: "Bakery Homemade",
    description: "เบเกอรี่อบสดใหม่จากเตาทุกวัน ทานคู่กับกาแฟแก้วโปรด",
    image: "https://i.postimg.cc/wTkqxHyx/Black-and-White-Circle-Icon-Business-Logo-(12).png"
  }
];

export default function Footer() {
  return (
    <>
      {/* Feature Section (3 การ์ดจุดเด่นร้าน) */}
      <section id="features" className="max-w-6xl mx-auto px-4 py-20 border-t border-stone-200">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-stone-950 mb-2">Why Tailung Cafe?</h2>
          <p className="text-stone-500 text-sm">สิ่งที่เราตั้งใจมอบให้คุณในทุกๆ วัน</p>
        </div>

        {/* ใช้ .map วนลูปแสดงผลการ์ดตามเกณฑ์บังคับ */}
        <div className="grid md:grid-cols-3 gap-8">
          {featuresData.map((feat) => (
            <div key={feat.id} className="bg-white p-8 rounded-2xl border border-stone-100 shadow-sm text-center flex flex-col items-center space-y-4">
              {/* เปลี่ยนจาก Emoji เป็นแท็ก <img> สำหรับแสดงรูปภาพโลโก้จุดเด่น */}
              <img 
                src={feat.image} 
                alt={feat.title} 
                className="w-70 h-70 object-cover shadow-sm bg-stone-50"
              />
              <h3 className="text-xl font-bold text-stone-900 pt-2">{feat.title}</h3>
              <p className="text-stone-500 text-sm leading-relaxed">{feat.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer ข้อมูลติดต่อ */}
      <footer id="contact" className="bg-stone-900 text-stone-400 border-t border-stone-800">
        <div className="max-w-6xl mx-auto px-4 py-12 grid md:grid-cols-3 gap-8 text-sm">
          <div className="space-y-3">
            <h4 className="text-white font-semibold text-base tracking-wider">LOCATION</h4>
            <p className="leading-relaxed">
              123 ถนนสุขุมวิท แขวงคลองเตย <br />
              เขตคลองเตย กรุงเทพมหานคร 10110
            </p>
          </div>
          <div className="space-y-3">
            <h4 className="text-white font-semibold text-base tracking-wider">OPENING HOURS</h4>
            <p className="leading-relaxed">
              วันจันทร์ - วันศุกร์: 07:00 น. - 17:00 น. <br />
              วันเสาร์ - วันอาทิตย์: 08:00 น. - 18:00 น.
            </p>
          </div>
          <div className="space-y-3">
            <h4 className="text-white font-semibold text-base tracking-wider">CONTACT</h4>
            <p className="leading-relaxed">
              โทร: 089-XXX-XXXX <br />
              Email: hello@tailungcafe.com <br />
              IG / Facebook: @TailungCafe
            </p>
          </div>
        </div>
        <div className="border-t border-stone-800/60 py-6 text-center text-xs text-stone-600">
          © {new Date().getFullYear()} Tailung Cafe. All rights reserved.
        </div>
      </footer>
    </>
  );
}