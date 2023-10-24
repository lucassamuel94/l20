import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { animations } from "@/styles/animations";
import { motion } from 'framer-motion';
import Image from "next/image";

export function SitePremium() {
  return (

    <section id='sobre_site_premium' className="container flex flex-col-reverse gap-20 border-t border-white/10 md:flex-row">
      <motion.div
        variants={animations}
        initial={"openLeft"}
        whileInView={'whileLeft'}
        transition={{ duration: 1, delay: 0.2 }}
        className="grid-row-2 grid space-y-1">
        <Image src='/site-premium-01.png' alt='Imagem com vários print de telas desenvolvidas pela equipe da L20' width={818} height={555} quality={100} className="lg:h-full" />
        <Image src='/site-premium-02.png' alt='Imagem com vários print de telas desenvolvidas pela equipe da L20' width={818} height={555} quality={100} className="lg:h-full" />
      </motion.div>

      <motion.div
        variants={animations}
        initial={"openLeft"}
        whileInView={'whileLeft'}
        transition={{
          duration: 1, delay: 0.7
        }}
        className="flex flex-col md:max-w-[414px]">
        <span className="font-semibold text-primary">Ualll 😁</span>
        <h3 className="heading2 mt-4">Já conhece a nossa opção de site Premium?</h3>
        <p className="mt-6">Você tem um projeto único e quer marcar sua presença no mundo digital? Quer ter um site impactante e que te gere resultados? E que tal ter uma integração com WhatsApp, para direcionar seus leads diretamente? Ou até mesmo ter um formulário personalizado no seu próprio site... Eitaaaa, mal comecei e falar e olha a infinidade de possibilidades.</p>

        <ul className="mt-8 space-y-6">
          <li className="space-y-4">
            <Image src='/icon-item-ux.png' alt='' width={48} height={48} className="" />
            <h4 className="text-xl font-bold">UI/UX</h4>
            <p>Faremos todo um estudo de caso, persona, tom de voz, wireframe, e vários teste de usabilidade, para você alcançar o seu resultado antes do esperado.</p>
          </li>

          <li className="space-y-4">
            <Image src='/icon-item-dev.png' alt='' width={48} height={48} className="" />
            <h4 className="text-xl font-bold">Desenvolvimento e Suporte</h4>
            <p>Além de utilizarmos as melhores tecnologias para o desenvolvimento, você terá um suporte prioritário de forma vitalícia com a L20.</p>
          </li>

        </ul>

        <Button variant='primary' className="mt-10 w-max" asChild>
          <a href={siteConfig.links.whatsapp} target="_blank">
            Falar com um especialista
          </a>
        </Button>
      </motion.div>

    </section>
  )
}
