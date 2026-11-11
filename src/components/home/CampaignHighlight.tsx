"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { CAMPAIGNS } from "@/lib/constants";

export function CampaignHighlight() {
  return (
    <section id="campanhas" className="bg-white">
      <div className="container-custom section-padding">
        <div className="text-center">
          <span className="text-sm font-bold uppercase tracking-wider text-primary-600">
            Campanhas Permanentes
          </span>
          <h2 className="section-title mt-2">Eventos e Campanhas</h2>
          <p className="section-subtitle mx-auto max-w-2xl">
            Ao longo do ano, realizamos campanhas que levam alegria, esperança e
            acolhimento para centenas de crianças e famílias.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {CAMPAIGNS.map((campaign, index) => (
            <motion.div
              key={campaign.title}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-lg transition-all hover:shadow-2xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
            >
              {/* Top Color Band */}
              <div className={`h-2 ${campaign.bgColor.replace("-50", "-400")}`} />

              <div className="p-8">
                <div
                  className={`mb-5 flex h-16 w-16 items-center justify-center rounded-2xl ${campaign.bgColor} transition-transform group-hover:scale-110`}
                >
                  <campaign.icon className={`h-8 w-8 ${campaign.color}`} />
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  {campaign.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">
                  {campaign.description}
                </p>
                <a
                  href="#contato"
                  className="group/link mt-6 inline-flex items-center gap-1 text-sm font-semibold text-primary-600 transition-colors hover:text-primary-800"
                >
                  Saiba mais
                  <ArrowRight className="h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Frase de Impacto */}
        <motion.div
          className="mt-16 rounded-2xl bg-gradient-to-r from-primary-50 to-accent-50 p-8 text-center md:p-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="mx-auto max-w-3xl text-xl font-medium leading-relaxed text-gray-700 md:text-2xl">
            &ldquo;Nenhuma criança deve deixar de estudar por falta de material,
            abandonar o esporte por falta de condições financeiras ou crescer sem
            oportunidades de desenvolvimento.&rdquo;
          </p>
        </motion.div>
      </div>
    </section>
  );
}
