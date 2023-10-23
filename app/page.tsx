import { siteConfig } from "@/config/site";

import Link from "next/link";

import CTA from "@/components/cta";
import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";
import { Cases, NossoProcesso, SitePorAssinatura, SitePremium, Valores, Vantagens } from "./sections";



export default function Home() {
  return (
    <main className="flex flex-col items-start bg-[url('/bg-hero-home.png')] bg-top bg-no-repeat">
      <header className="container pt-6 lg:flex lg:items-center lg:justify-between">
        <>
          <h1 className="sr-only">L20 Comunicações</h1>
          <Link href={'/'}>
            <Icons.logo className="h-8 lg:h-12" />
          </Link>
        </>

        <Button className="hidden items-center gap-2 lg:inline-flex ">
          <span>Enviar mensagem</span>
          <MoveRight />
        </Button>
      </header>

      {/* HERO */}
      <section id='hero' className="container flex flex-col items-start py-20 lg:py-28">

        <div className="flex max-w-3xl flex-col">
          <h2 className="heading2">O seu estúdio de design especialista em sites incríveis</h2>
          <p className="mt-6 text-lg">Equilibrando ciência e criatividade, criamos websites, produtos e marcas com personalidade, impactando clientes, pessoas e negócios.</p>
          <Button asChild className="mt-10 w-max">
            <a href={siteConfig.links.whatsapp} target="_blank">
              Vamos construir um site?
            </a>
          </Button>

        </div>
      </section>
      <>
        <SitePorAssinatura />
        <SitePremium />
        <Cases />
        <Vantagens />
        <CTA />
        <NossoProcesso />
        <Valores />
      </>
    </main>
  )
}
