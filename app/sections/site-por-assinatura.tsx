import { Button } from "@/components/ui/button";
import { CheckIcon } from "lucide-react";
import Image from "next/image";

export function SitePorAssinatura() {
  return (
    <section id='sobre_site_por_assinatura' className="container flex flex-col gap-20 md:flex-row">
      <div className="flex flex-col md:max-w-[414px]">
        <span className="font-semibold text-secondary">Novidade 👏🏽</span>
        <h3 className="heading2 mt-4">Site por assinatura</h3>
        <p className="mt-6">É isso mesmo, com a L20, você pode colocar seu site no ar, durante o tempo que for necessário, muito similar a uma assinatura da Netflix, então não deixe para depois e comece agora mesmo.</p>

        <ul className="mt-8 space-y-4">
          <li className="inline-flex items-center gap-2">
            <CheckIcon className="w-5 text-secondary" />
            <span>
              Sem fidelidade
            </span>
          </li>
          <li className="inline-flex items-center gap-2">
            <CheckIcon className="w-5 text-secondary" />
            <span>
              Domínio e hospedagem inclusa
            </span>
          </li>

          <li className="inline-flex items-center gap-2">
            <CheckIcon className="w-5 text-secondary" />
            <span>
              Somente no cartão de crédito
            </span>
          </li>
        </ul>

        <Button variant='secondary' className="mt-10 w-max">
          Contratar agora
        </Button>
      </div>
      <div>
        <Image src='/site-por-assinatura.png' alt='Imagem com vários print de telas desenvolvidas pela equipe da L20' width={818} height={555} quality={100} />
      </div>
    </section>
  )
}
