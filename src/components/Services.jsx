import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { useRef, useState } from "react";

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


function ServiceCard({ service, index }) {

  const cardRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["end end", "start center"],
  });


  const cardY = useTransform(
    scrollYProgress,
    [0, 0.5],
    [30, 0]
  );


  return (

    <motion.div

      ref={cardRef}

      initial={{
        opacity:0,
        y:-50
      }}

      animate={{
        opacity:1,
        y:0
      }}

      whileInView={{
        opacity:1
      }}

      viewport={{
        once:true
      }}

      transition={{
        duration:0.8,
        delay:index * 0.15,
        ease:[0.34,1.56,0.64,1]
      }}

      style={{
        y:cardY
      }}

      onMouseEnter={() => setIsHovered(true)}

      onMouseLeave={() => setIsHovered(false)}

      className="h-full p-1"

    >


      <motion.div


        className="
        bg-gradient-to-br
        from-white
        to-[#ABC4FF]

        rounded-3xl
        p-8

        shadow-md

        flex
        flex-col
        justify-between

        min-h-[320px]

        cursor-pointer

        transition-colors
        duration-300

        h-full
        "


        animate={{

          boxShadow:isHovered
          ? "0 25px 50px -12px rgba(0,0,0,0.15)"
          : "0 10px 15px -3px rgba(0,0,0,0.1)",


          y:isHovered ? -8 : 0

        }}


        transition={{

          duration:0.3,

          ease:"easeOut"

        }}


      >


        <div>


          <motion.h3

          className="
          text-xl
          font-bold
          text-slate-900
          text-center
          mb-4
          "

          animate={{

            letterSpacing:isHovered
            ? "0.5px"
            : "0px"

          }}

          transition={{
            duration:0.3
          }}

          >

          {service.title}

          </motion.h3>




          <motion.p

          className="
          text-sm
          font-semibold
          text-slate-800
          text-justify
          "

          animate={{

            color:isHovered
            ? "#1e293b"
            : "#475569"

          }}

          transition={{
            duration:0.3
          }}

          >

          {service.description}

          </motion.p>


        </div>





        <div className="flex justify-center mt-6">


          <motion.div

          animate={{

            scale:isHovered ? 1.08 : 1

          }}

          transition={{

            duration:0.3,
            ease:"easeOut"

          }}

          >


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

            transition-colors

            duration-300

            inline-block

            "

            >

            Learn More

            </Link>


          </motion.div>


        </div>


      </motion.div>


    </motion.div>

  );

}





export default function Services(){


return (

<section className="py-16 bg-white">


<div className="max-w-7xl mx-auto px-8">



<div className="text-center mb-16">


<motion.h2

className="
text-5xl
font-bold
text-slate-900
"

initial={{
opacity:0,
y:-10
}}

whileInView={{
opacity:1,
y:0
}}

viewport={{
once:true
}}

transition={{
duration:0.5
}}

>

OUR SERVICES

</motion.h2>



<motion.p

className="
mt-4
text-slate-700
font-semibold
max-w-3xl
mx-auto
"

initial={{
opacity:0
}}

whileInView={{
opacity:1
}}

viewport={{
once:true
}}

transition={{
duration:0.5,
delay:0.1
}}

>

Transform your business with cutting-edge AI solutions. We
specialize in developing intelligent systems that drive
innovation, efficiency, and growth across industries.

</motion.p>


</div>





<div className="
grid
md:grid-cols-2
lg:grid-cols-3
gap-10
overflow-visible
">


{services.map((service,index)=>(


<ServiceCard

key={service.slug}

service={service}

index={index}

/>


))}


</div>



</div>


</section>


);


}