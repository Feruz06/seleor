import { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'
import React, { FC } from 'react'

import { ChildProps } from '@/types'
import Navbar from '@/components/shared/navbar'
import { Toaster } from '@/components/ui/toaster'

export const montserrat = Montserrat({
	weight: ['400', '500', '600', '700', '800', '900'],
	subsets: ['latin'],
})

export const metadata: Metadata = {
	title: 'Seleor',
	description: 'Seleor is a modern, minimalistic, and accessible market.',
	keywords: ['next.js', 'react', 'typescript', 'tailwindcss', 'geist-ui'],
}

const RootLayout: FC<ChildProps> = ({ children }) => {
	return (
		<html lang='en'>
			<body className={`${montserrat.className} antialised`}>
				<Navbar />
				<main className='container max-w-6xl mt-24'>{children}</main>
				<Toaster />
				{/* Footer */}
			</body>
		</html>
	)
}

export default RootLayout
