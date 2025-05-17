"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { toast } from "@/hooks/use-toast"

export default function RequestBudget() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    location: "hogar",
    needsConnectivity: false,
    needsSecurity: false,
    description: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleCheckboxChange = (name: string, checked: boolean) => {
    setFormData((prev) => ({ ...prev, [name]: checked }))
  }

  const handleRadioChange = (value: string) => {
    setFormData((prev) => ({ ...prev, location: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Validación básica
    if (!formData.name || !formData.phone) {
      toast({
        title: "Error en el formulario",
        description: "Por favor complete su nombre y número de contacto.",
        variant: "destructive",
      })
      return
    }

    if (!formData.needsConnectivity && !formData.needsSecurity) {
      toast({
        title: "Error en el formulario",
        description: "Por favor seleccione al menos un tipo de solución.",
        variant: "destructive",
      })
      return
    }

    // Aquí iría la lógica para enviar el formulario
    console.log("Datos del formulario:", formData)

    // Mostrar mensaje de éxito
    toast({
      title: "Solicitud enviada",
      description: "Hemos recibido tu solicitud de presupuesto. Nos pondremos en contacto contigo pronto.",
    })

    // Resetear el formulario
    setFormData({
      name: "",
      phone: "",
      location: "hogar",
      needsConnectivity: false,
      needsSecurity: false,
      description: "",
    })
  }

  return (
    <section id="solicitar-presupuesto" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Solicitar Presupuesto</h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
              Completa el siguiente formulario para recibir un presupuesto personalizado para tu proyecto.
            </p>
          </div>
        </div>

        <Card className="mx-auto max-w-2xl mt-8">
          <CardHeader>
            <CardTitle>Formulario de Solicitud</CardTitle>
            <CardDescription>
              Cuéntanos sobre tu proyecto y nos pondremos en contacto contigo a la brevedad.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nombre</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Tu nombre"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Número de contacto</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="Tu teléfono"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Lugar para el presupuesto</Label>
                  <RadioGroup
                    value={formData.location}
                    onValueChange={handleRadioChange}
                    className="flex flex-col space-y-1"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="hogar" id="hogar" />
                      <Label htmlFor="hogar">Hogar</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="edificio" id="edificio" />
                      <Label htmlFor="edificio">Edificio</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="otro" id="otro" />
                      <Label htmlFor="otro">Otro</Label>
                    </div>
                  </RadioGroup>
                </div>

                <div className="space-y-2">
                  <Label>Tipo de solución que necesitas</Label>
                  <div className="flex flex-col space-y-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="connectivity"
                        checked={formData.needsConnectivity}
                        onCheckedChange={(checked: boolean) => handleCheckboxChange("needsConnectivity", checked)}
                      />
                      <Label htmlFor="connectivity">Conectividad / WiFi</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="security"
                        checked={formData.needsSecurity}
                        onCheckedChange={(checked: boolean) => handleCheckboxChange("needsSecurity", checked)}
                      />
                      <Label htmlFor="security">Cámaras de seguridad</Label>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Describe tu problema o necesidad</Label>
                  <Textarea
                    id="description"
                    name="description"
                    placeholder="Explica brevemente qué necesitas..."
                    className="min-h-[120px]"
                    value={formData.description}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                Enviar Solicitud
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
