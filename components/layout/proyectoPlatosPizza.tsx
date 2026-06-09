'use client'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { CarouselPortfolio } from '@/components/layout/carouselPortfolio'
import { Github, FileSearch } from 'lucide-react'
import { useState } from 'react'
import { ModalDetalleProyecto } from '@/components/layout/modalDetalleProyecto'

export function ProyectoPlatosPizza(){
    const basePath = (process.env.NEXT_PUBLIC_BASE_PATH || "").replace(/\/$/, "");
    const imgSistPlatosPizza = [
      `${basePath}/images/projects/sistPlatosPizza/caratula_informe.png`,
      `${basePath}/images/projects/sistPlatosPizza/Dashboard_Area_Operativa.png`,
      `${basePath}/images/projects/sistPlatosPizza/Dashboard_Clientes_y_Productos.png`,
      `${basePath}/images/projects/sistPlatosPizza/Dashboard_Area_Finanzas.png`, 
    ]
    const detallesTecnicos = {
      titulo: "Suite de Business Intelligence: Plato's Pizza Analytics",
      contexto: "El proyecto parte de registros transaccionales planos con datos desnormalizados e ineficiencias operativas no cuantificadas dentro de una pizzería. La falta de estructuras analíticas impedía mapear con precisión el comportamiento real del consumidor, el factor de carga física y capacidad ociosa del salón durante los días pico (jueves y viernes), y el impacto real del mix de productos sobre el ticket promedio.",
      decisiones: "Opté por estructurar la solución bajo un modelo analítico desnormalizado de tabla única (Flat-File Model) para optimizar los tiempos de respuesta analítica sobre este volumen transaccional. Ejecuté un esquema de arquitectura desacoplada procesando el ETL directamente en el motor de base de datos (MySQL) mediante scripts secuenciales, consolidando una vista semántica enriquecida que absorbió las reglas de negocio y alivió el procesamiento en memoria de Power BI.",
      retos: "El mayor reto fue metodológico y de enfoque: migrar de la analítica BI tradicional —centrada puramente en responder 'qué pasó' a través de métricas generales— hacia una solución de diagnóstico y recomendación. Para ello, apliqué un framework estructurado de formulación de preguntas críticas de negocio. El desafío consistió en diseñar el ecosistema de datos no solo para exponer los problemas ocultos, sino para desglosar el 'por qué pasó' y modelar escenarios que guíen al cliente de manera directa hacia la toma de decisiones estratégicas y soluciones comerciales de alto impacto.",
      aprendizajes: "Validé que un análisis de datos potente es imposible sin un entendimiento profundo y exhaustivo del modelo de negocio sobre el que se trabaja. Este proyecto me enseñó que comprender la dinámica operativa real (en este caso, los flujos gastronómicos) otorga un plus definitivo para saber qué variables mirar, cuáles descartar y cómo formular las preguntas correctas, garantizando que el desarrollo técnico responda con precisión a las necesidades estratégicas de la organización."
    };
    const [isModalOpen, setIsModalOpen] = useState(false); // Estado para el modal
    return(
      <>
        <Card className="overflow-hidden"> {/* overflow-hidden evita que contenido se salga de los bordes redondeados */}
          <CardHeader>
            <CardTitle className="text-2xl">Suite de Business Intelligence: Plato's Pizza</CardTitle>
            <CardDescription>
              Solución integral de Inteligencia de Negocios y Analítica de Datos. Abarca el diseño de un pipeline 
              de ingesta relacional, procesos de ETL y saneamiento masivo con SQL (MySQL), la estructuración de una 
              capa semántica para lógica comercial y el despliegue de una suite modular de dashboards interactivos en Power BI.
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
                      <li><strong>Modelo Analítico Flat-File:</strong> Arquitectura desnormalizada de tabla única optimizada para consultas de alta velocidad.</li>
                      <li><strong>Pipeline ETL en MySQL:</strong> Scripts secuenciales de saneamiento, formateo cronológico y casteo de tipos de datos nativos.</li>
                      <li><strong>Vista Semántica Enriquecida:</strong> Capa lógica en base de datos para la clasificación automática de bandas de precio y tipos de orden.</li>
                      <li><strong>Suite Modular en Power BI:</strong> 3 tableros especializados (Gestión Operativa, Clientes/Productos y Rendimiento Financiero).</li>
                      <li><strong>Informe Analítico de Consultoría:</strong> Reporte integral con estrategias de Revenue Management y optimización.</li>
                    </ul>
                  </div>
                  <h5 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground mb-2">
                    Tecnologías aplicadas
                  </h5>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="text-mysql border-mysql">MySQL</Badge>
                    <Badge variant="outline" className="text-powerbi border-powerbi">Power BI</Badge>
                    <Badge variant="outline" className="text-powerquery border-powerquery">Excel</Badge>
                  </div>
                </div>
                {/* Columna Derecha: El Carrusel */}
                <div className="w-full md:w-[400px] lg:w-[450px] mx-auto">
                  <CarouselPortfolio
                    images={imgSistPlatosPizza}
                    altBase="Captura de la Suite Analítica Plato's Pizza"
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
                  <a href="https://github.com/MatiasSantolari/Platos-Pizza-Analytics.git" target="_blank">
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