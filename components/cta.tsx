import { siteConfig } from "@/config/site";
import Image from "next/image";
import { Button } from "./ui/button";

export default function CTA() {
  return (
    <div className="container">
      <div className="grid grid-cols-1 gap-20 rounded-3xl bg-[url('/cta-bg.webp')] bg-cover bg-center bg-no-repeat px-6 py-24 md:grid-cols-[414px,1fr] md:items-center lg:px-16">
        <div className="flex flex-col space-y-6">
          <h3 className="text-4xl font-bold lg:text-5xl lg:leading-tight "><span className="block pb-2 text-lg font-medium">Não Espere Mais!</span> <span>Comece Seu Projeto Personalizado!</span></h3>
          <p className="mb-10">Conheça o nosso modelo de criação personalizada, trabalhamos em parceria com você e sua equipe, com processos otimizados, simples!</p>

          <Button variant={"secondary"} className="w-max" asChild>
            <a href={siteConfig.links.whatsapp} target="_blank" rel="noopener noreferrer">Conheça as vantagens</a>
          </Button>
        </div>
        <Image src='/cta.webp' alt='' width={818} height={490} />
      </div>
    </div>
  )
}
