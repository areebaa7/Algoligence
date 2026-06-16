import { motion } from "framer-motion";

const words = "Your GO-TO AI Development Partner".split(" ");

export default function Hero() {
  return (
    <section className="min-h-[85vh] relative overflow-hidden flex items-center justify-center bg-[#0A0F2C]">

      {/* Glow 1 */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-[#3B5BFF] opacity-20 blur-[140px] rounded-full" />

      {/* Glow 2 */}
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#5C7CFA] opacity-25 blur-[140px] rounded-full" />

      <div className="max-w-6xl mx-auto px-8 relative z-10 text-center">

        <div>

          <h1 className="mt-6 text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.2] tracking-tight">
            {words.map((word, i) => (
              <motion.span
                key={i}
                className="inline-block mr-4 bg-gradient-to-r from-blue-400 via-blue-300 to-[#ABC4FF] bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(171,196,255,0.35)]"
                style={{ backgroundSize: "200% auto" }}
                initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
                animate={{
                  opacity: 1,
                  y: 0,
                  filter: "blur(0px)",
                  backgroundPosition: ["0% center", "200% center"],
                }}
                transition={{
                  opacity: { duration: 0.8, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] },
                  y: { duration: 0.8, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] },
                  filter: { duration: 0.8, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] },
                  backgroundPosition: { duration: 6, repeat: Infinity, ease: "linear", delay: i * 0.15 },
                }}
              >
                {word}
              </motion.span>
            ))}
          </h1>

          {/* Paragraph text */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: words.length * 0.15 + 0.1 }}
            className="mt-8 text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto"
          >
            We design powerful AI automation solutions that drive efficiency, innovation, and accelerated growth for businesses of all sizes
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: words.length * 0.15 + 0.3 }}
            className="mt-12 flex justify-center gap-6"
          >
            <button className="bg-white/10 backdrop-blur-lg px-8 py-4 rounded-lg font-semibold border border-white/20 text-white hover:bg-white/20 transition">
              Free Consultation
            </button>
            <button className="bg-white/10 backdrop-blur-lg px-8 py-4 rounded-lg font-semibold border border-white/20 text-white hover:bg-white/20 transition">
              Explore Services
            </button>
          </motion.div>

        </div>

      </div>

    </section>
  );
}