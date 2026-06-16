import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/logo.jpeg";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "#" },
    { label: "About Us", href: "#" },
    { label: "Our Services", href: "#" },
    { label: "Blogs", href: "#" },
    { label: "Usecase", href: "#" },
    { label: "Our Team", href: "#" },
    { label: "Contact Us", href: "#" },
  ];

  return (
    <header className="sticky top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mt-5 bg-white/80 backdrop-blur-xl border border-white/40 rounded-xl px-8 py-4 flex items-center justify-between shadow-lg">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Algoligence" className="h-10" />
          </div>

          <nav className="hidden md:flex gap-8 text-slate-800 font-medium">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="hover:text-blue-600 transition-colors duration-300">
                {item.label}
              </a>
            ))}
          </nav>

          <button className="md:hidden flex flex-col gap-1.5 focus:outline-none" onClick={() => setIsOpen(!isOpen)}>
            <motion.div animate={isOpen ? { rotate: 45, y: 10 } : { rotate: 0, y: 0 }} className="w-6 h-0.5 bg-slate-800 rounded" />
            <motion.div animate={isOpen ? { opacity: 0 } : { opacity: 1 }} className="w-6 h-0.5 bg-slate-800 rounded" />
            <motion.div animate={isOpen ? { rotate: -45, y: -10 } : { rotate: 0, y: 0 }} className="w-6 h-0.5 bg-slate-800 rounded" />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.3 }} className="md:hidden bg-white/95 backdrop-blur-xl border-b border-white/40 mx-6 rounded-b-xl shadow-lg mt-2 overflow-hidden">
            <nav className="flex flex-col py-6 px-8 gap-4">
              {navItems.map((item) => (
                <motion.a key={item.label} href={item.href} onClick={() => setIsOpen(false)} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.2 }} className="text-slate-800 font-medium hover:text-blue-600 transition-colors duration-300 py-2">
                  {item.label}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}