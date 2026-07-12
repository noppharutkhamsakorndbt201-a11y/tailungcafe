export default function MenuCard({ name, price, desc, tag }) {
  return (
    <div
      className="p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
      style={{ background: "#FFF8F2", border: "1px solid #C68A52", color: "#3E2430" }}
    >
      <div>
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-bold" style={{ color: "#3E2430" }}>{name}</h3>
          <span className={`text-xs px-2.5 py-1 rounded-full font-semibold`}
            style={tag === 'Hot'
              ? { background: "#C68A52", color: "#FFF8F2" }
              : { background: "#7D5438", color: "#FFF8F2" }
            }
          >
            {tag}
          </span>
        </div>
        <p className="text-sm" style={{ color: "#7D5438" }}>{desc}</p>
      </div>
      <div className="mt-4 pt-4 flex justify-between items-center" style={{ borderTop: "1px solid #C68A52" }}>
        <span className="text-xs" style={{ color: "#C68A52" }}>ราคา</span>
        <span className="text-lg font-bold" style={{ color: "#3E2430" }}>{price} ฿</span>
      </div>
    </div>
  );
}
