import { useState, useEffect } from "react";
import TestimonialCard from "./TestimonialCard";
import SectionTitle from "../ui/SectionTitle";

const testimonials = [
  {
    text: "Bestes Eis der Stadt – man schmeckt die Qualität.",
    name: "Maria L.",
    image: "/images/maria.jpg",
  },
  {
    text: "Endlich eine Gelateria, bei der man merkt, dass hier mit echten Zutaten gearbeitet wird.",
    name: "Luca R.",
    image: "/images/luca.jpg",
  },
  {
    text: "Wir kommen jeden Sonntag mit der ganzen Familie vorbei. Die Atmosphäre ist herzlich, das Eis unglaublich cremig – einfach ein Stück Italien.",
    name: "Sophie M.",
    image: "/images/sophie.jpg",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="mx-auto"
      style={{ width: "1200px", height: "500px" }}
    >
      <SectionTitle title={"Was unsere Kunden sagen"}/>

      <div className="relative overflow-hidden flex items-center justify-center h-75 mt-4">
        {testimonials.map((item, index) => {
          
          const position =
            index === current
              ? "center"
              : index === (current - 1 + testimonials.length) % testimonials.length
              ? "left"
              : index === (current + 1) % testimonials.length
              ? "right"
              : "hidden";

          return (
            <div
              key={index}
              className={`
                absolute transition-all duration-700

                ${position === "center" && "z-20 scale-100"}
                ${position === "left" && "z-10 -translate-x-40 scale-90 opacity-60"}
                ${position === "right" && "z-10 translate-x-40 scale-90 opacity-60"}
                ${position === "hidden" && "opacity-0"}
              `}
            >
              <TestimonialCard {...item} />
            </div>
          );
        })}
      </div>

      {/* DOTS */}
      <div className="flex justify-center gap-3 mt-6">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition-all
              ${index === current ? "bg-[#CC1E36]" : "bg-gray-300"}
            `}
          />
        ))}
      </div>
    </section>
  );
}