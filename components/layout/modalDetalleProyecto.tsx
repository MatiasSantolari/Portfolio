'use client'

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"
import { ScrollArea } from "@/components/ui/scroll-area"

interface DetalleProyectoProps {
  isOpen: boolean;
  onClose: () => void;
  proyecto: {
    titulo: string;
    contexto: string;
    decisiones: string;
    retos: string;
    aprendizajes: string;
  };
}

export function ModalDetalleProyecto({ isOpen, onClose, proyecto }: DetalleProyectoProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl max-h-[90vh] p-0 overflow-hidden border-border/40">
        <DialogHeader className="p-6 pb-2">
          <DialogTitle className="text-2xl font-bold text-purple-600 dark:text-purple-400">
            {proyecto.titulo}
          </DialogTitle>
          <DialogDescription className="text-base font-medium">
            Análisis detallado y arquitectura del proyecto
          </DialogDescription>
        </DialogHeader>

        <ScrollArea className="p-6 pt-2 h-full max-h-[70vh]">
          <div className="space-y-8 pb-8">
            {/* SECCIÓN 1: CONTEXTO */}
            <section>
              <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                <span className="w-1 h-6 bg-purple-600 rounded-full"></span>
                Contexto y Problemática Inicial
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {proyecto.contexto}
              </p>
            </section>

            {/* SECCIÓN 2: DECISIONES */}
            <section>
              <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                <span className="w-1 h-6 bg-purple-600 rounded-full"></span>
                Decisiones de Arquitectura
              </h3>
              <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                {proyecto.decisiones}
              </p>
            </section>

            {/* SECCIÓN 3: RETOS */}
            <section>
              <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                <span className="w-1 h-6 bg-purple-600 rounded-full"></span>
                Retos Técnicos y Soluciones
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {proyecto.retos}
              </p>
            </section>

            {/* SECCIÓN 4: APRENDIZAJES */}
            <section className="bg-purple-50/50 dark:bg-purple-950/20 p-4 rounded-lg border border-purple-100 dark:border-purple-900">
              <h3 className="text-lg font-semibold mb-2 text-primary-500 dark:text-primary-300">
                Aprendizajes y Visión Futura
              </h3>
              <p className="text-sm italic text-muted-foreground">
                {proyecto.aprendizajes}
              </p>
            </section>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  )
}