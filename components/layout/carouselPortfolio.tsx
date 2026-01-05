'use client'
import Image from "next/image"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { 
  Dialog, 
  DialogContent, 
  DialogTitle, 
  DialogTrigger 
} from "@/components/ui/dialog"
import { ZoomIn } from "lucide-react"

interface CarouselPortfolioProps {
    images: string[],
    altBase: string
}

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? ""

export function CarouselPortfolio({ images, altBase }: CarouselPortfolioProps) {
  return (
    <Carousel className="w-full group/carousel">
      <CarouselContent>
        {images.map((img, index) => (
          <CarouselItem key={index}>
            <Dialog>
              {/* El Trigger es el contenedor de la imagen */}
              <DialogTrigger asChild>
                <div className="overflow-hidden rounded-lg cursor-zoom-in relative group/img">
                  <div className="aspect-video w-full">
                    <Image
                      src={img}
                      alt={`${altBase} ${index + 1}`}
                      width={800}
                      height={450}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover/img:scale-105"
                    />
                  </div>
                  
                  {/* Overlay con icono de Zoom */}
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="bg-white/20 p-3 rounded-full backdrop-blur-sm">
                      <ZoomIn className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>
              </DialogTrigger>

              {/* Contenido del Modal */}
              <DialogContent className="max-w-[90vw] md:max-w-5xl border-none bg-transparent shadow-none p-0 flex items-center justify-center">
                <DialogTitle className="sr-only">
                  {`Vista ampliada de ${altBase} - Imagen ${index + 1}`}
                </DialogTitle>
                <img 
                  src={img}
                  alt={`${altBase} ampliada`}
                  className="max-h-[90vh] w-auto object-contain rounded-md shadow-2xl"
                />
              </DialogContent>
            </Dialog>
          </CarouselItem>
        ))}
      </CarouselContent>
      
      {/* Flechas de navegación (aparecen al hacer hover en el carrusel) */}
      <CarouselPrevious className="left-2 opacity-0 group-hover/carousel:opacity-100 transition-opacity" />
      <CarouselNext className="right-2 opacity-0 group-hover/carousel:opacity-100 transition-opacity" />
    </Carousel>
  )
}