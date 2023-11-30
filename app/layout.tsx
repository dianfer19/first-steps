import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import './globals.css'
import React from "react";

const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {
    title: 'Dbjsystem - Soluciones Tecnológicas y Desarrollo a Medida',
    description: 'Dbjsystem ofrece servicios profesionales de desarrollo de software, soluciones tecnológicas ' +
        'personalizadas y asesorías expertas para impulsar tu negocio. Transformando ideas en realidad y llevando' +
        ' empresas al siguiente nivel.',
    keywords: 'desarrollo de software, soluciones tecnológicas, asesorías tecnológicas, servicios IT, ' +
        'innovación tecnológica',
    robots: 'index, follow'
};


export default function RootLayout({children,}: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                {children}
            </body>
        </html>
    )
}
