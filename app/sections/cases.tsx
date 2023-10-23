import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function Cases() {
  return (
    <section className="container space-y-20">
      <div className="mx-auto grid max-w-3xl grid-cols-1 items-center text-center">
        <h3 className="font-semibold">Cases</h3>
        <h4 className="text-4xl font-semibold lg:text-5xl">Conheça alguns trabalhos em destaque</h4>
      </div>

      <ul className="space-y-16">
        <li className="grid grid-cols-1 overflow-hidden rounded-3xl bg-[#18181B] lg:grid-cols-[648px,1fr] lg:items-center">
          <div className="px-6 py-16 lg:px-16">
            <div className="space-y-2">
              <span className="font-medium text-primary">Web Design</span>
              <h5 className="text-2xl font-semibold lg:text-3xl">ROMMI - Concept Design</h5>
            </div>

            <blockquote className="mt-10 space-y-4">
              <svg width="39" height="31" viewBox="0 0 39 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.664 0.959999L9.792 14.016C11.968 14.144 13.76 15.008 15.168 16.608C16.64 18.144 17.376 20 17.376 22.176C17.376 24.48 16.576 26.4 14.976 27.936C13.376 29.472 11.392 30.24 9.024 30.24C6.656 30.24 4.64 29.472 2.976 27.936C1.312 26.4 0.48 24.32 0.48 21.696C0.48 20.288 0.832 18.72 1.536 16.992C2.24 15.264 3.36 13.216 4.896 10.848C6.496 8.416 8.544 5.472 11.04 2.016L11.712 0.959999H17.664ZM38.592 0.959999L30.624 14.016C32.864 14.144 34.688 15.008 36.096 16.608C37.504 18.144 38.208 20 38.208 22.176C38.208 24.48 37.408 26.4 35.808 27.936C34.272 29.472 32.32 30.24 29.952 30.24C27.52 30.24 25.472 29.472 23.808 27.936C22.208 26.4 21.408 24.32 21.408 21.696C21.408 20.288 21.76 18.72 22.464 16.992C23.168 15.264 24.288 13.216 25.824 10.848C27.36 8.416 29.376 5.472 31.872 2.016L32.64 0.959999H38.592Z" fill="white" fillOpacity="0.5" />
              </svg>

              <p className="lg:text-lg">O que mais me impressionou foi o processo, tivemos uma ou duas reuniões para poder falar sobre a nossa ideia, e a L20 conseguiu absorver, capturar todas informações e transformar um site que superou nossas expectativas, porque o site é a cara da nossa empresa, e isso foi sensacional.</p>

              <footer className="italic lg:text-lg">
                <cite>Marcos Oliveira</cite>, <cite>CEO</cite>
              </footer>
            </blockquote>

            <Button asChild className="mt-10">
              <Link href={'/cases/rommi'} className="inline-flex items-center gap-2">
                <span> Ver Projeto </span>
                <ArrowUpRight size={16} />
              </Link>
            </Button>
          </div>

          <figure>
            <Image src={'/case-placeholder-rommi.png'} alt="Imagem com print das telas desenvolvidas para o projeto da website ROMMI" width={885} height={644} quality={100} className="object-cover lg:h-[650px] lg:object-left " />
          </figure>
        </li>

        <li className="flex flex-col-reverse overflow-hidden rounded-3xl bg-[#060C22] lg:grid lg:h-[500px] lg:grid-cols-[1fr,648px] lg:justify-center">
          <figure>
            <Image src={'/case-placeholder-rafinha-turismo.png'} alt="Imagem com print das telas desenvolvidas para o projeto da website ROMMI" width={885} height={644} quality={100} className="object-cover lg:h-[650px] lg:object-right" />
          </figure>

          <div className="px-6 py-16 lg:px-16">
            <div className="space-y-2">
              <span className="font-medium text-primary">Landing Page</span>
              <h5 className="text-2xl font-semibold lg:text-3xl">Rafinha Turismo</h5>
            </div>

            <blockquote className="mt-10 space-y-4">
              <svg width="39" height="31" viewBox="0 0 39 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.664 0.959999L9.792 14.016C11.968 14.144 13.76 15.008 15.168 16.608C16.64 18.144 17.376 20 17.376 22.176C17.376 24.48 16.576 26.4 14.976 27.936C13.376 29.472 11.392 30.24 9.024 30.24C6.656 30.24 4.64 29.472 2.976 27.936C1.312 26.4 0.48 24.32 0.48 21.696C0.48 20.288 0.832 18.72 1.536 16.992C2.24 15.264 3.36 13.216 4.896 10.848C6.496 8.416 8.544 5.472 11.04 2.016L11.712 0.959999H17.664ZM38.592 0.959999L30.624 14.016C32.864 14.144 34.688 15.008 36.096 16.608C37.504 18.144 38.208 20 38.208 22.176C38.208 24.48 37.408 26.4 35.808 27.936C34.272 29.472 32.32 30.24 29.952 30.24C27.52 30.24 25.472 29.472 23.808 27.936C22.208 26.4 21.408 24.32 21.408 21.696C21.408 20.288 21.76 18.72 22.464 16.992C23.168 15.264 24.288 13.216 25.824 10.848C27.36 8.416 29.376 5.472 31.872 2.016L32.64 0.959999H38.592Z" fill="white" fillOpacity="0.5" />
              </svg>

              <p className="lg:text-lg">A L20 foi responsável por desenvolver meu site, com o preço justo e prazo de entrega impressionante. Vale muito a pena e você também irá ficar muito satisfeito.</p>

              <footer className="italic lg:text-lg">
                <cite>Rafinha</cite>, <cite>CEO</cite>
              </footer>
            </blockquote>

            <Button asChild className="mt-10">
              <Link href={'/cases/rafinha-turismo'} className="inline-flex items-center gap-2">
                <span> Ver Projeto </span>
                <ArrowUpRight size={16} />
              </Link>
            </Button>
          </div>

        </li>
      </ul>
    </section>
  )
}
