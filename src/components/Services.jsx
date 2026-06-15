import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const services = [
  {
    slug: "ai-development",
    title: "AI Development Services",
    description:
      "Unlock new horizons with our cutting-edge AI development solutions. We design intelligent systems that fuel innovation, boost efficiency, and accelerate your business growth.",
  },
  {
    slug: "ai-agent-development",
    title: "AI Agent Development",
    description:
      "Custom AI Agents that think, plan, and act automating workflows, analyzing data, and making decisions in real-time to save time, cut costs, and boost productivity.",
  },
  {
    slug: "chatbot-development",
    title: "Chatbot Development",
    description:
      "Enhance customer engagement with our tailored AI chatbot solutions. Connect with your audience anytime, anywhere, using intelligent chatbots that provide 24/7 automated assistance—delivering faster responses and reducing costs significantly.",
  },
  {
    slug: "machine-learning",
    title: "Machine Learning",
    description:
      "Transform your data into actionable insights with our comprehensive machine learning solutions. From predictive analytics to pattern recognition, we build robust ML models that drive business growth and operational efficiency.",
  },
  {
    slug: "nlp-solution",
    title: "NLP Solution",
    description:
      "Harness the power of natural language processing to extract insights from text, enable intelligent search, and create conversational interfaces. Our NLP solutions help you understand and generate human language at scale.",
  },
  {
    slug: "predictive-analysis",
    title: "Predictive Analysis",
    description:
      "Leveraging historical data, our predictive analytics solutions forecast future trends and outcomes with precision. Applied across diverse industries, these insights empower decision-makers and strategists to plan proactively, mitigate risks, and seize emerging opportunities.",
  },
];

export default function Services() {
  return (
   <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-slate-900">
            OUR SERVICES
          </h2>

          <p className="mt-4 text-slate-700 font-semibold max-w-3xl mx-auto">
            Transform your business with cutting-edge AI solutions. We
            specialize in developing intelligent systems that drive
            innovation, efficiency, and growth across industries.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: (index % 3) * 0.1,
              }}
              className="
                bg-gradient-to-br
                from-white
                to-[#ABC4FF]
                rounded-3xl
                p-8
                shadow-md
                hover:shadow-xl
                transition-all
                duration-300
                flex
                flex-col
                justify-between
                min-h-[320px]
              "
            >
              <div>
                <h3 className="text-xl font-bold text-slate-900 text-center mb-4">
                  {service.title}
                </h3>

                <p className="text-sm font-semibold text-slate-800 text-justify">
                  {service.description}
                </p>
              </div>

              <div className="flex justify-center mt-6">
                <Link
                  to={`/services/${service.slug}`}
                  className="
                    px-6
                    py-2
                    rounded-full
                    border
                    border-slate-700
                    text-slate-800
                    font-medium
                    hover:bg-white/60
                    hover:scale-105
                    transition-all
                    duration-300
                  "
                >
                  Learn More
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}