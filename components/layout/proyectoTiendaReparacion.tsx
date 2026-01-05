'use client'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { CarouselPortfolio } from '@/components/layout/carouselPortfolio'
import { Github, FileSearch } from 'lucide-react'
import { useState } from 'react'
import { ModalDetalleProyecto } from '@/components/layout/modalDetalleProyecto'

export function ProyectoTiendaReparacion(){
    const imgSistGestorTiendaReparacion = [
    "/Portfolio/images/projects/sistGestorTiendaReparacion/DERSQLServer.png",
    "/Portfolio/images/projects/sistGestorTiendaReparacion/clientes.jpg",
    "/Portfolio/images/projects/sistGestorTiendaReparacion/clientesBusqueda1.jpg",
    "/Portfolio/images/projects/sistGestorTiendaReparacion/clientesBusqueda2.jpg",
    "/Portfolio/images/projects/sistGestorTiendaReparacion/clientesVerTrabajosGenerarTicket.jpg",
    "/Portfolio/images/projects/sistGestorTiendaReparacion/clientesVerTrabajosVerEmpleados.jpg",
    "/Portfolio/images/projects/sistGestorTiendaReparacion/clientesVerTrabajosVerEmpleados2.jpg",
    "/Portfolio/images/projects/sistGestorTiendaReparacion/clienteVerTrabajos.jpg",
    "/Portfolio/images/projects/sistGestorTiendaReparacion/clienteVerTrabajosAgregarTrabajo.jpg",
    "/Portfolio/images/projects/sistGestorTiendaReparacion/editarTrabajo.jpg",
    "/Portfolio/images/projects/sistGestorTiendaReparacion/empleados.jpg",
    "/Portfolio/images/projects/sistGestorTiendaReparacion/empleadoVerTareas.jpg",
    "/Portfolio/images/projects/sistGestorTiendaReparacion/informeDemandaAnual.jpg",
    "/Portfolio/images/projects/sistGestorTiendaReparacion/login.jpg",
    "/Portfolio/images/projects/sistGestorTiendaReparacion/loginLleno.jpg",
    "/Portfolio/images/projects/sistGestorTiendaReparacion/tareas.jpg",
    "/Portfolio/images/projects/sistGestorTiendaReparacion/ticket.jpg",
    "/Portfolio/images/projects/sistGestorTiendaReparacion/trabajosAgregados.jpg",
    "/Portfolio/images/projects/sistGestorTiendaReparacion/trabajoTerminado1.jpg",
    "/Portfolio/images/projects/sistGestorTiendaReparacion/trabajoTerminado2.jpg",
    ]
    const detallesTecnicos = {
      titulo: "Sistema de Gestión de Servicio Técnico",
      contexto: "Un taller local de reparación de dispositivos (celulares, PCs, impresoras) gestionaba las órdenes de trabajo y la asignación de tareas de forma manual. Esto causaba confusiones en los estados de reparación y demoras en la entrega a los clientes. El objetivo fue crear una herramienta sencilla pero eficaz que permitiera registrar el ingreso de equipos, asignar técnicos a reparaciones específicas y emitir un ticket al finalizar el trabajo, profesionalizando la atención al público del negocio y la comunicación entre el propio personal.",
      decisiones: "Elegí desarrollar una aplicación de escritorio con C# y Windows Forms porque era la solución más práctica para el entorno del taller: una única computadora en el mostrador que no dependía de internet para funcionar. Al usar SQL Server y Entity Framework Core, aseguré que toda la información de clientes y reparaciones estuviera organizada y fuera fácil de consultar. Esta combinación permitió una respuesta inmediata del sistema al cargar datos, algo vital cuando hay un cliente esperando en el local. Además, al ser una solución local, el cliente no tiene costos mensuales de mantenimiento ni servidores externos.",
      retos: "Un reto fue el desarrollo de informe de demandas anual, quería que fuera algo muy grafico y libre de complejidad visual, implementé una lógica para procesar los datos de las reparaciones del año y mostrarlos en gráficos simples, permitiendo que el dueño viera, por primera vez de forma clara, qué meses tenía más trabajo y cuánto estaba recaudando realmente.",
      aprendizajes: "Este proyecto me enseñó el valor de la digitalización en pequeños negocios. Aprendí a escuchar al usuario final (los empleados del taller) para crear interfaces que realmente les ahorren tiempo en lugar de complicarlos. Como mejora, sería interesante añadir un módulo de notificaciones automáticas para que, al cambiar el estado a 'Terminado', el sistema envíe un mensaje al cliente informándole que ya puede retirar su equipo. Asimismo, a futuro es importante evolucionar el informe de demanda hacia un panel de Business Intelligence que no solo muestre volumen, sino también rentabilidad por tipo de dispositivo (ej. ¿deja más ganancia reparar celulares o PCs?) y tiempos promedio de resolución. Esto transformaría al sistema de una herramienta de registro en una de apoyo a las decisiones, permitiendo al dueño optimizar el personal según la estacionalidad del negocio."
    };
    const [isModalOpen, setIsModalOpen] = useState(false); // Estado para el modal
    return(
      <>
        <Card className="overflow-hidden"> {/* overflow-hidden evita que contenido se salga de los bordes redondeados */}
          <CardHeader>
            <CardTitle className="text-2xl">Sistema Gestor De Servicio Técnico</CardTitle>
            <CardDescription>
                Desarrollo integral de un sistema de escritorio para gestionar las labores diarias de una tienda de reparacion de dispositivos electronicos.
                Generación de informes para facilitar la toma de decisiones del negocio.
            </CardDescription>
            <CardContent>
              {/* Contenedor Flex: Columna en móvil, Fila en escritorio */}
              <div className="flex flex-col md:flex-row gap-8 p-2">
                {/* Columna Izquierda: Detalles del proyecto */}
                <div className="flex-1 space-y-4">
                  <div>
                    <h4 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground mb-2">
                      Características Principales
                    </h4>
                    <ul className="list-disc list-inside text-sm space-y-1 text-gray-700">
                      <li>Gestión de los empleados y las tareas que realizan</li>
                      <li>Gestión de los trabajos solicitados</li>
                      <li>Seguimiento del estado de los trabajos</li>
                      <li>Generación de informes para facilitar la toma de decisiones del negocio</li>
                    </ul>
                  </div>
                  <h5 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground mb-2">
                    Tecnologías aplicadas
                  </h5>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="text-csharp border-csharp">C#</Badge>
                    <Badge variant="outline" className="text-dotnet border-dotnet">.NET</Badge>
                    <Badge variant="outline" className="text-sqlserver border-sqlserver">SQL Server</Badge>
                    <Badge variant="outline" className="text-dotnet border-dotnet">Entity Framework Core</Badge>
                    <Badge variant="outline" className="text-windowsform border-windowsform">Windows Forms</Badge>
                  </div>
                </div>
                {/* Columna Derecha: El Carrusel */}
                <div className="w-full md:w-[400px] lg:w-[450px] mx-auto">
                  <CarouselPortfolio
                    images={imgSistGestorTiendaReparacion}
                    altBase="Captura del sistema gestor de tienda de reparacion"
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
                  <a href="https://github.com/MatiasSantolari/GestorTiendaReparacionTecnologia.git" target="_blank">
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


