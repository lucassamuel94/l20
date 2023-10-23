import { FacebookIcon, InstagramIcon, LinkedinIcon } from "lucide-react";
import Link from "next/link";
import { Icons } from '../components/icons';

export default function Footer() {
  return (
    <footer className="bg-[#000] pb-10 pt-20 lg:pt-28">
      <div className="container space-y-10 lg:space-y-20">
        <div className="space-y-14 lg:flex lg:items-start lg:justify-between lg:space-y-0">
          <div>
            <Link href='/'>
              <Icons.logo className="h-8 lg:h-12" />
            </Link>

            <div className="mt-4 grid gap-1 text-sm">
              <span className="font-semibold">Contato:</span>
              <a href="tel:+5534997741210" className="mt-1">(34) 99774-1210</a>
              <a href="mailto:contato@l20comunicacoes.com.br">contato@l20comunicacoes.com.br</a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-14 md:grid-cols-2 lg:gap-20">
            <div className="space-y-4">
              <span className="font-bold">Links</span>
              <ul className="space-y-4 text-sm">
                <li>
                  <Link href={'/'}>
                    Home
                  </Link>
                </li>

                <li>
                  <Link href={'/'}>
                    Site por Assinatura
                  </Link>
                </li>

                <li>
                  <Link href={'/'}>
                    Site Premium
                  </Link>
                </li>

                <li>
                  <Link href={'/'}>
                    Contato
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <span className="font-bold">Siga-nos</span>
              <ul className="space-y-4 text-sm">
                <li>
                  <a href="#" className="inline-flex items-center gap-2">
                    <FacebookIcon size={16} />
                    <span>Facebook</span>
                  </a>
                </li>

                <li>
                  <a href="#" className="inline-flex items-center gap-2">
                    <InstagramIcon size={16} />
                    <span>Instagram</span>
                  </a>
                </li>

                <li>
                  <a href="#" className="inline-flex items-center gap-2">
                    <LinkedinIcon size={16} />
                    <span>Linkedin</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/20 py-8 text-center text-sm">
          <p>© 2023 L20. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
