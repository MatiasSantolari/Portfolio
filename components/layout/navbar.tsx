'use client'

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-4xl mx-auto flex h-14 items-center justify-between px-6">
        <a href="#" className="font-bold text-lg hover:opacity-80 transition-opacity">
          MS<span className="text-purple-600">.</span>
        </a>
        
        <div className="flex gap-4 md:gap-8 text-sm font-medium">
            <a href="#habilidades" className="text-muted-foreground hover:text-primary transition-colors">Skills</a>
            <a href="#proyectos" className="text-muted-foreground hover:text-primary transition-colors">Proyectos</a>
            <a href="#educacion" className="text-muted-foreground hover:text-primary transition-colors">Educación</a>
            <a href="#contacto" className="text-purple-600 dark:text-purple-400 font-bold hover:underline underline-offset-4">Contacto</a>
        </div>
      </div>
    </nav>
  )
}