import { Badge } from '@/components/ui/badge'
import { Code2} from 'lucide-react'

export function SeccionHabilidadesTecnicas(){
    return(
        <div className="py-8 space-y-8 p-4">
            <section id="habilidades">
                <h3 className="text-xl font-bold mb-8 flex items-center justify-center gap-2">
                    <Code2 className="w-5 h-5 text-primary" />
                    Stack Técnico & Habilidades
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    
                    {/* Categoría 1: Backend*/}
                    <div className="space-y-3">
                        <h4 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground border-b pb-2 flex items-center justify-center">
                            Backend & Databases
                        </h4>
                        <div className="flex flex-wrap gap-2">
                            <Badge variant="outline" className="text-dotnet border-dotnet">.NET 8 / C#</Badge>
                            <Badge variant="outline" className="text-django border-django">Python / Django</Badge>
                            <Badge variant="outline" className="text-sqlserver border-sqlserver">SQL Server</Badge>
                            <Badge variant="outline" className="text-postgresql border-postgresql">PostgreSQL</Badge>
                            <Badge variant="outline" className="text-mysql border-mysql">MySQL</Badge>
                            <Badge variant="outline" className="text-dotnet border-dotnet">Entity Framework Core</Badge>
                            <Badge variant="outline" className="text-windowsform border-windowsform">Windows Forms</Badge>
                            <Badge variant="outline" className="text-pandas border-pandas">Pandas</Badge>
                            <Badge variant="outline" className="text-matplotlib border-matplotlib">Matplotlib</Badge>
                            <Badge variant="outline" className="text-expressjs border-expressjs">Express.js</Badge>
                        </div>
                    </div>

                    {/* Categoría 2: Infraestructura y Herramientas */}
                    <div className="space-y-3">
                        <h4 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground border-b pb-2 flex items-center justify-center">
                            DevOps & Tools
                        </h4>
                        <div className="flex flex-wrap gap-2">
                            <Badge variant="outline" className="text-docker border-docker">Docker</Badge>
                            <Badge variant="outline" className="text-github border-github">Git / GitHub</Badge>
                            <Badge variant="outline" className="text-nextjs border-nextjs">Next.js</Badge>
                            <Badge variant="outline" className="text-aspnetwebapi border-aspnetwebapi">REST APIs</Badge>
                            <Badge variant="outline" className="text-nodejs border-nodejs">Node js</Badge>
                            <Badge variant="outline" className="text-office border-office">Office</Badge>
                        </div>
                    </div>

                    {/* Categoría 3: Gestión y Análisis (Tu perfil de Analista) */}
                    <div className="space-y-3">
                        <h4 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground border-b pb-2 flex items-center justify-center">
                            Análisis & Gestión
                        </h4>
                            <div className="flex flex-wrap gap-2">
                                <Badge variant="secondary">Gestión de Proyectos</Badge>
                                <Badge variant="secondary">Gestión de Riesgos</Badge>
                                <Badge variant="secondary">Análisis de Sistemas</Badge>
                                <Badge variant="secondary">Diseño de Sistemas</Badge>
                                <Badge variant="secondary">Metodología Ágil Scrum</Badge>
                                <Badge variant="secondary">Metodología Ágiles Kanban</Badge>
                                <Badge variant="secondary">Business Intelligence</Badge>
                                <Badge variant="secondary">Inglés Intermedio</Badge>
                            </div>
                    </div>
                </div>
            </section>
        </div>
    )
}