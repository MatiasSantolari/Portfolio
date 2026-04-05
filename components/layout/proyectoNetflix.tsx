'use client'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { CarouselPortfolio } from '@/components/layout/carouselPortfolio'
import { Github, FileSearch } from 'lucide-react'
import { useState } from 'react'
import { ModalDetalleProyecto } from '@/components/layout/modalDetalleProyecto'

export function ProyectoNetflix(){
    const basePath = (process.env.NEXT_PUBLIC_BASE_PATH || "").replace(/\/$/, "");
    const imgSistNetflixBI = [
      `${basePath}/images/projects/sistNetflixBI/Requerimientos.png`,
      `${basePath}/images/projects/sistNetflixBI/Modelo_Dimensional.png`,
      `${basePath}/images/projects/sistNetflixBI/Home.png`,
      `${basePath}/images/projects/sistNetflixBI/General.png`,
      `${basePath}/images/projects/sistNetflixBI/Contenido_y_Calidad.png`,
      `${basePath}/images/projects/sistNetflixBI/Geografia.png`,
      `${basePath}/images/projects/sistNetflixBI/General_Argentina.png`,
      `${basePath}/images/projects/sistNetflixBI/Contenido_y_Calidad_Argentina.png`,
      `${basePath}/images/projects/sistNetflixBI/Geografia_Argentina.png`,
    ]
    const detallesTecnicos = {
      titulo: "NETFLIX Global Insights: Análisis de Distribución y Diversificación de Contenido (2008-2021)",
      contexto: "Se trata de un análisis de datos, utilizando como caso de estudio el catálogo de NETFLIX (2008-2021) proporcionado por Shivam Bansal en Kaggle. El trabajo se enfoca en la transformación de los datos a través de Power Query, seguido de la visualización de los datos a través de dashboards dinámicos mediante Power BI,  lo que permite una toma de decisiones fundamentada.",
      decisiones: "Comenzamos con una sola fuente de datos consolidada, y luego fragmentamos dicha información por motivos de atomicidad, granularidad, e integridad referencial. Además se normalizaron los datos para facilitar el análisis de los mismos, logrando mayor eficiencia en la labor de la construcción visual de la información",
      retos: "Los datos originales presentaban inconsistencias referentes a atomicidad y granularidad, así como también existían registros nulos. Mediante Power Query,se ejecutó la extracción y transformación integral de la información.",
      aprendizajes: "Entendí la importancia de la atomicidad y la integridad referencial. Aprendí a descomponer atributos multi-valor (como géneros y países) en dimensiones independientes para permitir un filtrado granular sin duplicar hechos, optimizando el rendimiento del motor analítico. No solo mostré 'qué pasó' (ej: el pico de contenido en 2019), sino que reforcé mi capacidad para investigar el 'por qué' (la ralentización de 2020-2021 vinculada a factores globales como la pandemia)."
    };
    const [isModalOpen, setIsModalOpen] = useState(false); // Estado para el modal
    return(
      <>
        <Card className="overflow-hidden"> {/* overflow-hidden evita que contenido se salga de los bordes redondeados */}
          <CardHeader>
            <CardTitle className="text-2xl">NETFLIX Global Insights: Análisis de Distribución y Diversificación de Contenido (2008-2021)</CardTitle>
            <CardDescription>
              Desarrollo de un analisis de datos: desde la captura de requerimientos 
              y modelado de datos relacional, hasta la transformacion de datos crudos en información 
              estructurada, limpia, consolidada y lista para el análisis y visualizacion en Power BI.
            </CardDescription>
            <CardContent>
              {/* Contenedor Flex: Columna en móvil, Fila en escritorio */}
              <div className="flex flex-col md:flex-row gap-8 p-2">
                {/* Columna Izquierda: Detalles del proyecto */}
                <div className="flex-1 space-y-4">
                  <div>
                    <h4 className="font-semibold text-lg uppercase tracking-wider text-muted-foreground mb-2">
                      Características Principales del Proyecto
                    </h4>
                    <ul className="list-disc list-inside text-sm space-y-1 text-gray-700">
                      <li>Modelo dimensional que agrupa todas las fuentes de datos necesarias para responder a las consultas planteadas</li>
                      <li>Metricas esenciales, referentes a contenido, genero, paises, publico objetivo, tipo de contenido, directores y cast</li>
                      <li>Extraccion de datos realizada sobre una unica fuente de datos</li>
                      <li>Transformacion y limpieza de los datos usando Power Query </li>
                      <li>Fragmentación de información por motivos de atomicidad, granularidad, e integridad referencial </li>
                      <li>Visualizacion mediante dashboards dinamicos a través de Power BI</li>
                    </ul>
                  </div>
                  <h5 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground mb-2">
                    Tecnologías aplicadas
                  </h5>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="text-powerquery border-powerquery">Power Query</Badge>
                    <Badge variant="outline" className="text-powerbi border-powerbi">Power BI</Badge>
                  </div>
                </div>
                {/* Columna Derecha: El Carrusel */}
                <div className="w-full md:w-[400px] lg:w-[450px] mx-auto">
                  <CarouselPortfolio
                    images={imgSistNetflixBI}
                    altBase="Captura del análisis del catalogo de Netflix"
                  />
                </div>
              </div>
            </CardContent>
            <CardFooter className="bg-muted/50 border-t p-4 flex justify-between items-center rounded-(--radius-lg)">
              <span className="text-xs text-muted-foreground">Caso de Estudio | Proyecto Personal</span>
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
                  <a href="https://github.com/MatiasSantolari/ProyectoBI-TDC.git" target="_blank">
                    <Github className="w-4 h-4 mr-2" /> GitHub
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