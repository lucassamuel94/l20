import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { BadgeCheck } from "lucide-react";

export function Vantagens() {
  const dataList = [{
    id: 1,
    title: 'Processo otimizado',
    description: 'Desenvolvemos um processo de criação otimizado para construir sites excelentes e sem atraso no cronograma. Dessa forma você ganha tempo e escala no seu projeto.'
  },
  {
    id: 2,
    title: 'Responsivo',
    description: 'Responsivo por padrão. Garantimos que seus usuários tenham uma experiência perfeita, independente do dispositivo em que estiverem.'
  },
  {
    id: 3,
    title: 'Entrega rápida',
    description: 'Não perca tempo procurando uma agência ou freelancers. Pule as intermináveis ​​idas e vindas e obtenha o trabalho desenvolvido em velocidade recorde!'
  },
  {
    id: 4,
    title: 'Sem taxas extras',
    description: 'Livre-se das taxas de manutenção, nós entregamos um site livre de dores de cabeça.'
  },
  {
    id: 5,
    title: 'Alto desempenho',
    description: 'Sites rápidos são bons para os negócios. Garantimos que nossos sites sejam tão rápidos quanto um relâmpago!'
  },
  {
    id: 6,
    title: 'Elementos animados',
    description: 'Hoje você precisa cada vez mais prender a atenção do seu público e elementos estáticos podem não ser o suficiente. Por isso aprimoramos seu design com animações incríveis!'
  }]

  return (
    <section id='vantagens' className="container grid grid-cols-1 gap-20 border-t border-white/10 lg:grid-cols-[414px,1fr]">
      <div className="">
        <h3 className="mb-10 text-4xl font-semibold lg:text-5xl/[57.6px]">
          Vantagens em ter o seu website desenvolvido pela L20
        </h3>

        <Button variant='white' asChild>
          <a href={siteConfig.links.whatsapp} target="_blank" rel="noopener noreferrer">
            Quero ter um site
          </a>
        </Button>
      </div>

      <ul className="grid grid-cols-1 gap-20 md:grid-cols-2 lg:gap-12">

        {dataList.map(({ id, title, description }) => (
          <li key={id} className="grid grid-cols-[32px,1fr] gap-3">
            <BadgeCheck size={24} className="mt-1 text-secondary" />

            <div className="space-y-6">
              <h4 className="text-2xl font-semibold">{title}</h4>
              <p className="">{description}</p>
            </div>
          </li>

        ))}

      </ul>

    </section>
  )
}
