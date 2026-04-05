'use client'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { CarouselPortfolio } from '@/components/layout/carouselPortfolio'
import { Github, FileSearch } from 'lucide-react'
import { useState } from 'react'
import { ModalDetalleProyecto } from '@/components/layout/modalDetalleProyecto'

export function ProyectoBITDC(){
    const basePath = (process.env.NEXT_PUBLIC_BASE_PATH || "").replace(/\/$/, "");
    const imgSistBITDC = [
      `${basePath}/images/projects/sistBITDC/Requerimientos.png`,
      `${basePath}/images/projects/sistBITDC/Starnet_Consolidado.png`,
      `${basePath}/images/projects/sistBITDC/Data_Warehouse.png`,
      `${basePath}/images/projects/sistBITDC/Dashboard_Clientes.png`,
      `${basePath}/images/projects/sistBITDC/Dashboard_Empleados.png`,
      `${basePath}/images/projects/sistBITDC/Dashboard_Productos.png`,
    ]
    const detallesTecnicos = {
      titulo: "Ecosistema de Business Intelligence: The Drinking Company",
      contexto: "El proyecto surge de un caso ficticio, en donde existe la necesidad de centralizar la información de una distribuidora de bebidas que operaba con distintas fuentes de datos. La información comercial, de clientes y empleados estaba fragmentada en archivos Excel, CSV, archivos de texto y bases de datos SQL. Esto generaba reportes inconsistentes y demoras críticas en la toma de decisiones.",
      decisiones: "Opté por un enfoque de Arquitectura Desacoplada. Utilicé Python (Pandas/Numpy/SQLAlchemy) para el proceso de ETL debido a su flexibilidad para limpiar datos heterogéneos. Diseñé un Modelo en Estrella (Star Schema) para optimizar la velocidad de las consultas, asegurando que el modelo de Power BI sea ligero y fácil de mantener.",
      retos: "El mayor desafío fue la Normalización de Datos. Había inconsistencias en los formatos de las fechas, valores nulos, entre otros casos. Lo solucioné desarrollando funciones de limpieza en Python para terminar de normalizar todos los datos necesarios para responder a las incognitas de la organizacion, garantizando que el 100% de los registros se integraran correctamente al Data Warehouse. Otro reto técnico fue la gestión de la base de datos de ventas, donde creé una vista en mysql para poder recuperar todos los datos necesarios y no sobrecargar el entorno de python.",
      aprendizajes: "Reforcé la idea de que el BI es 80% preparación de datos y 20% visualización. Por ende hay que tomarse su debido tiempo para pulir y probar bastante el ETL, para optimizar tiempos al momento de la implementacion de las visualizaciones dinamicas de esos datos y mantener una credibilidad, trazabilidad y disponibilidad de los datos requeridos para el Data Warehouse en cualquier momento que lo requiera la organización para la toma estratégica de decisiones."
    };
    const [isModalOpen, setIsModalOpen] = useState(false); // Estado para el modal
    return(
      <>
        <Card className="overflow-hidden"> {/* overflow-hidden evita que contenido se salga de los bordes redondeados */}
          <CardHeader>
            <CardTitle className="text-2xl">Ecosistema de Business Intelligence: The Drinking Company</CardTitle>
            <CardDescription>
              Desarrollo de un ecosistema de BI integral: desde el refinamiento de consultas complejas 
              y modelado de datos relacional, hasta la transformacion de datos crudos en información 
              estructurada, limpia, consolidada y lista para el análisis con Python (SQLAlchemy, Pandas, NumPy) 
              y la visualización de KPIs estratégicos en Power BI.
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
                      <li>Starnet consolidado que agrupa todas las fuentes de datos necesarias para responder a las consultas de la organización</li>
                      <li>KPIs esenciales, referentes a clientes, empleados y productos</li>
                      <li>Extraccion de datos realizada sobre distintas fuentes proporcionadas por la organizacion </li>
                      <li>Transformacion y limpieza de los datos usando librerías como Pandas, Numpy, SQLAlchemy entre otras</li>
                      <li>Visualizacion mediante dashboards dinamicos a través de Power BI</li>
                    </ul>
                  </div>
                  <h5 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground mb-2">
                    Tecnologías aplicadas
                  </h5>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="text-python border-python">Python</Badge>
                    <Badge variant="outline" className="text-mysql border-mysql">MySQL</Badge>
                    <Badge variant="outline" className="text-pandas border-pandas">Pandas</Badge>
                    <Badge variant="outline" className="text-numpy border-numpy">Numpy</Badge>
                    <Badge variant="outline" className="text-powerbi border-powerbi">Power BI</Badge>
                  </div>
                </div>
                {/* Columna Derecha: El Carrusel */}
                <div className="w-full md:w-[400px] lg:w-[450px] mx-auto">
                  <CarouselPortfolio
                    images={imgSistBITDC}
                    altBase="Captura del sistema BITDC"
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