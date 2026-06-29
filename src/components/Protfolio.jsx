import { motion } from "framer-motion";
import { useState } from "react";


const projects = [

{
title:"Algoligence Powered Chatbot",

tag:"AI CHATBOT",


description:
"This AI-powered chatbot provides interactive, real-time responses to user queries. It can understand natural language, answer frequently asked questions, and assist users in completing tasks efficiently. Designed to demonstrate conversational AI and automation, it showcases practical AI applications in web and app interfaces.",


image:"/images/chatbot.png"

},



{
title:"DeepShield AI",

tag:"DEEPFAKE DETECTION",



description:
"DeepShield is an AI-powered deepfake detection platform designed to identify manipulated images and videos. Using computer vision and deep learning models, it analyzes digital content authenticity and helps protect users against AI-generated misinformation.",


image:"/images/deepshield.png"

},




{
title:"Patient Diagnostic System",

tag:"AI HEALTHCARE",
description:
"The Patient Diagnostic System is an AI-powered chatbot that assists in disease diagnosis. By interacting with patients and analyzing symptoms, it offers preliminary diagnostic suggestions. This streamlines the process, reduces doctors’ workload, and ensures patients receive timely guidance.",


image:"/images/healthcare.png"

}


];





function ProjectCard({project,index}){


const [hover,setHover]=useState(false);



return(


<motion.div


initial={{
opacity:0,
y:60
}}


whileInView={{
opacity:1,
y:0
}}


viewport={{
once:true
}}


transition={{
duration:.7,
delay:index*.15
}}




onMouseEnter={()=>setHover(true)}

onMouseLeave={()=>setHover(false)}




className="

grid

lg:grid-cols-2

gap-6 lg:gap-10

items-center

mb-12

"


>




{/* TEXT SIDE */}



<div

className={

index%2===0
?
"order-1"
:
"order-1 lg:order-2"

}


>



<div

className="

flex

items-center

gap-3

mb-5

"

>


<span


className="

px-4

py-2

rounded-full

bg-[#ABC4FF]

text-slate-900

text-xs

font-bold

"


>


{project.tag}


</span>




<span


className="

text-sm

font-bold

text-slate-500

"

>


STANDARD


</span>



</div>





<h3


className="

text-4xl

font-bold

text-slate-900

mb-5

"


>


{project.title}


</h3>






<p


className="

text-slate-700

font-semibold

leading-relaxed

max-w-xl

"


>


{project.description}


</p>




<div

className="

mt-8

flex

items-center

gap-5

"


>



<div


className="

text-5xl

font-bold

text-slate-900

"

>



</div>




<div

className="

text-slate-600

font-semibold

"

>

</div>



</div>





<button


className="

mt-8

px-7

py-3

rounded-full

border

border-slate-800

font-semibold

hover:bg-white

transition

"


>

View Project

</button>



</div>









{/* IMAGE SIDE */}



<motion.div


animate={{

y:hover ? -10 : 0,

scale:hover ? 1.03 : 1

}}



transition={{
duration:.35
}}




className={

index%2===0
?
"order-2"
:
"order-2 lg:order-1"

}


>



<div


className="

rounded-3xl

overflow-hidden

bg-gradient-to-br

from-white

to-[#ABC4FF]

p-3

shadow-xl

"

>


<div


className="

rounded-3xl

overflow-hidden

h-[280px] lg:h-[330px]

bg-slate-900

relative

"


>



<img


src={project.image}

alt={project.title}


className="

w-full

h-full

object-cover

"


/>




<div


className="

absolute

inset-0

bg-gradient-to-t

from-black/40

to-transparent

"


/>



</div>


</div>



</motion.div>







</motion.div>


)


}






export default function Portfolio(){



return(



<section

className="

py-10 lg:py-14
bg-white

"


>



<div

className="

max-w-7xl

mx-auto

px-8

"


>



{/* HEADER */}



<div

className="

text-center

mb-10

"

>


<motion.h2


initial={{
opacity:0,
y:-20
}}



whileInView={{
opacity:1,
y:0
}}



viewport={{
once:true
}}



className="

text-5xl

font-bold

text-slate-900

"


>


OUR PORTFOLIO


</motion.h2>




<motion.p


initial={{
opacity:0
}}

whileInView={{
opacity:1
}}


viewport={{
once:true
}}


className="

mt-5

max-w-3xl

mx-auto

text-slate-700

font-semibold

"

>


Explore our AI-powered products and intelligent systems
built to solve real-world problems through automation,
machine learning, and advanced technology.


</motion.p>



</div>








{

projects.map((project,index)=>(


<ProjectCard

key={project.title}

project={project}

index={index}


/>


))


}





</div>



</section>


)



}