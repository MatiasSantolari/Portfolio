export function SeccionHero() {
  return (
    <section className="py-12 md:py-16 flex flex-col items-center text-center space-y-8">
      {/* 1. Header Principal */}
      <div className="space-y-4">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter">
          <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">Matías Santolari</span>
        </h1>
        <h2 className="text-xl md:text-2xl text-primary font-medium tracking-tight">
          Analista Universitario de Sistemas & Desarrollador Backend
        </h2>
      </div>

      {/* 2. Sobre Mí (Rescatado y pulido) */}
      <div className="max-w-[1000px] space-y-4 text-lg text-muted-foreground">
        <p className="leading-relaxed text-balance">
          Soy <strong>Estudiante Avanzado de Ingeniería en Sistemas</strong> en la UTN. 
          Mi enfoque principal es el desarrollo <strong>Backend</strong>, especialmente dentro del ecosistema 
          de <strong>.NET</strong> y <strong>Python</strong>, donde construyo soluciones robustas y escalables.
        </p>
        <p className="leading-relaxed text-balance">
          Cuento con experiencia en proyectos educativos, freelance y personales, con los cuales 
          he desarrollado una <strong>mentalidad resolutiva</strong>, 
          capaz de integrar tecnologías Frontend cuando el desafío lo requiere y de analizar procesos 
          para convertirlos en software eficiente.
        </p>
        <p className="leading-relaxed text-balance">
            Actualmente, busco incorporarme a un equipo profesional donde pueda aportar mi base técnica y seguir 
            creciendo en roles de análisis o desarrollo.
        </p>
      </div>
    </section>
  )
}