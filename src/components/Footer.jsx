import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

const services = [
  "AI Development",
  "AI Agents",
  "Chatbot Development",
  "Machine Learning",
  "NLP Solutions",
  "Predictive Analytics",
];


const company = [
  "About Us",
  "Portfolio",
  "Workflow",
  "Contact",
];



export default function Footer(){


return(

<footer

className="
bg-slate-950
text-white
"


>


<div

className="
max-w-7xl
mx-auto
px-6
py-14
"


>



<div

className="
grid

md:grid-cols-4

gap-10

"


>


{/* BRAND */}


<div>


<h3

className="
text-3xl
font-bold
"

>

Algoligence

</h3>



<p

className="
mt-4
text-slate-400
leading-relaxed
"

>

Building intelligent AI solutions through
automation, machine learning, and
next-generation technology.

</p>



<div

className="
flex
gap-4
mt-6
"

>


<a

href="#"

className="
w-10
h-10

rounded-full

bg-white/10

flex
items-center
justify-center

hover:bg-[#ABC4FF]

hover:text-slate-900

transition

"

>

<FaLinkedin/>

</a>



<a

href="#"

className="
w-10
h-10

rounded-full

bg-white/10

flex
items-center
justify-center

hover:bg-[#ABC4FF]

hover:text-slate-900

transition

"

>

<FaGithub/>

</a>




<a

href="#"

className="
w-10
h-10

rounded-full

bg-white/10

flex
items-center
justify-center

hover:bg-[#ABC4FF]

hover:text-slate-900

transition

"

>

<FaTwitter/>

</a>



</div>


</div>






{/* SERVICES */}


<div>


<h4

className="
text-lg
font-bold
mb-5
"

>

Services

</h4>


<ul

className="
space-y-3
text-slate-400
"

>


{

services.map((item)=>(


<li

key={item}

className="
hover:text-[#ABC4FF]
transition
cursor-pointer
"

>

{item}

</li>


))


}


</ul>


</div>









{/* COMPANY */}


<div>


<h4

className="
text-lg
font-bold
mb-5
"

>

Company

</h4>


<ul

className="
space-y-3
text-slate-400
"

>


{

company.map((item)=>(


<li

key={item}

className="
hover:text-[#ABC4FF]
transition
cursor-pointer
"

>

{item}

</li>


))


}


</ul>


</div>








{/* CONTACT */}


<div>


<h4

className="
text-lg
font-bold
mb-5
"

>

Contact

</h4>


<p

className="
text-slate-400
"

>

Islamabad, Pakistan

</p>


<p

className="
mt-3
text-slate-400
"

>

info@algoligence.com

</p>


<p

className="
mt-3
text-slate-400
"

>

+92 XXX XXXXXXX

</p>



</div>



</div>









{/* Bottom */}


<div

className="
border-t

border-white/10

mt-12

pt-6

text-center

text-sm

text-slate-500

"

>


© {new Date().getFullYear()} Algoligence. All rights reserved.


</div>



</div>


</footer>


)


}