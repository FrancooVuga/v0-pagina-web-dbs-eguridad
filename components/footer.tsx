import Link from "next/link"
import { Wifi } from "lucide-react"

export default function Footer() {
  return (
    <footer className="w-full border-t bg-background py-6 md:py-10">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <Wifi className="h-6 w-6 text-blue-600" />
              <span className="text-xl font-bold tracking-wide">DBSEGURIDAD</span>
            </Link>
            <p className="text-sm text-gray-500">
              Soluciones profesionales de conectividad y seguridad para edificios residenciales y hogares particulares.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Servicios</h3>
            <ul className="space-y-2 text-sm text-gray-500">
              <li>
                <a href="#servicios" className="hover:text-blue-600">
                  Cámaras de Seguridad IP
                </a>
              </li>
              <li>
                <a href="#servicios" className="hover:text-blue-600">
                  DVRs y NVRs
                </a>
              </li>
              <li>
                <a href="#servicios" className="hover:text-blue-600">
                  Switches y Routers
                </a>
              </li>
              <li>
                <a href="#servicios" className="hover:text-blue-600">
                  Access Points WiFi
                </a>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Empresa</h3>
            <ul className="space-y-2 text-sm text-gray-500">
              <li>
                <a href="#nosotros" className="hover:text-blue-600">
                  Sobre Nosotros
                </a>
              </li>
              <li>
                <a href="#proyectos" className="hover:text-blue-600">
                  Proyectos
                </a>
              </li>
              <li>
                <a href="#solicitar-presupuesto" className="hover:text-blue-600">
                  Solicitar Presupuesto
                </a>
              </li>
              <li>
                <a href="#contacto" className="hover:text-blue-600">
                  Contacto
                </a>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Legal</h3>
            <ul className="space-y-2 text-sm text-gray-500">
              <li>
                <Link href="#" className="hover:text-blue-600">
                  Términos de Servicio
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-blue-600">
                  Política de Privacidad
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-blue-600">
                  Política de Cookies
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t pt-6 text-center text-sm text-gray-500">
          <p>© 2025 DBSEGURIDAD. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
