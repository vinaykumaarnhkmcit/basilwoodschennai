import React from "react";
import { Card } from "@/components/ui/card";
import mainImage from "../assets/Images/tulsi.webp"; // replace with your actual image path

const WaveTop = ({ fill = "#f6eee7" }) => (
  <div className="absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180">
    <svg className="relative block w-full h-[60px]" viewBox="0 0 1440 320" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fill={fill}
        d="M0,256L48,240C96,224,192,192,288,170.7C384,149,480,139,576,154.7C672,171,768,213,864,208C960,203,1056,149,1152,117.3C1248,85,1344,75,1392,69.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
      />
    </svg>
  </div>
);

const WaveBottom = ({ fill = "#e9f2ef" }) => (
  <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
    <svg className="relative block w-full h-[60px]" viewBox="0 0 1440 320" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fill={fill}
        d="M0,256L48,240C96,224,192,192,288,170.7C384,149,480,139,576,154.7C672,171,768,213,864,208C960,203,1056,149,1152,117.3C1248,85,1344,75,1392,69.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
      />
    </svg>
  </div>
);

const AboutSection = () => {
  const features = [
    { name: "Culture Connect", icon: "🎨" },
    { name: "Nature Learning", icon: "🌱" },
    { name: "Holistic Curriculum", icon: "📚" },
    { name: "Creative Adventures", icon: "🎭" },
  ];

  return (
    <section className="py-14 md:py-16 bg-section-3 relative overflow-hidden">
      {/* waves */}
      <WaveTop fill="#f6eee7" />

      {/* subtle shapes */}
      <div className="absolute top-16 left-8 w-10 h-10 rounded-xl opacity-25" style={{ backgroundColor: "hsl(var(--light-orange))" }} />
      <div className="absolute bottom-16 right-12 w-8 h-8 rounded-full opacity-25" style={{ backgroundColor: "hsl(var(--light-teal))" }} />
      <div className="absolute top-1/2 left-1/4 w-6 h-6 rounded-xl opacity-20" style={{ backgroundColor: "hsl(var(--light-pink))" }} />

      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left Image */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-hero rounded-3xl rotate-2 scale-105 opacity-20" />
            <Card className="relative z-10 rounded-3xl p-5 md:p-6 shadow-sm border border-[hsl(var(--neutral-100))] bg-white">
              {/* Main imported image */}
              <img
                src={mainImage}
                alt="Happy children learning at Basil Woods Juniors"
                className="w-full h-[320px] md:h-[380px] object-cover rounded-2xl"
              />

              {/* Circular inset with icon */}
              <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-white rounded-full p-1.5 shadow-sm border border-[hsl(var(--neutral-100))] flex items-center justify-center text-3xl">
                😊
              </div>
            </Card>
            {/* small decorative chip */}
            <div
              className="absolute -top-4 -left-4 w-12 h-12 rounded-xl flex items-center justify-center shadow-sm text-white"
              style={{ background: "linear-gradient(135deg, hsl(var(--premium-orange)), hsl(var(--premium-pink)))" }}
            >
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-6">
            <div
              className="px-4 py-2 rounded-full inline-block font-medium text-white"
              style={{ background: "linear-gradient(135deg, hsl(var(--premium-orange)), hsl(var(--premium-pink)))" }}
            >
              🌟 About Basil Woods Juniors
            </div>

            <div className="space-y-3">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-neutral-800 leading-tight">
                India’s Top Preschool & Daycare
                <span className="block" style={{ color: "hsl(var(--premium-orange))" }}>
                  in the Heart of Chennai
                </span>
              </h2>
              <p className="text-neutral-700 text-base md:text-lg leading-relaxed">
                A perfect parenting partner offering a transformative early learning experience — blending world-class infrastructure, expert facilitators, and innovative curriculum with foundational Indian values and universal ethics.
              </p>
            </div>

            <Card className="rounded-2xl p-5 shadow-sm border-l-4 bg-white" style={{ borderColor: "hsl(var(--premium-orange))", borderRightColor: "transparent", borderTopColor: "transparent", borderBottomColor: "transparent" }}>
              <p className="text-neutral-700 leading-relaxed text-sm md:text-base">
                Basil Woods Juniors is an initiative of the <strong>National Institute of Value Education (NIVE)</strong>, selected among India’s top preschool-cum-daycare centres by <strong>Education Today</strong> for two consecutive years, and a nominee at the <strong>International School Awards, Dubai</strong>. Our unique <strong>Culture Connect</strong> program brings India’s rich cultural heritage to life in a fun and engaging way — while nurturing physical, cognitive, and emotional growth.
              </p>
            </Card>

            <div className="grid grid-cols-2 gap-3">
              {features.map((f, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 bg-white p-4 rounded-2xl shadow-sm border border-[hsl(var(--neutral-100))] transition-transform hover:-translate-y-[1px]"
                >
                  <div className="w-8 h-8 rounded-xl flex items-center justify-center text-white" style={{ backgroundColor: "hsl(var(--premium-orange))" }}>
                    <span className="text-sm">{f.icon}</span>
                  </div>
                  <span className="font-semibold text-neutral-800 text-sm md:text-base">{f.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* wave to next (section-3) */}
      <WaveBottom fill="#e9f2ef" />
    </section>
  );
};

export default AboutSection;
