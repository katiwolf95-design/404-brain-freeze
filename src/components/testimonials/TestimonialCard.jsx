export default function TestimonialCard({ text, name, image }) {
  return (
    <div
      className="bg-white rounded-2xl shadow-md p-6 flex items-center gap-6"
      style={{ width: "615px", height: "250px" }}
    >
      <img
        src={image}
        alt={name}
        className="w-20 h-20 rounded-full object-cover"
      />

      <div>
        <div className="text-yellow-400 mb-2">★★★★★</div>
        <p className="text-gray-700 mb-2">{text}</p>
        <span className="font-semibold text-gray-900">
          – { name }
        </span>
      </div>
    </div>
  );
}
