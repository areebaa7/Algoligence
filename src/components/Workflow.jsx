import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

import itOpsImg from "../assets/IT-ops.JPG";

const workflows = [
  {
    id: "it-ops",
    label: "IT Ops",
    image: itOpsImg,
  },
  {
    id: "sec-ops",
    label: "Sec Ops",
    image: "/mnt/user-data/uploads/1781982646527_image.png",
  },
  {
    id: "dev-ops",
    label: "Dev Ops",
    image: "/mnt/user-data/uploads/1781982646527_image.png",
  },
  {
    id: "sales",
    label: "Sales",
    image: "/mnt/user-data/uploads/1781982646527_image.png",
  },
];

function TabButton({ workflow, isActive, onClick }) {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{
        y: -2,
        scale: 1.02,
      }}
      whileTap={{
        scale: 0.98,
      }}
      transition={{
        duration: 0.25,
      }}
      className={`
        flex-shrink-0
        rounded-xl
        border
        font-semibold
        transition-all
        duration-300
        cursor-pointer

        px-5
        py-3

        sm:px-7
        sm:py-3

        lg:px-10
        lg:py-4

        text-sm
        sm:text-base

        ${
          isActive
            ? "bg-gradient-to-r from-[#ABC4FF] to-[#7AA8FF] text-slate-900 shadow-lg border-slate-900"
            : "bg-white text-slate-800 border-slate-300 hover:border-[#7AA8FF] hover:shadow-md"
        }
      `}
    >
      {workflow.label}
    </motion.button>
  );
}

export default function Workflow() {
  const [activeWorkflow, setActiveWorkflow] = useState("it-ops");

  const currentWorkflow =
    workflows.find((workflow) => workflow.id === activeWorkflow) ??
    workflows[0];

  return (
   <section className="bg-white py-10 lg:py-14">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

        {/* ================= Heading ================= */}

        <motion.div
        className="text-center mb-8 lg:mb-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <motion.h2
            initial={{ y: -25, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="
              text-3xl
              sm:text-4xl
              lg:text-5xl
              font-bold
              text-slate-900
            "
          >
            OUR WORKFLOW
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
              delay: 0.15,
              duration: 0.5,
            }}
            viewport={{ once: true }}
            className="
              mt-5
              max-w-3xl
              mx-auto

              text-slate-600
              leading-relaxed

              text-base
              sm:text-lg
            "
          >
            Experience seamless automation across different business
            operations. Explore how our AI-powered workflows transform
            business processes, improve efficiency, and deliver measurable
            results.
          </motion.p>
        </motion.div>

        {/* ================= Tabs ================= */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <div
            className="
              flex
              gap-3
              overflow-x-auto
              pb-3

              lg:justify-center
              lg:flex-wrap

              scrollbar-thin
            "
          >
            {workflows.map((workflow, index) => (
              <motion.div
                key={workflow.id}
                initial={{
                  opacity: 0,
                  scale: 0.9,
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                }}
                transition={{
                  delay: index * 0.08,
                  duration: 0.4,
                }}
                viewport={{ once: true }}
              >
                <TabButton
                  workflow={workflow}
                  isActive={activeWorkflow === workflow.id}
                  onClick={() =>
                    setActiveWorkflow(workflow.id)
                  }
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ================= Workflow Card ================= */}

        <AnimatePresence mode="wait">
          <motion.div
            key={activeWorkflow}
            initial={{
              opacity: 0,
              y: 25,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -25,
            }}
            transition={{
              duration: 0.45,
            }}
            className="
              rounded-3xl
              border
              border-slate-200
              bg-white
              shadow-xl

             p-3
            sm:p-5
            lg:p-6
            "
          >            {/* ================= Workflow Image ================= */}

            <motion.div
              layout
              className="
                w-full
                overflow-hidden
                rounded-2xl
                border
                border-slate-200
                bg-slate-100

                h-[220px]
                sm:h-[320px]
                md:h-[420px]
                lg:h-[450px]
              "
            >
              <motion.img
                key={currentWorkflow.id}
                src={currentWorkflow.image}
                alt={currentWorkflow.label}
                initial={{
                  opacity: 0,
                  scale: 1.05,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                exit={{
                  opacity: 0,
                }}
                transition={{
                  duration: 0.5,
                }}
                className="
                  w-full
                  h-full
                  object-cover
                  object-center
                "
              />
            </motion.div>

            {/* ================= Title ================= */}

            <motion.div
              initial={{
                opacity: 0,
                y: 15,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.15,
                duration: 0.45,
              }}
              className="mt-5 text-center"
            >
              <h3
                className="
                  text-2xl
                  sm:text-3xl
                  lg:text-4xl
                  font-bold
                  text-slate-900
                "
              >
                {currentWorkflow.label}
              </h3>

              <p
                className="
                  mt-3
                  max-w-2xl
                  mx-auto

                  text-slate-600
                  leading-relaxed

                  text-sm
                  sm:text-base
                "
              >
                Discover how our{" "}
                <span className="font-semibold text-slate-900">
                  {currentWorkflow.label}
                </span>{" "}
                workflow streamlines operations, improves productivity,
                and enables intelligent automation across your business.
              </p>
            </motion.div>

            {/* ================= CTA ================= */}

            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.25,
              }}
              className="
                mt-5
                flex
                justify-center
              "
            >
              <motion.button
                whileHover={{
                  scale: 1.04,
                  y: -2,
                }}
                whileTap={{
                  scale: 0.98,
                }}
                className="
                  rounded-xl

                  bg-gradient-to-r
                  from-[#ABC4FF]
                  to-[#7AA8FF]

                  px-7
                  py-3

                  text-slate-900
                  font-semibold

                  shadow-lg

                  transition-all
                  duration-300
                "
              >
                Explore Workflow
              </motion.button>
            </motion.div>

          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}