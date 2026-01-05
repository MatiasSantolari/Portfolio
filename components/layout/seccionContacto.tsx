'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Github, Linkedin, Mail, Copy, Check } from 'lucide-react'

export function SeccionContacto() {
  const [copiado, setCopiado] = useState(false)
  const email = "santolarimatias@gmail.com"

  const copiarEmail = () => {
    navigator.clipboard.writeText(email)
    setCopiado(true)
    // Volver al estado original después de 2 segundos
    setTimeout(() => setCopiado(false), 2000)
  }

  return (
    <section id="contacto" className="py-8 border-t space-y-8">
      <div className="max-w-6xl mx-auto text-center space-y-8 px-4">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Contacto</h2>
          <p className="text-muted-foreground text-lg max-w-[600px] mx-auto">
            Actualmente estoy en búsqueda de nuevos desafíos profesionales donde pueda aportar mis conocimientos
            en analisis y desarrollo de sistemas. Ya sea para un puesto en equipo o un proyecto puntual,
            mi bandeja de entrada siempre está abierta.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          {/* LinkedIn */}
          <Button size="lg" className="gap-2 group" asChild>
            <a href="http://www.linkedin.com/in/matias-santolari" target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-5 h-5 transition-transform group-hover:-rotate-12" />
              LinkedIn
            </a>
          </Button>

          {/* Mailto */}
          <Button variant="outline" size="lg" className="gap-2 group" asChild>
            <a href={`mailto:${email}`}>
              <Mail className="w-5 h-5 transition-transform group-hover:-rotate-12" />
              Enviar Correo
            </a>
          </Button>

          {/* Botón de Copiar */}
          <Button 
            variant="secondary" 
            size="lg" 
            className="gap-2 min-w-[160px] cursor-pointer group transition-all hover:opacity-80" 
            onClick={copiarEmail}
          >
            {copiado ? (
              <>
                <Check className="w-5 h-5 text-green-600 dark:text-green-400" />
                ¡Copiado!
              </>
            ) : (
              <>
                <Copy className="w-5 h-5 transition-transform group-hover:-rotate-12" />
                Copiar Email
              </>
            )}
          </Button>

          {/* GitHub */}
          <Button variant="ghost" size="lg" className="gap-2 group" asChild>
            <a href="https://github.com/MatiasSantolari" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5 transition-transform group-hover:-rotate-12" />
              GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
