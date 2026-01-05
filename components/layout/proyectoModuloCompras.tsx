'use client'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { CarouselPortfolio } from '@/components/layout/carouselPortfolio'
import { Github, FileSearch } from 'lucide-react'
import { useState } from 'react'
import { ModalDetalleProyecto } from '@/components/layout/modalDetalleProyecto'

export function ProyectoModuloCompras(){
    const imgSistModuloCompras = [
    "/Portfolio/images/projects/sistModuloCompras/modeloDominioModuloCompras.png",
    "/Portfolio/images/projects/sistModuloCompras/DERSQLServer.png",
    "/Portfolio/images/projects/sistModuloCompras/0-inicio.jpg",
    "/Portfolio/images/projects/sistModuloCompras/1-compra-getAll-vacio.jpg",
    "/Portfolio/images/projects/sistModuloCompras/2-compra-getAll-lleno.jpg",
    "/Portfolio/images/projects/sistModuloCompras/3-descuento-post-vacio.jpg",
    "/Portfolio/images/projects/sistModuloCompras/4-descuento-post-lleno.jpg",
    "/Portfolio/images/projects/sistModuloCompras/5-descuento-post-enviado.jpg",
    "/Portfolio/images/projects/sistModuloCompras/6-producto-getOne-vacio.jpg",
    "/Portfolio/images/projects/sistModuloCompras/7-producto-getOne-lleno.jpg",
    "/Portfolio/images/projects/sistModuloCompras/8-proveedor-post-lleno.jpg",
    "/Portfolio/images/projects/sistModuloCompras/9-proveedor-post-enviado.jpg",
    "/Portfolio/images/projects/sistModuloCompras/10-proveedor-getOne-lleno.jpg",
    "/Portfolio/images/projects/sistModuloCompras/11-proveedor-put-enviado.jpg",
    "/Portfolio/images/projects/sistModuloCompras/12-proveedor-put-lleno.jpg",
    "/Portfolio/images/projects/sistModuloCompras/13-proveedor-delete-enviado.jpg",
    "/Portfolio/images/projects/sistModuloCompras/14-proveedor-getOne-noEncontrado.jpg",
    ]
    const detallesTecnicos = {
      titulo: "Módulo de Compras ERP",
      contexto: "Fui contactado por un emprendimiento de software administrativo para liderar el desarrollo del Backend de su nuevo módulo de compras. El requerimiento inicial era abierto, lo que me permitió realizar un proceso completo de ingeniería de requerimientos, desde la recolección inicial mediante entrevistas hasta la creación del modelo de dominio conceptual.",
      decisiones: "Opté por ASP.NET Core Web API debido a su robustez y seguridad de tipos, crítica para procesos financieros. Elegí SQL Server como motor relacional dado que el modelo de dominio presentaba relaciones complejas y requería una fuerte integridad referencial. Estructuré el proyecto bajo principios de Clean Architecture para desacoplar la lógica de negocio de la infraestructura.",
      retos: "El mayor desafío fue la volatilidad de los requerimientos. A medida que avanzábamos, identifiqué la necesidad de atributos críticos no contemplados. Esto lo resolví mediante migraciones ágiles con EF Core. Además, optimicé las respuestas mediante DTOs y Eager Loading, permitiendo que las consultas devolvieran información compuesta (como el detalle del proveedor dentro del producto) sin sacrificar rendimiento.",
      aprendizajes: "Este proyecto reforzó la importancia de la validación temprana de modelos. Aprendí a diseñar APIs flexibles que no solo entregan datos, sino información lista para el consumo del cliente, mejorando la experiencia del equipo frontend."
    };
    const [isModalOpen, setIsModalOpen] = useState(false); // Estado para el modal
    return(
      <>
        <Card className="overflow-hidden"> {/* overflow-hidden evita que contenido se salga de los bordes redondeados */}
          <CardHeader>
            <CardTitle className="text-2xl">Modulo de Compras</CardTitle>
            <CardDescription>
              Desarrollo de un modulo de compras para un ERP, a modo de microservicio.
              Dicho sistema contiene todos los requerimientos fundamentales que necesita un modulo de compras.
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
                      <li>Gestión de los proveedores</li>
                      <li>Gestión de los productos</li>
                      <li>Gestión de las compras/pedidos</li>
                      <li>Seguimiento de los estados de las compras/pedidos</li>
                    </ul>
                  </div>
                  <h5 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground mb-2">
                    Tecnologías aplicadas sobre el backend
                  </h5>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="text-csharp border-csharp">C#</Badge>
                    <Badge variant="outline" className="text-dotnet border-dotnet">.NET</Badge>
                    <Badge variant="outline" className="text-sqlserver border-sqlserver">SQL Server</Badge>
                    <Badge variant="outline" className="text-dotnet border-dotnet">Entity Framework Core</Badge>
                    <Badge variant="outline" className="text-aspnetwebapi border-aspnetwebapi">ASP NET Core Web Api</Badge>
                  </div>
                </div>
                {/* Columna Derecha: El Carrusel */}
                <div className="w-full md:w-[400px] lg:w-[450px] mx-auto">
                  <CarouselPortfolio
                    images={imgSistModuloCompras}
                    altBase="Captura del sistema gestor del modulo de compras"
                  />
                </div>
              </div>
            </CardContent>
            <CardFooter className="bg-muted/50 border-t p-4 flex justify-between items-center rounded-(--radius-lg)">
              <span className="text-xs text-muted-foreground">Trabajo Freelance</span>
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
                  <a href="https://github.com/MatiasSantolari/ModuloComprasBackend.git" target="_blank">
                    <Github className="w-4 h-4 mr-2" /> GitHub-Backend
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