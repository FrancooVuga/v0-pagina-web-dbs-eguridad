import { CheckCircle } from "lucide-react"

export default function WhyChooseUs() {
  return (
    <section id="nosotros" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">¿Por qué elegirnos?</h2>
            <p className="text-gray-500 md:text-xl">
              Somos expertos en soluciones de conectividad y seguridad con años de experiencia en el sector. Nuestro
              compromiso es ofrecer un servicio de calidad y personalizado para cada cliente.
            </p>
          </div>
          <div className="grid gap-4">
            <div className="flex items-start gap-4">
              <CheckCircle className="mt-1 h-6 w-6 flex-none text-blue-600" />
              <div>
                <h3 className="font-bold">Experiencia Comprobada</h3>
                <p className="text-sm text-gray-500">
                  Más de 10 años instalando y configurando sistemas de conectividad y seguridad en edificios y hogares.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <CheckCircle className="mt-1 h-6 w-6 flex-none text-blue-600" />
              <div>
                <h3 className="font-bold">Equipos de Alta Calidad</h3>
                <p className="text-sm text-gray-500">
                  Trabajamos con las mejores marcas del mercado para garantizar la durabilidad y eficiencia de nuestras
                  instalaciones.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <CheckCircle className="mt-1 h-6 w-6 flex-none text-blue-600" />
              <div>
                <h3 className="font-bold">Servicio Personalizado</h3>
                <p className="text-sm text-gray-500">
                  Cada proyecto es único. Diseñamos soluciones adaptadas a las necesidades específicas de cada cliente.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <CheckCircle className="mt-1 h-6 w-6 flex-none text-blue-600" />
              <div>
                <h3 className="font-bold">Soporte Técnico Continuo</h3>
                <p className="text-sm text-gray-500">
                  Ofrecemos soporte técnico después de la instalación para asegurar el correcto funcionamiento de los
                  sistemas.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <CheckCircle className="mt-1 h-6 w-6 flex-none text-blue-600" />
              <div>
                <h3 className="font-bold">Garantía en Todos los Trabajos</h3>
                <p className="text-sm text-gray-500">
                  Respaldamos nuestras instalaciones con garantía para que tengas total tranquilidad.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
