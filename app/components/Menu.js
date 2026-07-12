import MenuCard from "./MenuCard";

const menuData = [
  { id: 1, name: "Espresso",      price: 55, tag: "Hot",   desc: "เข้มข้น กลิ่นหอม" },
  { id: 2, name: "Latte",         price: 65, tag: "Hot",   desc: "นุ่มละมุน นมสด" },
  { id: 3, name: "Cappuccino",    price: 65, tag: "Hot",   desc: "ฟองนมหนานุ่ม" },
  { id: 4, name: "Iced Americano",price: 60, tag: "Cold",  desc: "สดชื่น ไม่ใส่นม" },
  { id: 5, name: "Matcha Latte",  price: 75, tag: "Cold",  desc: "ชาเขียวญี่ปุ่นแท้" },
  { id: 6, name: "Cocoa",         price: 60, tag: "Cold",  desc: "หวานมัน เด็กชอบ" },
];

export default function Menu() {
  return (
    <section id="menu" className="max-w-6xl mx-auto px-4 py-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-stone-950 mb-2">Our Menu</h2>
        <div className="h-1 w-12 bg-amber-600 mx-auto rounded"></div>
      </div>

      {/* วนลูปสร้าง MenuCard โดยใช้ .map() และระบุ key เป็น id */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {menuData.map((item) => (
          <MenuCard 
            key={item.id} 
            name={item.name} 
            price={item.price} 
            desc={item.desc} 
            tag={item.tag} 
          />
        ))}
      </div>
    </section>
  );
}