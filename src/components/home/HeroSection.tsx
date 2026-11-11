"use client";

import { motion } from "framer-motion";
import { ArrowRight, Heart } from "lucide-react";

export function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-950 via-primary-900 to-primary-800" />

      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-secondary-400 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-accent-400 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white blur-3xl" />
      </div>

      {/* Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Content */}
      <div className="container-custom relative z-10 px-4 text-center md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-secondary-300 backdrop-blur-sm">
            <Heart className="h-4 w-4" fill="currentColor" />
            Instituto Presença
          </span>
        </motion.div>

        <motion.h1
          className="mx-auto max-w-4xl text-4xl font-bold leading-tight text-white md:text-5xl lg:text-7xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Presente na vida de{" "}
          <span className="bg-gradient-to-r from-secondary-300 to-secondary-500 bg-clip-text text-transparent">
            toda criança
          </span>
        </motion.h1>

        <motion.p
          className="mx-auto mt-6 max-w-2xl text-lg text-gray-300 md:text-xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Promovemos educação, esporte e assistência social para crianças,
          adolescentes e jovens em situação de vulnerabilidade, transformando
          boas intenções em oportunidades reais.
        </motion.p>

        <motion.div
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <a
            href="#quem-somos"
            className="group flex items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-bold text-primary-800 shadow-xl transition-all hover:shadow-2xl hover:-translate-y-1"
          >
            Conheça nosso trabalho
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#doe"
            className="flex items-center gap-2 rounded-full bg-secondary-500 px-8 py-4 text-sm font-bold text-white shadow-xl transition-all hover:bg-secondary-600 hover:shadow-2xl hover:-translate-y-1"
          >
            <Heart className="h-4 w-4" />
            Doe Agora
          </a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-white/30 p-1">
            <div className="h-2 w-1 rounded-full bg-white/60" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
