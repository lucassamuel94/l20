'use client'

import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import Image from "next/image";
import { A11y, Navigation, Pagination, Scrollbar } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { animations } from "@/styles/animations";
import { motion } from 'framer-motion';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export function NossoProcesso() {
  const dataSwiper = [{
    id: 1,
    figure: 'descobrir',
    title: 'Descobrir',
    resume: 'Na primeira fase vamos conhecer melhor o seu projeto, entender suas necessidades e fazer algumas pesquisas.'
  },
  {
    id: 2,
    figure: 'wireframe',
    title: 'Wireframe',
    resume: 'Nessa etapa vamos desenvolver o “esqueleto” do seu website, e entender onde vão ficar todos elementos.'
  },
  {
    id: 3,
    figure: 'design',
    title: 'Design & Layout',
    resume: 'Aqui nós daremos visual e personalidade para o seu website. Ele ganhará cores, imagens, entre outras coisas.'
  },
  {
    id: 4,
    figure: 'dev',
    title: 'Desenvolver',
    resume: 'Chegou a hora do dar vida para tudo que foi criado. Incluindo animações para dar mais vida ao seu projeto.'
  },
  {
    id: 5,
    figure: 'publicar',
    title: 'Publicar',
    resume: 'Ao final de tudo vamos revisar o conteúdo e aguardamos sua validação, em seguida vamos publicar o projeto.'
  }]


  return (
    <section className="container my-10 grid grid-cols-1 gap-20 lg:grid-cols-[414px,1fr]">
      <div>
        <motion.div
          variants={animations}
          initial={"openLeft"}
          whileInView={'whileLeft'}
          transition={{ duration: 1, delay: 0.2 }} className="grid grid-cols-1">
          <div className="space-y-4">
            <h3>Nosso Processo</h3>
            <h4 className="mb-10 text-4xl font-semibold lg:text-5xl/[57.6px]">
              Como funciona
            </h4>
            <p>Temos um processo simples, claro e objetivo! Criamos e desenvolvemos pensando no melhor para a gestão do seu website no futuro.</p>
          </div>

          <Button asChild className="mt-10 w-max">
            <a href={siteConfig.links.whatsapp} target="_blank" rel="noopener noreferrer" className="">
              Quero ter um site
            </a>
          </Button>
        </motion.div>
      </div>

      <motion.div
        variants={animations}
        initial={"openLeft"}
        whileInView={'whileLeft'}
        transition={{ duration: 1, delay: 0.5 }}>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          breakpoints={{
            320: {
              slidesPerView: 1,
              centeredSlides: true,
              spaceBetween: 16,
            },
            576: {
              slidesPerView: 2,
              centeredSlides: false,
              spaceBetween: 24,
            },
            992: {
              slidesPerView: 3,
              spaceBetween: 48,
            }
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true
          }}
        >

          {dataSwiper.map(({ id, figure, title, resume }) => (
            <SwiperSlide key={id} className="relative md:!w-[300px] overflow-y-visible rounded-md bg-white/5 p-6">
              <div className="z-10 ">
                <Image src={`/figure-${figure}.png`} alt='figure' width={48} height={48} quality={100} />
              </div>

              <div className="mt-6 grid gap-6">
                <h4 className="text-3xl font-semibold">{title}</h4>
                <p>{resume}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </section>
  )
}
