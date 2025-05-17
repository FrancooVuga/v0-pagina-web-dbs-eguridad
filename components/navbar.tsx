"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Wifi, Menu } from "lucide-react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <Wifi className="h-6 w-6 text-blue-600" />
            <span className="text-xl font-bold tracking-wide">DBSEGURIDAD</span>
          </Link>
        </div>

        <nav className="hidden md:flex gap-6">
          <Link href="/" className="text-sm font-medium transition-colors hover:text-blue-600">
            Inicio
          </Link>
          <Link href="#servicios" className="text-sm font-medium transition-colors hover:text-blue-600">
            Servicios
          </Link>
          <Link href="#nosotros" className="text-sm font-medium transition-colors hover:text-blue-600">
            Nosotros
          </Link>
          <Link href="#proyectos" className="text-sm font-medium transition-colors hover:text-blue-600">
            Proyectos
          </Link>
          <Link href="#contacto" className="text-sm font-medium transition-colors hover:text-blue-600">
            Contacto
          </Link>
        </nav>

        <div className="hidden md:flex">
          <Button variant="default" className="bg-blue-600 hover:bg-blue-700" asChild>
            <a href="#solicitar-presupuesto">Solicitar Presupuesto</a>
          </Button>
        </div>

        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Abrir menú</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <div className="flex flex-col gap-6 mt-8">
              <Link
                href="/"
                className="text-lg font-medium transition-colors hover:text-blue-600"
                onClick={() => setIsOpen(false)}
              >
                Inicio
              </Link>
              <Link
                href="#servicios"
                className="text-lg font-medium transition-colors hover:text-blue-600"
                onClick={() => setIsOpen(false)}
              >
                Servicios
              </Link>
              <Link
                href="#nosotros"
                className="text-lg font-medium transition-colors hover:text-blue-600"
                onClick={() => setIsOpen(false)}
              >
                Nosotros
              </Link>
              <Link
                href="#proyectos"
                className="text-lg font-medium transition-colors hover:text-blue-600"
                onClick={() => setIsOpen(false)}
              >
                Proyectos
              </Link>
              <Link
                href="#contacto"
                className="text-lg font-medium transition-colors hover:text-blue-600"
                onClick={() => setIsOpen(false)}
              >
                Contacto
              </Link>
              <a href="#solicitar-presupuesto" className="mt-4" onClick={() => setIsOpen(false)}>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">Solicitar Presupuesto</Button>
              </a>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}