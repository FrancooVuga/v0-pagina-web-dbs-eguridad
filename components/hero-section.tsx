import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function HeroSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-36">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Soluciones de Conectividad y Seguridad para tu Hogar o Edificio
              </h1>
              <p className="max-w-[600px] text-gray-500 md:text-xl">
                Instalación y configuración profesional de redes, cámaras de seguridad IP, DVRs, switches y Access
                Points para edificios residenciales y hogares.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button className="bg-blue-600 hover:bg-blue-700" asChild>
                <a href="#servicios">
                  Nuestros Servicios
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href="#solicitar-presupuesto">Solicitar Presupuesto</a>
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative h-[350px] w-full md:h-[450px] lg:h-[500px]">
              <Image
                src="/placeholder.svg?height=500&width=500"
                alt="Soluciones de Conectividad"
                fill
                className="object-cover rounded-lg"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
