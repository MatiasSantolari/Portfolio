'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { CarouselPortfolio } from '@/components/layout/carouselPortfolio'
import { ProyectoGimnasio } from '@/components/layout/proyectoGimnasio'
import { ProyectoTiendaReparacion } from '@/components/layout/proyectoTiendaReparacion'
import { ProyectoModuloCompras } from '@/components/layout/proyectoModuloCompras'
import { SeccionHabilidadesTecnicas } from '@/components/layout/seccionHabilidadesTecnicas'
import { SeccionEducacion } from '@/components/layout/seccionEducacion'
import { SeccionContacto } from '@/components/layout/seccionContacto'
import { SeccionHero } from '@/components/layout/seccionHero'

export default function Portfolio() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-12 space-y-12">
      <SeccionHero />
      <SeccionHabilidadesTecnicas />
      <section id="proyectos" className="py-8 space-y-8">
        <div className='flex flex-col justify-between items-center'>
          <h2 className="text-3xl font-bold tracking-tight">Proyectos</h2>
        </div>
        <div className="grid grid-cols-1 gap-8 m-4"> 
          <ProyectoGimnasio />
          <ProyectoTiendaReparacion />
          <ProyectoModuloCompras />
        </div>
      </section>
      <SeccionEducacion />
      <SeccionContacto />
    </main>
  );
}
