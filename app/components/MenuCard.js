export default function MenuCard({ name, price, desc, tag }) {
  return (
    <div className="bg-white p-6 rounded-2xl border border-stone-100 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
      <div>
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-bold text-stone-900">{name}</h3>
          <span className={`text-xs px-2.5 py-1 rounded-full font-semibold ${
            tag === 'Hot' ? 'bg-orange-50 text-orange-700' : 'bg-blue-50 text-blue-700'
          }`}>
            {tag}
          </span>
        </div>
        <p className="text-stone-500 text-sm">{desc}</p>
      </div>
      <div className="mt-4 pt-4 border-t border-stone-50 flex justify-between items-center">
        <span className="text-xs text-stone-400">ราคา</span>
        <span className="text-lg font-bold text-amber-700">{price} ฿</span>
      </div>
    </div>
  );
}