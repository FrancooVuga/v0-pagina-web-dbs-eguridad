import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import HeroSection from "@/components/hero-section"
import ServicesSection from "@/components/services-section"
import WhyChooseUs from "@/components/why-choose-us"
import ContactSection from "@/components/contact-section"
import RequestBudget from "@/components/request-budget"

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <ServicesSection />
        <WhyChooseUs />

        {/* Proyectos Destacados */}
        <section id="proyectos" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Proyectos Destacados</h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                  Conoce algunos de nuestros proyectos más recientes y cómo hemos ayudado a nuestros clientes.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
              {/* Proyecto 1 */}
              <Card>
                <CardHeader className="p-4">
                  <CardTitle>Edificio Residencial Aurora</CardTitle>
                  <CardDescription>Sistema completo de conectividad y seguridad</CardDescription>
                </CardHeader>
                <CardContent className="p-4 pt-0">
                  <div className="aspect-video overflow-hidden rounded-lg">
                    <Image
                      src="/placeholder.svg?height=200&width=300"
                      alt="Edificio Residencial"
                      width={300}
                      height={200}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <p className="mt-4 text-sm text-gray-500">
                    Instalación de red WiFi para 120 apartamentos, sistema de cámaras IP y control de acceso.
                  </p>
                </CardContent>
              </Card>

              {/* Proyecto 2 */}
              <Card>
                <CardHeader className="p-4">
                  <CardTitle>Complejo Empresarial Nexus</CardTitle>
                  <CardDescription>Infraestructura de red avanzada</CardDescription>
                </CardHeader>
                <CardContent className="p-4 pt-0">
                  <div className="aspect-video overflow-hidden rounded-lg">
                    <Image
                      src="/placeholder.svg?height=200&width=300"
                      alt="Complejo Empresarial"
                      width={300}
                      height={200}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <p className="mt-4 text-sm text-gray-500">
                    Implementación de red de alta velocidad, switches gestionados y sistema de vigilancia IP.
                  </p>
                </CardContent>
              </Card>

              {/* Proyecto 3 */}
              <Card>
                <CardHeader className="p-4">
                  <CardTitle>Residencia Privada</CardTitle>
                  <CardDescription>Hogar inteligente y seguro</CardDescription>
                </CardHeader>
                <CardContent className="p-4 pt-0">
                  <div className="aspect-video overflow-hidden rounded-lg">
                    <Image
                      src="/placeholder.svg?height=200&width=300"
                      alt="Residencia Privada"
                      width={300}
                      height={200}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <p className="mt-4 text-sm text-gray-500">
                    Instalación de sistema de seguridad con cámaras IP, red WiFi de alta velocidad y automatización.
                  </p>
                </CardContent>
              </Card>
            </div>
            <div className="flex justify-center mt-8">
              <Button variant="outline" className="group">
                Ver más proyectos
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition" />
              </Button>
            </div>
          </div>
        </section>

        <RequestBudget />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
