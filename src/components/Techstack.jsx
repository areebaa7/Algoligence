import { motion } from "framer-motion";

const techStackRow1 = [
  { name: "Mongo DB", icon: "🍃" },
  { name: "Scikit Learn", icon: "🤖" },
  { name: "Tensor Flow", icon: "🧠" },
  { name: "Lang chain", icon: "🦜🔗" },
  { name: "Lang graph", icon: "🦜🔗" },
  { name: "Crew AI", icon: "⚙️" },
  { name: "Hugging Face", icon: "🤗" },
  { name: "Gemini", icon: "✨" },
  { name: "Auto Gen", icon: "🔄" },
  { name: "OpenAI", icon: "🤖" },
];

const techStackRow2 = [
  { name: "GPT", icon: "💬" },
  { name: "Fast API", icon: "⚡" },
  { name: "NBN", icon: "🔗" },
  { name: "Python", icon: "🐍" },
  { name: "SQL", icon: "📊" },
  { name: "Mongo DB", icon: "🍃" },
  { name: "Scikit Learn", icon: "🤖" },
  { name: "Tensor Flow", icon: "🧠" },
  { name: "Lang chain", icon: "🦜🔗" },
  { name: "Lang graph", icon: "🦜🔗" },
];

const TechBadge = ({ tech }) => (
  <div className="flex-shrink-0 inline-flex items-center gap-2 bg-gradient-to-br from-white to-[#ABC4FF] text-slate-800 px-5 py-3 rounded-full font-semibold text-sm md:text-base whitespace-nowrap shadow-md hover:shadow-lg transition-all duration-300">
    <span className="text-lg">{tech.icon}</span>
    <span>{tech.name}</span>
  </div>
);

export default function TechStack() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 tracking-tight">
            TECH STACK
          </h2>
          <p className="text-lg md:text-xl text-slate-700 font-semibold max-w-2xl mx-auto">
            Our tech stack isn't just modern. It's strategic, scalable, and built for the future.
          </p>
        </div>

        {/* Row 1 - Left to Right */}
        <div className="mb-8 overflow-hidden">
          <motion.div
            className="flex gap-4"
            animate={{ x: [0, -1000] }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {[...techStackRow1, ...techStackRow1].map((tech, i) => (
              <TechBadge key={i} tech={tech} />
            ))}
          </motion.div>
        </div>

        {/* Row 2 - Right to Left */}
        <div className="overflow-hidden">
          <motion.div
            className="flex gap-4"
            animate={{ x: [-1000, 0] }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {[...techStackRow2, ...techStackRow2].map((tech, i) => (
              <TechBadge key={i} tech={tech} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}