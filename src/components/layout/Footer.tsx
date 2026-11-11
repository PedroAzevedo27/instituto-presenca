import { Heart } from "lucide-react";
import { NAV_LINKS, CONTACT_INFO, SOCIAL_LINKS } from "@/lib/constants";

export function Footer() {
  return (
    <footer id="contato" className="bg-gray-900 text-gray-300">
      <div className="container-custom section-padding">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Logo e Descrição */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-600 text-white">
                <Heart className="h-5 w-5" fill="currentColor" />
              </div>
              <div>
                <span className="text-sm font-bold tracking-wider text-white">
                  INSTITUTO
                </span>
                <span className="block text-xs font-semibold tracking-widest text-secondary-400">
                  PRESENÇA
                </span>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-gray-400">
              Presente na vida de toda criança. Promovendo educação, esporte,
              assistência social e oportunidades para um futuro melhor.
            </p>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">
              Links Rápidos
            </h3>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-400 transition-colors hover:text-secondary-400"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#doe"
                  className="text-sm font-semibold text-secondary-400 transition-colors hover:text-secondary-300"
                >
                  Doe Agora
                </a>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">
              Contato
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CONTACT_INFO.phoneIcon className="mt-0.5 h-4 w-4 text-primary-400" />
                <span className="text-sm text-gray-400">{CONTACT_INFO.phone}</span>
              </li>
              <li className="flex items-start gap-3">
                <CONTACT_INFO.emailIcon className="mt-0.5 h-4 w-4 text-primary-400" />
                <span className="text-sm text-gray-400">{CONTACT_INFO.email}</span>
              </li>
              <li className="flex items-start gap-3">
                <CONTACT_INFO.addressIcon className="mt-0.5 h-4 w-4 text-primary-400" />
                <span className="text-sm text-gray-400">
                  {CONTACT_INFO.address}
                </span>
              </li>
            </ul>
          </div>

          {/* Redes Sociais */}
          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">
              Redes Sociais
            </h3>
            <div className="flex gap-3">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 text-gray-400 transition-all hover:bg-primary-600 hover:text-white"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider + Copyright */}
        <div className="mt-12 border-t border-gray-800 pt-8 text-center">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} Instituto Presença. Todos os direitos
            reservados. Feito com{" "}
            <Heart className="inline h-3 w-3 text-red-500" fill="currentColor" />{" "}
            para transformar vidas.
          </p>
        </div>
      </div>
    </footer>
  );
}
