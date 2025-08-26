import React from "react";
import { Card } from "@/components/ui/card";

/*
USPSection — aligned with site standard
- Section bg: bg-section-3 (after Programs section-2)
- WaveTop: #e9f2ef (from previous)
- WaveBottom: #eee7fa (into next section-4)
- Clean cards, neutral typography, subtle brand tints
*/

const WaveTop = ({ fill = "#e9f2ef" }) => (
  <div className="absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180">
    <svg className="relative block w-full h-[60px]" viewBox="0 0 1440 320" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fill={fill}
        d="M0,256L48,240C96,224,192,192,288,170.7C384,149,480,139,576,154.7C672,171,768,213,864,208C960,203,1056,149,1152,117.3C1248,85,1344,75,1392,69.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
      />
    </svg>
  </div>
);

const WaveBottom = ({ fill = "#eee7fa" }) => (
  <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
    <svg className="relative block w-full h-[60px]" viewBox="0 0 1440 320" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fill={fill}
        d="M0,256L48,240C96,224,192,192,288,170.7C384,149,480,139,576,154.7C672,171,768,213,864,208C960,203,1056,149,1152,117.3C1248,85,1344,75,1392,69.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
      />
    </svg>
  </div>
);

// Gradient mapper -> your existing utilities
const gradientClass = (g) =>
  g === "gradient-swing" ? "bg-gradient-primary"
  : g === "gradient-slide" ? "bg-gradient-secondary"
  : g === "gradient-seesaw" ? "bg-gradient-accent"
  : "bg-gradient-primary";

const USPSection = () => {
  const stats = [
    { number: "11", label: "Preschools", icon: "🏫", gradient: "gradient-slide" },
    { number: "6",  label: "Cities",     icon: "🏙️", gradient: "gradient-swing" },
    { number: "4",  label: "States",     icon: "🗺️", gradient: "gradient-seesaw" },
  ];

  const advantages = [
    {
      title: "Well-Researched Curriculum",
      description: "An engaging, scientifically designed curriculum by reputed academicians, blending innovation with foundational values.",
      icon: "📚",
      gradient: "gradient-slide",
    },
    {
      title: "Award-Winning Preschool Program",
      description: "Selected among India's top preschool-cum-daycare centres by Education Today for two consecutive years.",
      icon: "🏆",
      gradient: "gradient-swing",
    },
    {
      title: "Experienced Academicians",
      description: "Teachers and facilitators specializing in early childhood education with decades of combined experience.",
      icon: "👩‍🏫",
      gradient: "gradient-seesaw",
    },
    {
      title: "Holistic Development",
      description: "A comprehensive approach nurturing physical, emotional, intellectual, and cultural growth through the 4Q model.",
      icon: "🌱",
      gradient: "gradient-sandbox",
    },
  ];

  return (
    <section className="py-14 md:py-16 bg-section-3 relative overflow-hidden">
      <WaveTop fill="#e9f2ef" />

      {/* soft shapes */}
      <div className="absolute top-20 right-8 w-10 h-10 rounded-2xl opacity-25" style={{ backgroundColor: "hsl(var(--premium-yellow) / 0.2)" }} />
      <div className="absolute bottom-20 left-12 w-8 h-8 rounded-full opacity-25" style={{ backgroundColor: "hsl(var(--premium-teal) / 0.2)" }} />
      <div className="absolute top-1/2 left-8 w-6 h-6 rounded-2xl opacity-20" style={{ backgroundColor: "hsl(var(--premium-pink) / 0.2)" }} />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-10 md:mb-12">
          <div
            className="px-4 py-2 rounded-full inline-block mb-4 text-white"
            style={{ background: "linear-gradient(135deg, hsl(var(--premium-orange)), hsl(var(--premium-pink)))" }}
          >
            🌟 Our Impact
          </div>

          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-neutral-800 leading-tight mb-3">
            Where Vision Meets Experience
          </h2>

          <p className="text-neutral-700 text-base md:text-lg leading-relaxed">
            Spreading our wings across India to enable a smarter generation of children.
          </p>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-12 max-w-4xl mx-auto">
          {stats.map((stat, i) => (
            <Card key={i} className="text-center rounded-2xl p-6 shadow-sm border border-[hsl(var(--neutral-100))] bg-white hover:shadow-md transition-all hover:-translate-y-[2px]">
              <div className={`${gradientClass(stat.gradient)} w-16 h-16 md:w-20 md:h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 text-white`}>
                <span className="text-2xl md:text-3xl">{stat.icon}</span>
              </div>
              <div className="text-4xl md:text-5xl font-bold mb-1.5 text-neutral-800">{stat.number}</div>
              <div className="text-base md:text-lg font-semibold" style={{ color: "hsl(var(--premium-purple))" }}>
                {stat.label}
              </div>
            </Card>
          ))}
        </div>

        {/* Advantages */}
        <div className="text-center mb-8">
          <h3 className="text-2xl md:text-3xl font-bold mb-2" style={{ color: "hsl(var(--premium-teal))" }}>
            The Basil Woods Advantage
          </h3>
          <p className="text-neutral-700 text-base md:text-lg">
            Delivering excellence in early childhood education for over 15 years.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {advantages.map((adv, i) => (
            <Card
              key={i}
              className="flex gap-4 rounded-2xl p-6 shadow-sm border border-[hsl(var(--neutral-100))] bg-white hover:shadow-md transition-all hover:-translate-y-[2px]"
            >
              <div className={`${gradientClass(adv.gradient)} w-14 h-14 md:w-16 md:h-16 rounded-2xl flex items-center justify-center flex-shrink-0 text-white`}>
                <span className="text-xl md:text-2xl">{adv.icon}</span>
              </div>
              <div>
                <h4 className="text-lg md:text-xl font-bold text-neutral-800 mb-2">{adv.title}</h4>
                <p className="text-neutral-700 leading-relaxed text-sm md:text-base">{adv.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>

      <WaveBottom fill="#eee7fa" />
    </section>
  );
};

export default USPSection;
