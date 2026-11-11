"use client";

import { useEffect, useRef, useState } from "react";
import { IMPACT_NUMBERS } from "@/lib/constants";
import { Heart } from "lucide-react";

function AnimatedCounter({
  target,
  suffix,
  isVisible,
}: {
  target: number;
  suffix: string;
  isVisible: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const duration = 2000;
    const increment = target / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isVisible, target]);

  return (
    <span className="text-4xl font-bold text-white md:text-5xl">
      {count}
      {suffix}
    </span>
  );
}

export function ImpactNumbers() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-gradient-to-r from-primary-700 via-primary-800 to-primary-900"
    >
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: "30px 30px",
        }}
      />

      <div className="container-custom relative z-10 px-4 py-16 md:px-8 md:py-20">
        <div className="mb-10 text-center">
          <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-primary-200">
            <Heart className="h-4 w-4" fill="currentColor" />
            Nosso Impacto
          </span>
          <h2 className="mt-2 text-3xl font-bold text-white md:text-4xl">
            Números que transformam vidas
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {IMPACT_NUMBERS.map((item) => (
            <div key={item.label} className="text-center">
              <AnimatedCounter
                target={item.value}
                suffix={item.suffix}
                isVisible={isVisible}
              />
              <p className="mt-2 text-sm font-medium text-primary-200">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
