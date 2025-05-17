import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Wifi, Camera, Network, Server, Home, Building } from "lucide-react"

export default function ServicesSection() {
  return (
    <section id="servicios" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Nuestros Servicios</h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
              Ofrecemos soluciones completas de conectividad y seguridad para edificios residenciales y hogares
              particulares.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
          {/* Servicio 1 */}
          <Card>
            <CardHeader className="p-4">
              <div className="flex items-center gap-2">
                <Camera className="h-6 w-6 text-blue-600" />
                <CardTitle>Cámaras de Seguridad IP</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="p-4 pt-0">
              <p className="text-sm text-gray-500">
                Instalación y configuración de sistemas de cámaras IP de alta definición para monitoreo en tiempo real.
                Acceso remoto desde cualquier dispositivo.
              </p>
            </CardContent>
          </Card>

          {/* Servicio 2 */}
          <Card>
            <CardHeader className="p-4">
              <div className="flex items-center gap-2">
                <Server className="h-6 w-6 text-blue-600" />
                <CardTitle>DVRs y NVRs</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="p-4 pt-0">
              <p className="text-sm text-gray-500">
                Configuración de grabadores de video digital y en red para almacenamiento seguro de grabaciones.
                Sistemas con detección de movimiento y alertas.
              </p>
            </CardContent>
          </Card>

          {/* Servicio 3 */}
          <Card>
            <CardHeader className="p-4">
              <div className="flex items-center gap-2">
                <Network className="h-6 w-6 text-blue-600" />
                <CardTitle>Switches y Routers</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="p-4 pt-0">
              <p className="text-sm text-gray-500">
                Instalación de equipos de red de alta calidad para una conectividad estable y segura. Configuración de
                VLANs y segmentación de red.
              </p>
            </CardContent>
          </Card>

          {/* Servicio 4 */}
          <Card>
            <CardHeader className="p-4">
              <div className="flex items-center gap-2">
                <Wifi className="h-6 w-6 text-blue-600" />
                <CardTitle>Access Points WiFi</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="p-4 pt-0">
              <p className="text-sm text-gray-500">
                Implementación de puntos de acceso WiFi para cobertura completa en edificios y hogares. Redes de
                invitados y control de ancho de banda.
              </p>
            </CardContent>
          </Card>

          {/* Servicio 5 */}
          <Card>
            <CardHeader className="p-4">
              <div className="flex items-center gap-2">
                <Building className="h-6 w-6 text-blue-600" />
                <CardTitle>Soluciones para Edificios</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="p-4 pt-0">
              <p className="text-sm text-gray-500">
                Diseño e implementación de infraestructura de red para edificios residenciales. Sistemas centralizados y
                administración remota.
              </p>
            </CardContent>
          </Card>

          {/* Servicio 6 */}
          <Card>
            <CardHeader className="p-4">
              <div className="flex items-center gap-2">
                <Home className="h-6 w-6 text-blue-600" />
                <CardTitle>Hogares Conectados</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="p-4 pt-0">
              <p className="text-sm text-gray-500">
                Soluciones personalizadas para hogares particulares. Redes seguras, sistemas de vigilancia y
                conectividad optimizada.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
