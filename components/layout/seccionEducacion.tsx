'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Dialog, DialogContent, DialogTrigger, DialogTitle } from '@/components/ui/dialog'
import { GraduationCap, Award, ExternalLink, ZoomIn } from 'lucide-react'

export function SeccionEducacion(){
    const imgInsignias = [
        "/images/insignias/insignia-developing_containerized_applications_on_google_cloud.png",
        "/images/insignias/futuras-insignias.png",
    ]
    const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? ""
    return(
        <div className="py-8 space-y-8 p-4">
            {/* SECCIÓN 1: FORMACIÓN ACADÉMICA */}
            <section id="educacion">
                <h3 className="text-xl font-bold mb-6 flex items-center justify-center gap-2">
                    <GraduationCap className="w-5 h-5 text-primary" />
                    Formación Académica
                </h3>
                <div className="grid grid-cols-1">
                    <Card className="hover:border-primary transition-all hover:shadow-md group">
                        <CardHeader className="py-4">
                            <div className="flex justify-between items-start">
                                <div>
                                    <CardTitle className="text-lg">Ingeniería en Sistemas de Información</CardTitle>
                                    <CardDescription className="text-base font-medium text-foreground/80">
                                        Universidad Tecnológica Nacional (UTN)
                                    </CardDescription>
                                </div>
                                <Badge variant="secondary">En curso (Avanzado)</Badge>
                            </div>
                        </CardHeader>
                        <CardContent className="text-sm text-muted-foreground pb-4">
                            <p>Título intermedio obtenido: <strong>Analista Universitario de Sistemas</strong>.</p>
                        </CardContent>
                    </Card>
                </div>
            </section>
            {/* SECCIÓN 2: CURSOS Y CERTIFICACIONES */}
            <section>
                <h3 className="text-xl font-bold mb-6 flex items-center justify-center gap-2">
                    <Award className="w-5 h-5 text-primary" />
                    Cursos y Certificaciones
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Curso 1 */}
                    <Card className="hover:border-primary/50 transition-all hover:shadow-md group">
                        <CardHeader className="p-4">
                            <div className="flex items-center gap-4">
                                {/* 1. Contenedor del modal de la Insignia*/}
                                <Dialog>
                                    <DialogTrigger asChild>
                                        <div className="flex-shrink-0 w-12 h-12 rounded-lg overflow-hidden bg-muted flex items-center justify-center border border-border cursor-zoom-in relative group/img">
                                            <img 
                                                src={`${basePath}${imgInsignias[0]}`}
                                                alt="Insignia curso" 
                                                className="object-cover w-full h-full transition-transform group-hover/img:scale-110"
                                            />
                                        {/* Overlay sutil al hacer hover */}
                                            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center">
                                                <ZoomIn className="w-4 h-4 text-white" />
                                            </div>
                                        </div>
                                    </DialogTrigger>
                                    <DialogContent className="max-w-3xl border-none bg-transparent shadow-none flex items-center justify-center">
                                        <DialogTitle className="sr-only">
                                            Vista ampliada de la insignia
                                        </DialogTitle>
                                        <img 
                                        src={`${basePath}${imgInsignias[0]}`}
                                        alt="Insignia ampliada" 
                                        className="max-h-[80vh] w-auto object-contain rounded-lg shadow-2xl"
                                        />
                                    </DialogContent>
                                </Dialog>

                                {/* 2. Información del Curso */}
                                <div className="flex-grow min-w-0">
                                    <CardTitle className="text-sm truncate font-bold group-hover:text-primary transition-colors">
                                        Developing Containerized Applications on Google Cloud
                                    </CardTitle>
                                    <CardDescription className="text-xs flex flex-col sm:flex-row sm:items-center gap-1">
                                        <span>Google Skills</span>
                                        <span className="hidden sm:inline">•</span>
                                        <span className="text-primary/80 font-medium">2025</span>
                                    </CardDescription>
                                </div>

                                {/* 3. Link de Verificación (Icono externo) */}
                                <a 
                                    href="https://www.skills.google/public_profiles/82ec2e0d-04d2-413e-8956-3ea6cb5e4f05/badges/21139806" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="text-muted-foreground hover:text-primary transition-colors p-2"
                                    title="Ver certificado oficial"
                                >
                                    <ExternalLink className="w-4 h-4" />
                                </a>
                            </div>
                        </CardHeader>
                    </Card>

                    {/* Curso 2 */}
                    <Card className="hover:border-primary/50 transition-all hover:shadow-md group">
                        <CardHeader className="p-4">
                            <div className="flex items-center gap-4">
                                {/* 1. Contenedor del modal de la Insignia*/}
                                <Dialog>
                                    <DialogTrigger asChild>
                                        <div className="flex-shrink-0 w-12 h-12 rounded-lg overflow-hidden bg-muted flex items-center justify-center border border-border cursor-zoom-in relative group/img">
                                            <img 
                                                src={`${basePath}${imgInsignias[1]}`}
                                                alt="Insignia curso" 
                                                className="object-cover w-full h-full transition-transform group-hover/img:scale-110"
                                            />
                                        {/* Overlay sutil al hacer hover */}
                                            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center">
                                                <ZoomIn className="w-4 h-4 text-white" />
                                            </div>
                                        </div>
                                    </DialogTrigger>
                                    <DialogContent className="max-w-3xl border-none bg-transparent shadow-none flex items-center justify-center">
                                        <DialogTitle className="sr-only">
                                            Vista ampliada de la insignia
                                        </DialogTitle>
                                        <img 
                                        src={`${basePath}${imgInsignias[1]}`}
                                        alt="Insignia ampliada" 
                                        className="max-h-[80vh] w-auto object-contain rounded-lg shadow-2xl"
                                        />
                                    </DialogContent>
                                </Dialog>
                                {/* 2. Información del Curso */}
                                <div className="flex-grow min-w-0">
                                    <CardTitle className="text-sm truncate font-bold group-hover:text-primary transition-colors">
                                        Futuras Insignias Proximamente
                                    </CardTitle>
                                </div>
                            </div>
                        </CardHeader>
                    </Card>
                </div>
            </section>
        </div>
    )
}
