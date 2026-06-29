import { motion } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    name: "Zain Ul Abideen",
    location: "Client from Faisalabad",
    review:
      "Our neural network models achieved excellent accuracy thanks to the team's expertise. Impressive work!",
    image: "/avatars/zain.jpg",
  },
  {
    name: "Sara Malik",
    location: "Client from Multan",
    review:
      "The AI-powered recommendation system built for us works perfectly. Our users love it!",
    image: "/avatars/sara.jpg",
  },
  {
    name: "Usman Tariq",
    location: "Client from Peshawar",
    review:
      "Our deep learning models were optimized, reducing training time significantly. Brilliant results!",
    image: "/avatars/usman.jpg",
  },
  {
    name: "Hira Mehmood",
    location: "Client from Gujranwala",
    review:
      "The company managed our ML pipeline deployment smoothly and kept the project on track.",
    image: "/avatars/hira.jpg",
  },
  {
    name: "Tariq Javed",
    location: "Client from Sialkot",
    review:
      "The AI-driven analytics solutions boosted our online visibility and business insights within weeks.",
    image: "/avatars/tariq.jpg",
  },
];

const duplicatedTestimonials = [
  ...testimonials,
  ...testimonials,
];

function TestimonialCard({ testimonial }) {
  return (
    <motion.div
      whileHover={{
        y: -12,
        rotateX: 3,
        rotateY: -3,
        scale: 1.02,
      }}
      transition={{
        type: "spring",
        stiffness: 220,
        damping: 18,
      }}
      className="
      min-w-[360px]
      max-w-[360px]
      h-[280px]

      rounded-3xl

      bg-gradient-to-br
      from-white
      to-[#ABC4FF]

      border
      border-slate-200

      shadow-lg

      p-8

      flex
      flex-col
      justify-between

      relative

      overflow-hidden
      "
    >
      {/* Glow */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
        }}
        className="
        absolute

        -top-16
        -right-16

        w-40
        h-40

        rounded-full

        bg-[#ABC4FF]
        blur-3xl
        "
      />

      {/* Quote */}
      <motion.div
        animate={{
          rotate: [0, -8, 8, -8, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
        }}
      >
        <FaQuoteLeft
          className="
          text-4xl
          text-[#7AA8FF]
          "
        />
      </motion.div>

      <p
        className="
        text-slate-700
        leading-relaxed
        font-medium
        mt-5
        "
      >
        {testimonial.review}
      </p>

      <div className="flex items-center gap-4 mt-6">
        <motion.img
          whileHover={{
            scale: 1.1,
          }}
          src={testimonial.image}
          alt={testimonial.name}
          className="
          w-14
          h-14

          rounded-full

          object-cover

          border-2
          border-white

          shadow-md
          "
        />

        <div>
          <h4
            className="
            font-bold
            text-slate-900
            "
          >
            {testimonial.name}
          </h4>

          <p
            className="
            text-sm
            text-slate-500
            "
          >
            {testimonial.location}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
export default function Testimonials() {
  return (
    <section className="py-16 lg:py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* ================= Header ================= */}

        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
            TESTIMONIALS
          </h2>

          <p className="mt-5 max-w-3xl mx-auto text-slate-600 font-medium leading-relaxed">
            Businesses across Pakistan trust Algoligence to deliver
            intelligent AI solutions, automation, and machine learning
            systems that create measurable impact.
          </p>
        </motion.div>

        {/* ================= Single Testimonial Row ================= */}

<div className="relative overflow-hidden py-4">


<div className="
absolute 
left-0 
top-0 
w-28 
h-full 
bg-gradient-to-r 
from-white 
to-transparent 
z-20
"/>


<div className="
absolute 
right-0 
top-0 
w-28 
h-full 
bg-gradient-to-l 
from-white 
to-transparent 
z-20
"/>



<motion.div

className="
flex 
gap-8 
w-max
"


animate={{
x:["0%","-50%"]
}}


transition={{

duration:40,

ease:"linear",

repeat:Infinity

}}



>

{

duplicatedTestimonials.map((testimonial,index)=>(


<TestimonialCard

key={index}

testimonial={testimonial}

/>


))


}


</motion.div>

</div>
      </div>
    </section>
  );
}