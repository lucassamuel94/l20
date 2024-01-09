import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { animations } from "@/styles/animations";
import { motion } from 'framer-motion';
import { CheckIcon } from "lucide-react";

export function Valores() {
  return (
    <section className="container border-t border-white/10">

      <motion.div
        variants={animations}
        initial={"openLeft"}
        whileInView={'whileLeft'}
        transition={{ duration: 1, delay: 0.2 }}
        className="grid grid-cols-1 gap-20">
        <div className="space-y-4">
          <h3>Valores</h3>
          <h4 className="mb-10 text-4xl font-semibold lg:text-5xl/[57.6px]">
            Nossos pacotes
          </h4>
          <p></p>
        </div>

        <motion.div
          variants={animations}
          initial={"openLeft"}
          whileInView={'whileLeft'}
          transition={{ duration: 1, delay: 0.5 }}
          className="space-y-20">
          {/* <div className="grid grid-cols-1 gap-20 lg:grid-cols-2">
            <CardSitePorAssinatura01 />
            <CardSitePorAssinatura02 />
          </div> */}

          <CardSitePremium />
        </motion.div>
      </motion.div>
    </section>
  );
}

const CardSitePorAssinatura01: React.FC = () => {
  return (
    <div className="grid gap-8 rounded-3xl border border-white bg-white/10 px-6 py-8 lg:px-8">
      <div className="">
        <div className="grid">
          <span className="text-2xl font-semibold">Site por assinatura</span>
          <span className="mt-2">Para você que quer começar agora</span>
        </div>

        <div className="mt-8">
          <div className="font-semibold">
            <span className="text-4xl">R$97</span>
            <span className="text-2xl">/mensal</span>
          </div>

          <p className="mt-1 text-xs">Ativação R$ 197,00</p>
        </div>
      </div>

      <div className="grid gap-4 border-y border-white py-8">
        <span>Incluso:</span>
        <ul className="grid gap-4">
          <li className="inline-flex items-center gap-2">
            <CheckIcon className="w-5 text-white" />
            <span>
              One Page
            </span>
          </li>

          <li className="inline-flex items-center gap-2">
            <CheckIcon className="w-5 text-white" />
            <span>
              Assinatura mensal
            </span>
          </li>

          <li className="inline-flex items-center gap-2">
            <CheckIcon className="w-5 text-white" />
            <span>
              Sem fidelidade
            </span>
          </li>

          <li className="inline-flex items-center gap-2">
            <CheckIcon className="w-5 text-white" />
            <span>
              Hospedagem e domínio
            </span>
          </li>

          <li className="inline-flex items-center gap-2">
            <CheckIcon className="w-5 text-white" />
            <span>
              Integração com WhatsApp
            </span>
          </li>
        </ul>
      </div>

      <Button asChild variant={'white'} className="text-center font-bold">
        <a href={siteConfig.links.whatsapp} target="_blank" rel="noopener noreferrer">
          Esse é ideal para mim
        </a>
      </Button>
    </div>
  );
};


const CardSitePorAssinatura02: React.FC = () => {
  return (
    <div className="grid gap-8 rounded-3xl border border-white bg-white/10 px-6 py-8 lg:px-8">
      <div className="">
        <div className="grid">
          <span className="text-2xl font-semibold">Site por assinatura</span>
          <span className="mt-2">Para você que quer começar agora</span>
        </div>

        <div className="mt-8">
          <div className="font-semibold">
            <span className="text-4xl">R$127</span>
            <span className="text-2xl">/mensal</span>
          </div>

          <p className="mt-1 text-xs">Ativação R$ 197,00</p>
        </div>
      </div>

      <div className="grid gap-4 border-y border-white py-8">
        <span>Incluso:</span>
        <ul className="grid gap-4">
          <li className="inline-flex items-center gap-2">
            <CheckIcon className="w-5 text-white" />
            <span>
              Website com até 3 páginas
            </span>
          </li>

          <li className="inline-flex items-center gap-2">
            <CheckIcon className="w-5 text-white" />
            <span>
              Assinatura mensal
            </span>
          </li>

          <li className="inline-flex items-center gap-2">
            <CheckIcon className="w-5 text-white" />
            <span>
              Sem fidelidade
            </span>
          </li>

          <li className="inline-flex items-center gap-2">
            <CheckIcon className="w-5 text-white" />
            <span>
              Hospedagem e domínio
            </span>
          </li>

          <li className="inline-flex items-center gap-2">
            <CheckIcon className="w-5 text-white" />
            <span>
              Integração com WhatsApp
            </span>
          </li>
        </ul>
      </div>

      <Button asChild variant={'white'} className="text-center font-bold">
        <a href={siteConfig.links.whatsapp} target="_blank" rel="noopener noreferrer">
          Esse é ideal para mim
        </a>
      </Button>
    </div>
  );
};


const CardSitePremium: React.FC = () => {
  return (
    <div className="grid gap-8 rounded-3xl border border-secondary bg-secondary/10 px-6 py-8 lg:px-8">
      <header className="gris-cols-1 grid md:grid-cols-2">
        <div className="grid grid-cols-1 gap-2">
          <span className="text-2xl font-semibold">Site Premium</span>
          <span >Para projeto personalizado e único</span>
        </div>

        <div className="mt-6 lg:mt-0 lg:text-right">
          <span className="text-2xl font-semibold">Sob Consulta </span>
        </div>
      </header>

      <div className="border-y border-white py-8">
        <p className="mb-4">Incluso:</p>

        <div className="grid grid-cols-1 lg:grid-cols-2">
          <ul className="grid gap-4">
            <li className="inline-flex items-center gap-2">
              <CheckIcon className="w-5 text-white" />
              <span> UX - Copywhiting </span>
            </li>

            <li className="inline-flex items-center gap-2">
              <CheckIcon className="w-5 text-white" />
              <span>UX - Estudo de mercado</span>
            </li>

            <li className="inline-flex items-center gap-2">
              <CheckIcon className="w-5 text-white" />
              <span>UI - Style Guide</span>
            </li>

            <li className="inline-flex items-center gap-2">
              <CheckIcon className="w-5 text-white" />
              <span>UI - Layout personalizado</span>
            </li>

            <li className="inline-flex items-center gap-2">
              <CheckIcon className="w-5 text-white" />
              <span>Desenvolvimento</span>
            </li>
          </ul>

          <ul className="grid gap-4">
            <li className="inline-flex items-center gap-2">
              <CheckIcon className="w-5 text-white" />
              <span>Domínio</span>
            </li>

            <li className="inline-flex items-center gap-2">
              <CheckIcon className="w-5 text-white" />
              <span>Blog e CMS</span>
            </li>

            <li className="inline-flex items-center gap-2">
              <CheckIcon className="w-5 text-white" />
              <span>Hospedagem Premium</span>
            </li>

            <li className="inline-flex items-center gap-2">
              <CheckIcon className="w-5 text-white" />
              <span>Integração com WhatsApp</span>
            </li>

            <li className="inline-flex items-center gap-2">
              <CheckIcon className="w-5 text-white" />
              <span>Suporte</span>
            </li>
          </ul>
        </div>
      </div>

      <Button asChild variant={'secondary'} className="text-center font-bold">
        <a href={siteConfig.links.whatsapp} target="_blank" rel="noopener noreferrer">
          Falar com um especialista
        </a>
      </Button>
    </div>
  );
};
