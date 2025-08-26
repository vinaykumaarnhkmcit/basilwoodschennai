import React from "react";
import { Quote, Star } from "lucide-react";

/*
Testimonials — aligned with site standard
- Section bg: bg-section-4 (after USP section-3)
- WaveTop: #eee7fa (from previous)
- WaveBottom: #e9eefc (into next section-5)
- Clean cards, neutral typography, brand tints for accents
*/

const WaveTop = ({ fill = "#eee7fa" }) => (
  <div className="absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180">
    <svg className="relative block w-full h-[60px]" viewBox="0 0 1440 320" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fill={fill}
        d="M0,256L48,240C96,224,192,192,288,170.7C384,149,480,139,576,154.7C672,171,768,213,864,208C960,203,1056,149,1152,117.3C1248,85,1344,75,1392,69.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
      />
    </svg>
  </div>
);

const WaveBottom = ({ fill = "#e9eefc" }) => (
  <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
    <svg className="relative block w-full h-[60px]" viewBox="0 0 1440 320" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fill={fill}
        d="M0,256L48,240C96,224,192,192,288,170.7C384,149,480,139,576,154.7C672,171,768,213,864,208C960,203,1056,149,1152,117.3C1248,85,1344,75,1392,69.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
      />
    </svg>
  </div>
);

const playgroundTestimonials = [
  {
    text: "Our daughter absolutely loves coming to Basil Woods! The caring teachers, engaging activities, and the focus on values have made her more confident and curious about the world.",
    name: "Priya Sharma",
    role: "Software Engineer, Chennai",
    child: "Ananya (4 years)",
    favorite: "🎨 Theme-Based Art & Craft",
    rating: 5
  },
  {
    text: "From a shy little boy to a confident communicator – that’s the transformation we’ve seen! He comes home excited about circle time and the new things he learns every day.",
    name: "Rajesh Kumar",
    role: "Doctor, Adyar",
    child: "Arjun (3.5 years)",
    favorite: "🌱 Gardening & Nature Learning",
    rating: 5
  },
  {
    text: "The individual attention my twins receive is heartwarming. The field trips, cultural celebrations, and fun learning methods have made them eager to come to school every morning.",
    name: "Lakshmi Raman",
    role: "Classical Dancer, Mylapore",
    child: "Meera & Karthik (twins, 4.5 years)",
    favorite: "🎭 Puppets & Story Time",
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <section className="py-14 md:py-16 bg-section-4 relative overflow-hidden">
      <WaveTop fill="#eee7fa" />

      {/* subtle shapes */}
      <div className="absolute top-20 right-8 w-10 h-10 rounded-2xl opacity-25" style={{ backgroundColor: "hsl(var(--premium-yellow) / 0.2)" }} />
      <div className="absolute bottom-20 left-12 w-8 h-8 rounded-full opacity-25" style={{ backgroundColor: "hsl(var(--premium-teal) / 0.2)" }} />
      <div className="absolute top-1/2 right-1/4 w-6 h-6 rounded-2xl opacity-20" style={{ backgroundColor: "hsl(var(--premium-pink) / 0.2)" }} />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-10 md:mb-12">
          <div
            className="px-4 py-2 rounded-full inline-block mb-4 text-white"
            style={{ background: "linear-gradient(135deg, hsl(var(--premium-orange)), hsl(var(--premium-pink)))" }}
          >
            💬 What Parents Say
          </div>

          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-neutral-800 leading-tight mb-3">
            Families Love
            <span className="block" style={{ color: "hsl(var(--premium-pink))" }}>The Basil Woods Experience</span>
          </h2>

          <p className="text-neutral-700 text-base md:text-lg leading-relaxed">
            Real voices from our community sharing how learning here is rich, real, and relevant.
          </p>
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
          {playgroundTestimonials.map((t, index) => (
            <div
              key={index}
              className="rounded-2xl p-6 bg-white shadow-sm border border-[hsl(var(--neutral-100))] hover:shadow-md transition-all hover:-translate-y-[2px] relative"
            >
              <div
                className="absolute top-4 right-4 w-10 h-10 rounded-xl flex items-center justify-center"
                style={{ backgroundColor: "hsl(var(--light-orange))", color: "hsl(var(--premium-orange))" }}
              >
                <Quote className="w-5 h-5" />
              </div>

              <div className="mb-3">
                <h4 className="font-bold text-neutral-800">{t.name}</h4>
                <p className="text-sm text-neutral-600">{t.role}</p>
                <p className="text-xs" style={{ color: "hsl(var(--premium-teal))" }}>Child: {t.child}</p>
              </div>

              <div className="flex gap-1 mb-3" style={{ color: "hsl(var(--premium-yellow))" }}>
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4" stroke="currentColor" fill="currentColor" strokeWidth={0} />
                ))}
              </div>

              <blockquote
                className="leading-relaxed mb-4 italic rounded-xl p-4 border-l-4"
                style={{ borderColor: "hsl(var(--premium-purple))", backgroundColor: "hsl(var(--neutral-50))" }}
              >
                “{t.text}”
              </blockquote>

              <div
                className="p-3 rounded-xl border-l-4"
                style={{ borderColor: "hsl(var(--premium-teal))", backgroundColor: "hsl(var(--light-teal))" }}
              >
                <div className="text-sm font-bold" style={{ color: "hsl(var(--premium-teal))" }}>
                  Child's Favorite:
                </div>
                <div className="font-semibold text-neutral-800">{t.favorite}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats strip */}
        <div
          className="rounded-2xl p-8 text-center max-w-4xl mx-auto"
          style={{ backgroundColor: "transparent", color: "hsl(var(--neutral-900))" }}        >
          <h3 className="text-2xl font-bold mb-5">🎪 Our Happy Basil Woods Family</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            <div>
              <div className="text-3xl font-bold">500+</div>
              <div className="text-sm opacity-90">Happy Families</div>
            </div>
            <div>
              <div className="text-3xl font-bold">98%</div>
              <div className="text-sm opacity-90">Parent Satisfaction</div>
            </div>
            <div>
              <div className="text-3xl font-bold">6</div>
              <div className="text-sm opacity-90">Cities Served</div>
            </div>
            <div>
              <div className="text-3xl font-bold">15+</div>
              <div className="text-sm opacity-90">Years of Excellence</div>
            </div>
          </div>
        </div>
      </div>

      <WaveBottom fill="#e9eefc" />
    </section>
  );
}
