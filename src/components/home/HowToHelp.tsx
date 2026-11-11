"use client";

import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { HELP_OPTIONS } from "@/lib/constants";

export function HowToHelp() {
  return (
    <section id="doe" className="bg-gray-50">
      <div className="container-custom section-padding">
        <div className="text-center">
          <span className="text-sm font-bold uppercase tracking-wider text-secondary-600">
            Faça parte dessa transformação
          </span>
          <h2 className="section-title mt-2">Como Ajudar</h2>
          <p className="section-subtitle mx-auto max-w-2xl">
            Existem diversas formas de contribuir com o Instituto Presença.
            Escolha a que mais combina com você!
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {HELP_OPTIONS.map((option, index) => (
            <motion.div
              key={option.title}
              className={`relative overflow-hidden rounded-2xl p-8 transition-all hover:-translate-y-2 ${
                option.highlight
                  ? "bg-gradient-to-br from-secondary-500 to-secondary-600 text-white shadow-xl shadow-secondary-200"
                  : "bg-white shadow-lg hover:shadow-xl"
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
            >
              {option.highlight && (
                <div className="absolute -top-6 -right-6 h-24 w-24 rounded-full bg-white/10" />
              )}

              <div
                className={`mb-5 flex h-14 w-14 items-center justify-center rounded-xl ${
                  option.highlight ? "bg-white/20" : option.bgColor
                }`}
              >
                <option.icon
                  className={`h-7 w-7 ${
                    option.highlight ? "text-white" : option.color
                  }`}
                />
              </div>

              <h3
                className={`text-xl font-bold ${
                  option.highlight ? "text-white" : "text-gray-900"
                }`}
              >
                {option.title}
              </h3>
              <p
                className={`mt-3 text-sm leading-relaxed ${
                  option.highlight ? "text-white/90" : "text-gray-600"
                }`}
              >
                {option.description}
              </p>
              <a
                href={option.href}
                className={`mt-6 inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-bold transition-all hover:-translate-y-0.5 ${
                  option.highlight
                    ? "bg-white text-secondary-600 hover:bg-gray-100"
                    : "bg-primary-600 text-white hover:bg-primary-700"
                }`}
              >
                <Heart className="h-4 w-4" />
                {option.cta}
              </a>
            </motion.div>
          ))}
        </div>

        {/* PIX / Doação Info */}
        <motion.div
          className="mt-12 rounded-2xl border-2 border-dashed border-secondary-300 bg-secondary-50 p-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-lg font-bold text-gray-900">
            Doe via PIX
          </h3>
          <p className="mt-2 text-gray-600">
            Chave PIX:{" "}
            <span className="font-mono font-bold text-primary-700">
              contato@institutopresenca.org.br
            </span>
          </p>
          <p className="mt-1 text-sm text-gray-500">
            (Atualize com a chave PIX oficial do Instituto)
          </p>
        </motion.div>
      </div>
    </section>
  );
}
