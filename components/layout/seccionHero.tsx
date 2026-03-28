export function SeccionHero() {
  return (
    <section className="py-12 md:py-16 flex flex-col items-center text-center space-y-8">
      {/* 1. Header Principal */}
      <div className="space-y-4">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter">
          <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
            Matías Santolari
          </span>
        </h1>
        <h2 className="text-xl md:text-2xl text-primary font-medium tracking-tight">
          Analista Universitario de Sistemas | BI | Backend Developer
        </h2>
      </div>

      {/* 2. Sobre Mí (Enfoque Híbrido) */}
      <div className="max-w-[1000px] space-y-4 text-lg text-muted-foreground">
        <p className="leading-relaxed text-balance">
          Soy <strong>Analista Universitario de Sistemas</strong> y estudiante avanzado de Ingeniería de Sistemas en la UTN. 
          Cuento con un perfil híbrido que integra el <strong>análisis de sistemas de información</strong> con la <strong>inteligencia de negocios</strong>, 
          formándome constantemente en transformar datos fragmentados en activos estratégicos para la toma de decisiones.
        </p>
        
        <p className="leading-relaxed text-balance">
          Cuento con una sólida base en desarrollo <strong>Backend (.NET y Python)</strong>, lo que me permite 
          construir <strong>aplicaciones web integrales</strong> y diseñar arquitecturas de datos robustas, automatizar procesos de <strong>ETL</strong> complejos y asegurar la 
          integridad de la información desde su origen hasta su visualización en <strong>Power BI</strong>.
        </p>
        
        <p className="leading-relaxed text-balance">
            Mi enfoque combina la mentalidad analítica para relevar necesidades de negocio con la capacidad técnica 
            para implementar soluciones eficientes, ya sea en roles de <strong>Análisis de Sistemas, BI o Desarrollo</strong>.
        </p>
      </div>
    </section>
  )
}