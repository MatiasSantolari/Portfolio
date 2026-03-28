import { Badge } from '@/components/ui/badge'
import { Code2 } from 'lucide-react'

export function SeccionHabilidadesTecnicas(){
    return(
        <div className="py-8 space-y-8 p-4">
            <section id="habilidades">
                <h3 className="text-xl font-bold mb-8 flex items-center justify-center gap-2">
                    <Code2 className="w-5 h-5 text-primary" />
                    Stack Técnico & Habilidades Profesionales
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    
                    {/* Categoría 1: Data Analytics & BI */}
                    <div className="space-y-3">
                        <h4 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground border-b pb-2 flex items-center justify-center">
                            Data Analytics & BI
                        </h4>
                        <div className="flex flex-wrap gap-2">
                            <Badge variant="outline" className="text-powerbi border-powerbi">Power BI</Badge>
                            <Badge variant="outline" className="text-pandas border-pandas">Python (Pandas)</Badge>
                            <Badge variant="outline" className="text-numpy border-numpy">NumPy / Matplotlib</Badge>
                            <Badge variant="outline" className="text-sqlserver border-sqlserver">SQL (Complex Queries)</Badge>
                            <Badge variant="outline" className="text-mysql border-mysql">ETL Processes</Badge>
                            <Badge variant="outline" className="text-postgresql border-postgresql">Data Modeling</Badge>
                        </div>
                    </div>

                    {/* Categoría 2: Systems Analysis & Business */}
                    <div className="space-y-3">
                        <h4 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground border-b pb-2 flex items-center justify-center">
                            Análisis & Gestión
                        </h4>
                        <div className="flex flex-wrap gap-2">
                            <Badge variant="secondary">Gestión de Proyectos</Badge>
                            <Badge variant="secondary">Análisis & Diseño de Sistemas</Badge>
                            <Badge variant="secondary">Gestión de Requisitos</Badge>
                            <Badge variant="secondary">Modelado Dimensional (Star Schema)</Badge>
                            <Badge variant="secondary">Calidad & Limpieza de Datos</Badge>
                            <Badge variant="secondary">Scrum / Kanban</Badge>
                            <Badge variant="secondary">Inglés (Técnico)</Badge>
                        </div>
                    </div>

                    {/* Categoría 3: Software Engineering */}
                    <div className="space-y-3">
                        <h4 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground border-b pb-2 flex items-center justify-center">
                            Software Development
                        </h4>
                        <div className="flex flex-wrap gap-2">
                            <Badge variant="outline" className="text-dotnet border-dotnet">.NET / C#</Badge>
                            <Badge variant="outline" className="text-django border-django">Django</Badge>
                            <Badge variant="outline" className="text-aspnetwebapi border-aspnetwebapi">REST APIs</Badge>
                            <Badge variant="outline" className="text-dotnet border-dotnet">Entity Framework</Badge>
                            <Badge variant="outline" className="text-nodejs border-nodejs">Node.js</Badge>
                            <Badge variant="outline" className="text-docker border-docker">Docker</Badge>
                            <Badge variant="outline" className="text-github border-github">Git / GitHub</Badge>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}