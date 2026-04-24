"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";

const metrics = [
  { label: "Protein (tons/year)", target: "30+", icon: "🥩", href: "#circular-economy" },
  { label: "Wastewater Treated", target: "100%", icon: "💧", href: "#wolffia" },
  { label: "Jobs Created", target: "50+", icon: "👥", href: "#impact" },
  { label: "Institutions Mapped", target: "40+", icon: "🏛️", href: "/fortis-os" },
  { label: "Embassies Mapped", target: "30+", icon: "🏦", href: "/fortis-os" },
  { label: "FORTIS OS Pages", target: "181", icon: "💻", href: "/fortis-os" },
];

function AnimatedCounter({ target }: { target: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!inView) return;

    const numTarget = parseInt(target.replace(/\D/g, "")) || 100;
    const duration = 2000;
    const steps = 60;
    const increment = numTarget / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= numTarget) {
        setCount(numTarget);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [inView, target]);

  const suffix = target.replace(/\d/g, "");
  return <span ref={ref}>{count}{suffix}</span>;
}

export default function ImpactDashboard() {
  return (
    <section className="bg-fortis-gold py-12">
      <div className="container-s">
        <h2 className="text-center text-2xl font-bold text-fortis-green mb-8">
          Our Impact
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {metrics.map((metric) => (
            <Link
              key={metric.label}
              href={metric.href}
              className="text-center group"
            >
              <div className="text-4xl mb-3">{metric.icon}</div>
              <div className="text-4xl font-bold text-fortis-green group-hover:text-white transition-colors">
                <AnimatedCounter target={metric.target} />
              </div>
              <div className="text-sm text-fortis-green font-medium group-hover:text-white transition-colors">
                {metric.label}
              </div>
            </Link>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link
            href="/about"
            className="inline-flex items-center text-fortis-green font-semibold hover:text-white transition-colors"
          >
            Download Impact Report →
          </Link>
        </div>
      </div>
    </section>
  );
}