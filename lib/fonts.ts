import { Archivo } from 'next/font/google'

export const archivo = Archivo({
	subsets: ['latin'],
	display: 'swap',
	weight: ['400', '500', '600', '700'],
	variable: '--font-archivo',
})
