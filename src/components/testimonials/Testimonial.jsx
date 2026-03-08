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
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [paused]);

  return (
    <section className="mx-auto max-w-[1200px] px-4 mt-24">

      <SectionTitle title="Was unsere Kunden sagen" />

      <div
        className="relative overflow-hidden flex items-center justify-center min-h-[380px] md:min-h-[420px] mt-6"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
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
                absolute flex justify-center transition-all duration-600 ease-in-out
                ${position === "center" && "z-20 scale-105 md:scale-100"}
                ${position === "left" && "hidden md:block z-10 md:-translate-x-60 scale-90 opacity-60"}
                ${position === "right" && "hidden md:block z-10 md:translate-x-60 scale-90 opacity-60"}
                ${position === "hidden" && "opacity-0"}
              `}
            >
              <TestimonialCard {...item} />
            </div>
          );
        })}
      </div>

      <div className="flex justify-center gap-3 mb-12">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === current ? "bg-[#CC1E36]" : "bg-gray-300"
            }`}
          />
        ))}
      </div>

    </section>
  );
}