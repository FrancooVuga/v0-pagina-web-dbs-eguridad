import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Twitter } from "lucide-react"

export default function ContactSection() {
  return (
    <section id="contacto" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Contáctanos</h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
              Estamos listos para ayudarte con tu proyecto. Contáctanos por cualquiera de estos medios.
            </p>
          </div>
        </div>

        <div className="mx-auto max-w-3xl mt-12">
          {/* Información de contacto */}
          <div className="rounded-lg border bg-background p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <Phone className="h-8 w-8 text-blue-600" />
                  <div>
                    <h4 className="font-medium text-lg">Teléfono</h4>
                    <p className="text-gray-500">+123 456 7890</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Mail className="h-8 w-8 text-blue-600" />
                  <div>
                    <h4 className="font-medium text-lg">Email</h4>
                    <p className="text-gray-500">info@dbseguridad.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <MapPin className="h-8 w-8 text-blue-600" />
                  <div>
                    <h4 className="font-medium text-lg">Dirección</h4>
                    <p className="text-gray-500">Av. Principal 1234, Ciudad</p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <h4 className="font-medium text-lg">Redes Sociales</h4>
                <div className="flex flex-wrap gap-4">
                  <a href="#" className="flex items-center gap-2 text-gray-500 hover:text-blue-600 transition-colors">
                    <Facebook className="h-6 w-6" />
                    <span>Facebook</span>
                  </a>
                  <a href="#" className="flex items-center gap-2 text-gray-500 hover:text-blue-600 transition-colors">
                    <Instagram className="h-6 w-6" />
                    <span>Instagram</span>
                  </a>
                  <a href="#" className="flex items-center gap-2 text-gray-500 hover:text-blue-600 transition-colors">
                    <Twitter className="h-6 w-6" />
                    <span>Twitter</span>
                  </a>
                  <a href="#" className="flex items-center gap-2 text-gray-500 hover:text-blue-600 transition-colors">
                    <Linkedin className="h-6 w-6" />
                    <span>LinkedIn</span>
                  </a>
                </div>

                <div className="pt-4">
                  <h4 className="font-medium text-lg">Horario de Atención</h4>
                  <div className="space-y-2 mt-2">
                    <div className="flex justify-between">
                      <span className="text-gray-500">Lunes - Viernes</span>
                      <span className="text-gray-500">9:00 - 18:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Sábados</span>
                      <span className="text-gray-500">10:00 - 14:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Domingos</span>
                      <span className="text-gray-500">Cerrado</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
