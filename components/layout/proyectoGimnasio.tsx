'use client'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { CarouselPortfolio } from '@/components/layout/carouselPortfolio'
import { Github, FileSearch } from 'lucide-react'
import { useState } from 'react'
import { ModalDetalleProyecto } from '@/components/layout/modalDetalleProyecto'

export function ProyectoGimnasio(){
    const imgSistGestorGimnasio = [
    "/images/projects/sistGestorGimnasio/EER_Diagram.png",
    "/images/projects/sistGestorGimnasio/1-paginainicial.png",
    "/images/projects/sistGestorGimnasio/2-login.png",
    "/images/projects/sistGestorGimnasio/3-maquina_elemento.png",
    "/images/projects/sistGestorGimnasio/4-maquina_elemento_agregar.png",
    "/images/projects/sistGestorGimnasio/5-tipo_clase.png",
    "/images/projects/sistGestorGimnasio/6-tipo_clase_filtrar.png",
    "/images/projects/sistGestorGimnasio/7-tipo_clase_editar_1.png",
    "/images/projects/sistGestorGimnasio/8-tipo_clase_listar_actualizado.png",
    "/images/projects/sistGestorGimnasio/9-cuotas.png",
    "/images/projects/sistGestorGimnasio/10-reportecuotas_antes.png",
    "/images/projects/sistGestorGimnasio/11-reportecuotas_despues.png",
    "/images/projects/sistGestorGimnasio/12-reportecuotas_impresion.png",
    "/images/projects/sistGestorGimnasio/13-clases.png",
    "/images/projects/sistGestorGimnasio/14-reporte_clases.png",
    "/images/projects/sistGestorGimnasio/15-socios.png",
    "/images/projects/sistGestorGimnasio/16-socios_agregar_antes.png",
    "/images/projects/sistGestorGimnasio/17-socios_agregar_despues.png",
    "/images/projects/sistGestorGimnasio/18-ingreso_socio.png",
    "/images/projects/sistGestorGimnasio/19-ingreso_socio_aceptado.png",
    "/images/projects/sistGestorGimnasio/20-ingreso_socio_fallido_antes.png",
    "/images/projects/sistGestorGimnasio/21-ingreso_socio_fallido_despues.png",
    ]
    const detallesTecnicos = {
      titulo: "Sistema de Gestión de Servicio Técnico",
      contexto: "Desarrollado como proyecto integrador para la obtención del título de Analista Universitario de Sistemas. El desafío consistió en diseñar y construir una plataforma integral que resolviera la desincronización entre las áreas administrativa, pedagógica y de cobranzas de un gimnasio. Trabajamos en un equipo multidisciplinario para cubrir un abanico extenso de requerimientos: desde el control de acceso y gestión de membresías, hasta la digitalización de rutinas con contenido multimedia y el seguimiento de progreso de los socios.",
      decisiones: "Adoptamos un marco de trabajo Ágil (Scrum y Kanban) para gestionar un backlog complejo, lo que nos permitió realizar entregas incrementales y ajustes rápidos. Optamos por una arquitectura de Control de Acceso Basado en Roles (RBAC), diferenciando claramente las capacidades de Administradores, Profesores y Socios.",
      retos: "El reto más crítico fue la desincronización y los cuellos de botella en la integración de los diferentes módulos. Lo solucionamos implementando ceremonias de Scrum y estableciendo estructuras concretas para la entrega efectiva de los artefactos. Esto nos permitió lograr una homogeneidad en el desarrollo, asegurando que cada entregable (documentación, endpoints, componentes) cumpliera con los mismos estándares de calidad y diseño antes de su integración. La aplicación de Kanban fue clave para evitar que un integrante se viera desbordado mientras otros estaban ociosos. Esta estructura no solo resolvió los conflictos de organización, sino que nos permitió cumplir con el cronograma de la facultad, entregando un producto testeado y funcional.",
      aprendizajes: "Este proyecto fue fundamental para el desarrollo de mis habilidades blandas (Soft Skills). Aprendí que un ambiente organizado y comunicativo es tan importante como la calidad del código. Desarrollé capacidades de comunicación asertiva y negociación dentro del equipo para priorizar tareas bajo presión. Entendí que el rol del Analista es ser el puente entre el problema y la solución, y que el éxito de un sistema depende de una gestión humana coordinada, una documentación precisa y un compromiso compartido con los estándares de calidad del software."
    };
    const [isModalOpen, setIsModalOpen] = useState(false); // Estado para el modal
    return(
      <>
        <Card className="overflow-hidden"> {/* overflow-hidden evita que contenido se salga de los bordes redondeados */}
          <CardHeader>
            <CardTitle className="text-2xl">Sistema Gestor Para Gimnasios</CardTitle>
            <CardDescription>
              Desarrollo integral de un sistema gestor para gimnasios en equipo bajo metodologías ágiles (Scrum y Kanban).
              Como parte del proyecto final para el titulo de Analista Universitario de Sistemas de Información.
            </CardDescription>
            <CardContent>
              {/* Contenedor Flex: Columna en móvil, Fila en escritorio */}
              <div className="flex flex-col md:flex-row gap-8 p-2">
                {/* Columna Izquierda: Detalles del proyecto */}
                <div className="flex-1 space-y-4">
                  <div>
                    <h4 className="font-semibold text-lg uppercase tracking-wider text-muted-foreground mb-2">
                      Características Principales
                    </h4>
                    <ul className="list-disc list-inside text-sm space-y-1 text-gray-700">
                      <li>Gestión completa de socios y membresías.</li>
                      <li>Gestión de los ejercicios, equipos del gimnasio, y empleados del mismo</li>
                      <li>Módulo de pagos y control de caja.</li>
                      <li>Seguimiento de rutinas y asistencias.</li>
                    </ul>
                  </div>
                  <h5 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground mb-2">
                    Tecnologías aplicadas sobre el frontend
                  </h5>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="text-typescript border-typescript">Typescript</Badge>
                    <Badge variant="outline" className="text-angular border-angular">Angular CLI</Badge>
                  </div>
                  <h5 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground mb-2">
                    Tecnologías aplicadas sobre el backend
                  </h5>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="text-typescript border-typescript">Typescript</Badge>
                    <Badge variant="outline" className="text-nodejs border-nodejs">Node.js</Badge>
                    <Badge variant="outline" className="text-mysql border-mysql">MySQL</Badge>
                    <Badge variant="outline" className="text-expressjs border-expressjs">Express.js</Badge>
                  </div>
                </div>
                {/* Columna Derecha: El Carrusel */}
                <div className="w-full md:w-[400px] lg:w-[450px] mx-auto">
                  <CarouselPortfolio
                    images={imgSistGestorGimnasio}
                    altBase="Captura del sistema gestor de gimnasios"
                  />
                </div>
              </div>
            </CardContent>
            <CardFooter className="bg-muted/50 border-t p-4 flex justify-between items-center rounded-(--radius-lg)">
              <span className="text-xs text-muted-foreground">Equipo de 4 integrantes</span>
              <div className="flex gap-3">
                {/* BOTÓN MODAL: Abrir Análisis Técnico */}
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="gap-2 cursor-pointer group transition-all hover:opacity-80"
                  onClick={() => setIsModalOpen(true)}
                >
                  <FileSearch className="w-4 h-4" /> Análisis Técnico
                </Button>
                <Button variant="outline" size="sm" className="gap-2" asChild>
                  <a href="https://github.com/ManuelVelasco99/HP-UTN-Gimnasio-Back" target="_blank">
                    <Github className="w-4 h-4 mr-2" /> GitHub-Backend
                  </a>
                </Button>
                <Button variant="outline" size="sm" className="gap-2" asChild>
                  <a href="https://github.com/ManuelVelasco99/HP-UTN-Gimnasio-Front" target="_blank">
                    <Github className="w-4 h-4 mr-2" /> GitHub-Frontend
                  </a>
                </Button>
              </div>
            </CardFooter>
          </CardHeader>
        </Card>

        {/* Renderizado del Modal */}
        <ModalDetalleProyecto 
          isOpen={isModalOpen} 
          onClose={() => setIsModalOpen(false)} 
          proyecto={detallesTecnicos} 
        />
      </>
    )
}