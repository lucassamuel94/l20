'use client'
import { siteConfig } from "@/config/site";
import Link from "next/link";

import { Icons } from "@/components/icons";
import { MoveRight } from "lucide-react";

import CTA from "@/components/cta";
import { Button } from "@/components/ui/button";
import { Cases, NossoProcesso, SitePorAssinatura, SitePremium, Valores, Vantagens } from "./sections";

import { animations, transition } from "@/styles/animations";
import { motion } from 'framer-motion';
import Script from "next/script";



export default function Home() {

  return (
    <main className="flex flex-col items-start bg-[url('/bg-hero-home.webp')] bg-top bg-no-repeat">
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-09WK82CGM3"></Script>
      <Script id='google-analytics'>
        {
          `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-09WK82CGM3');
          `
        }
      </Script>

      <motion.header
        variants={animations}
        initial={"openUp"}
        animate={'whileUp'}
        transition={transition}
        className="container pt-6 lg:flex lg:items-center lg:justify-between">
        <div>
          <h1 className="sr-only">L20 Comunicações</h1>
          <Link href={'/'} tabIndex={1}>
            <Icons.logo className="h-8 lg:h-12" />
          </Link>
        </div>

        <Button className="hidden items-center gap-2 lg:inline-flex" asChild>
          <a href={siteConfig.links.whatsapp}>
            <span>Enviar mensagem</span>
            <MoveRight />
          </a>
        </Button>
      </motion.header>

      {/* HERO */}
      <section id='hero' className="container flex flex-col items-start py-20 lg:py-28">

        <div className="flex max-w-3xl flex-col">
          <motion.h2 className="heading2"
            variants={animations}
            initial={"openUp"}
            animate={'whileUp'}
            transition={{ duration: 1, delay: 0.5 }}
          >
            O seu estúdio de design especialista em sites incríveis
          </motion.h2>
          <motion.p
            variants={animations}
            initial={"openUp"}
            animate={'whileUp'}
            transition={{ duration: 1, delay: 0.7 }}
            className="mt-6 text-lg">Equilibrando ciência e criatividade, criamos websites, produtos e marcas com personalidade, impactando clientes, pessoas e negócios.</motion.p>

          <motion.div
            variants={animations}
            initial={"openUp"}
            animate={'whileUp'}
            transition={{ duration: 1, delay: 0.9 }}
            className="mt-10">
            <Button asChild className="w-max">
              <a href={siteConfig.links.whatsapp} target="_blank">
                Vamos construir um site?
              </a>
            </Button>
          </motion.div>

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
