import { motion } from "framer-motion";
import { useState } from "react";

const reasons = [
  {
    id: "expertise",
    title: "Expertise",
    description: "Years of Experience in AI development",
  },
  {
    id: "fast-development",
    title: "Fast Development",
    description: "Rapid Integration and implementation",
  },
  {
    id: "proven-results",
    title: "Proven Results",
    description: "Delivering Measurable Outcomes",
  },
  {
    id: "enhanced-security",
    title: "Enhanced Security",
    description: "Commitment to Data Protection & Privacy",
  },
];


function ReasonCard({ reason, index, isHovered, setHoveredIndex }) {

  const isCurrentHovered = isHovered === index;

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        delay: index * 0.12,
        ease: "easeOut",
      }}
      onMouseEnter={() => setHoveredIndex(index)}
      onMouseLeave={() => setHoveredIndex(null)}
    >

      <motion.div

        className="
        bg-gradient-to-br
        from-white
        to-[#ABC4FF]

        rounded-2xl
        p-6

        shadow-lg
        border
        border-slate-200

        flex
        flex-col
        justify-center
        items-center
        text-center

        min-h-[220px]

        cursor-pointer
        "

        animate={{

          y: isCurrentHovered ? -8 : 0,

          scale: isCurrentHovered ? 1.03 : 1,

          boxShadow: isCurrentHovered
            ? "0 20px 40px rgba(0,0,0,0.12)"
            : "0 10px 20px rgba(0,0,0,0.08)"

        }}


        transition={{
          duration:0.3,
          ease:"easeOut"
        }}

      >


        <motion.h3

          className="
          text-xl
          font-bold
          text-slate-900
          mb-3
          "

          animate={{
            scale:isCurrentHovered ? 1.05 : 1
          }}

        >

          {reason.title}

        </motion.h3>



        <motion.p

          className="
          text-sm
          md:text-base
          text-slate-700
          font-semibold
          leading-relaxed
          max-w-xs
          "

          animate={{
            opacity:isCurrentHovered ? 1 : 0.9
          }}

        >

          {reason.description}

        </motion.p>


      </motion.div>


    </motion.div>
  );
}




export default function WhyChooseUs() {


  const [hoveredIndex,setHoveredIndex] = useState(null);



  return (

<section className="py-16 bg-white">


<div className="max-w-7xl mx-auto px-6">


{/* Heading */}

<div className="text-center mb-12">


<motion.h2

className="
text-4xl
md:text-5xl
font-bold
text-slate-900
"


initial={{opacity:0,y:-10}}

whileInView={{opacity:1,y:0}}

viewport={{once:true}}

transition={{duration:0.5}}

>

WHY CHOOSE US?

</motion.h2>



<motion.p

className="
mt-4
text-slate-700
font-semibold
max-w-3xl
mx-auto
text-sm
md:text-base
"

initial={{opacity:0}}

whileInView={{opacity:1}}

viewport={{once:true}}

transition={{
duration:0.5,
delay:0.1
}}

>

We combine innovation, expertise, and reliability to deliver
intelligent AI solutions that help businesses grow, automate
processes, and stay ahead of the competition.

</motion.p>



</div>





{/* Cards */}

<div className="
grid
md:grid-cols-2
gap-6
max-w-5xl
mx-auto
">


{reasons.map((reason,index)=>(


<ReasonCard

key={reason.id}

reason={reason}

index={index}

isHovered={hoveredIndex}

setHoveredIndex={setHoveredIndex}

/>


))}



</div>




</div>


</section>

  );
}