import { useState, useEffect } from "react";
import TestimonialCard from "./TestimonialCard";

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
  const [current, setCurrent] = usseState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="relative mx-auto overflow-hidden flex item-center justify-center"
      style={{ width: "1200px", height: "500px" }}
    >
      {testimonials.map((item, index) => (
        <div
          key={index}
          className={`absolute transition-all duration-700 ease-in-out ${
            index === current
              ? "translate-x-0 opacity-100"
              : "translate-x-full opacity-0"
          }`}
        >
          <TestimonialCard {...item} />
        </div>
      ))}
    </section>
  );
}