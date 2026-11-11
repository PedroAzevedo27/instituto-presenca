"use client";

import { motion } from "framer-motion";
import { Quote, ArrowRight } from "lucide-react";

export function AboutPreview() {
  return (
    <section id="quem-somos" className="bg-white">
      <div className="container-custom section-padding">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Image Placeholder */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-gradient-to-br from-primary-100 to-primary-200">
              <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-primary-600/10">
                  <span className="text-4xl">🤝</span>
                </div>
                <p className="text-sm font-medium text-primary-700">
                  Foto do Instituto em ação
                </p>
                <p className="mt-1 text-xs text-primary-500">
                  (Adicione uma foto real aqui)
                </p>
              </div>
            </div>
            {/* Decorative accent */}
            <div className="absolute -bottom-4 -right-4 -z-10 h-full w-full rounded-2xl bg-secondary-100" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <span className="text-sm font-bold uppercase tracking-wider text-primary-600">
              Quem Somos
            </span>
            <h2 className="section-title mt-2">
              Transformando vidas com{" "}
              <span className="text-primary-600">presença</span>
            </h2>
            <p className="mt-6 text-gray-600 leading-relaxed">
              O Instituto Presença é uma organização da sociedade civil, sem
              fins lucrativos, criada com o propósito de promover o
              desenvolvimento humano e social de crianças, adolescentes e
              jovens, especialmente daqueles que vivem em situação de
              vulnerabilidade social.
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Trabalhamos por meio de projetos, parcerias e ações sociais,
              buscando aproximar a sociedade das necessidades de quem mais
              precisa.
            </p>

            {/* Quote */}
            <div className="mt-8 rounded-xl border-l-4 border-secondary-400 bg-secondary-50 p-6">
              <Quote className="mb-2 h-6 w-6 text-secondary-400" />
              <p className="text-base font-medium italic text-gray-700">
                &ldquo;Acreditamos que toda criança merece oportunidades para
                crescer, aprender, brincar, praticar esportes e construir um
                futuro melhor.&rdquo;
              </p>
            </div>

            <a
              href="#areas"
              className="group mt-8 inline-flex items-center gap-2 rounded-full bg-primary-600 px-6 py-3 text-sm font-bold text-white transition-all hover:bg-primary-700 hover:-translate-y-0.5"
            >
              Saiba mais
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
