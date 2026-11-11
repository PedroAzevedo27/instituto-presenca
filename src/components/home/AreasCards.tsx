"use client";

import { motion } from "framer-motion";
import { AREAS } from "@/lib/constants";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function AreasCards() {
  return (
    <section id="areas" className="bg-gray-50">
      <div className="container-custom section-padding">
        <div className="text-center">
          <span className="text-sm font-bold uppercase tracking-wider text-primary-600">
            O que fazemos
          </span>
          <h2 className="section-title mt-2">Nossas Áreas de Atuação</h2>
          <p className="section-subtitle mx-auto max-w-2xl">
            Atuamos em quatro frentes para garantir que crianças e jovens tenham
            acesso a oportunidades de desenvolvimento.
          </p>
        </div>

        <motion.div
          className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {AREAS.map((area) => (
            <motion.div
              key={area.title}
              variants={cardVariants}
              className={`group relative overflow-hidden rounded-2xl border ${area.borderColor} bg-white p-6 shadow-sm transition-all hover:shadow-xl hover:-translate-y-2`}
            >
              <div
                className={`mb-4 flex h-14 w-14 items-center justify-center rounded-xl ${area.bgColor} transition-transform group-hover:scale-110`}
              >
                <area.icon className={`h-7 w-7 ${area.color}`} />
              </div>
              <h3 className="text-lg font-bold text-gray-900">{area.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">
                {area.description}
              </p>
              {/* Hover accent */}
              <div
                className={`absolute bottom-0 left-0 h-1 w-0 ${area.bgColor.replace("bg-", "bg-").replace("-50", "-400")} transition-all group-hover:w-full`}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
