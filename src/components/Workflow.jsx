
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
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
     className="
  px-14
  py-4
  rounded-md
  font-semibold
  border
  transition-all
  duration-300
  cursor-pointer
"
style={{
  background: isActive
    ? "linear-gradient(135deg, #abc4ff 0%, #7aa8ff 100%)"
    : "#ffffff",
  color: "#0f172a",
  borderColor: "#000000",
  borderWidth: "1px",
}}
    >
      {workflow.label}
    </motion.button>
  );
}

export default function Workflow() {
  const [activeWorkflow, setActiveWorkflow] = useState("it-ops");

  const currentWorkflow =
    workflows.find((w) => w.id === activeWorkflow) || workflows[0];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <motion.h2
            className="text-5xl font-bold text-slate-900"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            OUR WORKFLOW
          </motion.h2>

          <motion.p
            className="mt-4 text-slate-700 font-semibold max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Experience seamless automation across different business
            operations. Click to explore our specialized workflows.
          </motion.p>
        </div>

        {/* Tabs */}
        <motion.div
          className="flex gap-4 mb-4 justify-center flex-wrap"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {workflows.map((workflow, index) => (
            <motion.div
              key={workflow.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
                delay: index * 0.08,
              }}
            >
              <TabButton
                workflow={workflow}
                isActive={activeWorkflow === workflow.id}
                onClick={() => setActiveWorkflow(workflow.id)}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Workflow Display */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeWorkflow}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="bg-white rounded-3xl p-8 shadow-lg"
            >
              {/* Image */}
              <motion.div
                className="
                    w-full
                    h-[500px]
                    rounded-3xl
                    overflow-hidden
                    bg-slate-900
                    border
                    border-black"
              >
                <img
                  src={currentWorkflow.image}
                  alt={currentWorkflow.label}
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Title Only */}
              <motion.div
                className="mt-8 text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <h3 className="text-3xl font-bold text-slate-900">
                  {currentWorkflow.label}
                </h3>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* CTA */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
        </motion.div>
      </div>
    </section>
  );
}

