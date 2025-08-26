import React from "react";
import { Card } from "@/components/ui/card";

/*
ProgramsSection — aligned with site standard
- Section bg: bg-section-2 (comes after section-1)
- WaveTop fill: #f6eee7 (from previous section)
- WaveBottom fill: #e9f2ef (into next section-3)
- Subtle shapes only; clean hover (no glow)
- Typography and colors normalized (neutral-800/700)
*/

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

const ProgramsSection = () => {
  const playgroundActivities = [
    { title: "Activity Period",      description: "Our little ones transition smoothly from home to school, setting the mood for all the learning and excitement ahead!", icon: "🌅", gradient: "gradient-swing" },
    { title: "Circle Time",          description: "Confidence blooms through speaking, listening, and social skills with fun-filled morning discussions.",                    icon: "🗣️", gradient: "gradient-slide" },
    { title: "Phonics & Language",   description: "Children learn letter sounds, reading, and writing the fun ‘Jolly Phonics’ way!",                                      icon: "📚", gradient: "gradient-seesaw" },
    { title: "Puppets & Story Time", description: "Stories come alive with friendly puppets, building vocabulary and sparking imagination.",                                icon: "🎭", gradient: "gradient-swing" },
    { title: "Field Trips",          description: "Hands-on learning through carefully planned trips, creating lasting memories.",                                         icon: "🚌", gradient: "gradient-slide" },
    { title: "Outdoor Play",         description: "30 minutes of sunshine, sand play, and structured games to keep kids active and happy.",                                icon: "🏃", gradient: "gradient-seesaw" },
    { title: "Theme Time",           description: "A fresh theme each month keeps children engaged across diverse topics.",                                                 icon: "🎨", gradient: "gradient-swing" },
    { title: "Art, Craft & Gardening", description: "From creative crafts to planting seeds — learning by doing in joyful ways.",                                          icon: "🌱", gradient: "gradient-slide" },
  ];

  // Map gradient keys to your utilities
  const gradientClass = (g) =>
    g === "gradient-swing" ? "bg-gradient-primary"
    : g === "gradient-slide" ? "bg-gradient-secondary"
    : "bg-gradient-accent";

  return (
    <section className="py-14 md:py-16 bg-section-4 relative overflow-hidden">
      <WaveTop fill="#e9f2ef" />

      {/* subtle shapes */}
      <div className="absolute top-20 right-8 w-12 h-12 rounded-2xl opacity-25" style={{ backgroundColor: "hsl(var(--premium-yellow) / 0.2)" }} />
      <div className="absolute bottom-20 left-12 w-8 h-8 rounded-full opacity-25" style={{ backgroundColor: "hsl(var(--premium-teal) / 0.2)" }} />
      <div className="absolute top-1/2 left-8 w-6 h-6 rounded-2xl opacity-20" style={{ backgroundColor: "hsl(var(--premium-pink) / 0.2)" }} />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-10 md:mb-12">
          <div className="px-4 py-2 rounded-full inline-block mb-4 text-white"
               style={{ background: "linear-gradient(135deg, hsl(var(--premium-orange)), hsl(var(--premium-pink)))" }}>
            🌟 A Day at Basil Woods Juniors
          </div>

          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-neutral-800 leading-tight mb-3">
            Every Day is Filled with
            <span className="block" style={{ color: "hsl(var(--premium-pink))" }}>Joy, Learning & Discovery</span>
          </h2>

          <p className="text-neutral-700 text-base md:text-lg leading-relaxed">
            From circle time to outdoor play — each moment is designed to make learning rich, real, and relevant.
          </p>
        </div>

        {/* Activities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-7 max-w-7xl mx-auto">
          {playgroundActivities.map((activity, index) => (
            <div key={index} className={`${index % 2 === 1 ? "lg:mt-6" : ""} group`}>
              <Card className="p-6 md:p-7 text-center h-full rounded-2xl border border-[hsl(var(--neutral-100))] bg-white shadow-sm transition-all hover:shadow-md hover:-translate-y-[2px]">
                <div
                  className={`${gradientClass(activity.gradient)} w-16 h-16 md:w-20 md:h-20 rounded-3xl flex items-center justify-center mx-auto mb-5 shadow-sm transition-transform group-hover:scale-[1.03]`}
                >
                  <span className="text-2xl md:text-3xl">{activity.icon}</span>
                </div>

                <h3 className="font-bold text-lg md:text-xl text-neutral-800 mb-3 transition-colors">
                  {activity.title}
                </h3>

                <p className="text-neutral-700 text-sm md:text-base leading-relaxed">
                  {activity.description}
                </p>

                {/* underline indicator */}
                <div className="mt-5 pt-4 border-t border-[hsl(var(--neutral-100))]">
                  <div className="w-full h-[2px] bg-[hsl(var(--neutral-100))] rounded-full overflow-hidden">
                    <div className="h-[2px] rounded-full w-0 transition-all duration-500 ease-out group-hover:w-full"
                         style={{ backgroundColor: "hsl(var(--premium-orange))" }} />
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>

      <WaveBottom fill="#e9f2ef" />
    </section>
  );
};

export default ProgramsSection;
