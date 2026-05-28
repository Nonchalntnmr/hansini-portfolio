"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { skills } from "@/data/portfolio";

function SkillBar({ label, level, index }: { label: string; level: number; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="flex flex-col gap-1.5">
      <div className="flex justify-between items-center">
        <span className="font-sans text-sm text-cream-200/70">{label}</span>
      </div>
      <div className="h-px w-full bg-white/5 relative overflow-hidden">
        <motion.div
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: level / 5 } : {}}
          transition={{ duration: 0.9, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
          className="absolute left-0 top-0 h-full bg-gradient-to-r from-gold-500 to-gold-700 origin-left"
          style={{ width: "100%" }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const interests = [
    "Event-driven equity markets",
    "Competitive Bhangra & Kuchipudi dance",
    "Tennis",
    "Café-hopping",
    "French language",
    "Nonprofit tech",
  ];

  return (
    <section id="skills" className="section-padding relative z-10">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-navy-800/20 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-sans text-xs tracking-[0.25em] uppercase text-gold-500 mb-4"
        >
          04 — Skills
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="font-serif text-4xl md:text-5xl text-cream-50 mb-16 leading-tight"
        >
          The toolkit.
        </motion.h2>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {Object.entries(skills).map(([category, items], catIdx) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: catIdx * 0.15 }}
            >
              <p className="font-sans text-xs tracking-widest uppercase text-gold-500/60 mb-8">
                {category}
              </p>
              <div className="flex flex-col gap-5">
                {items.map((skill, i) => (
                  <SkillBar key={skill.label} label={skill.label} level={skill.level} index={i} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Interests */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-20 pt-16 border-t border-white/5"
        >
          <p className="font-sans text-xs tracking-widest uppercase text-cream-200/30 mb-6">
            Beyond the desk
          </p>
          <div className="flex flex-wrap gap-3">
            {interests.map((item) => (
              <span
                key={item}
                className="font-sans text-sm text-cream-200/60 px-4 py-2 border border-white/8 hover:border-gold-500/40 hover:text-gold-400 transition-colors duration-300"
              >
                {item}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
