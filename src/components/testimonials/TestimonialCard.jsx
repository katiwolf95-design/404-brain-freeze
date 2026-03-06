export default function TestimonialCard({ text, name, image }) {
  return (
    <div
      className="bg-white w-[90%] max-w-[500px] sm:w-[360px] md:w-[615px] h-auto min-h-[200px] mx-auto rounded-xl shadow-xl hover:shadow-2xl transition-shadow p-6"
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
