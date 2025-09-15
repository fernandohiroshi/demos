"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, Clock, Phone } from "lucide-react"

export default function Booking() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    vehicle: "",
    date: "",
    time: "",
    notes: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Booking submitted:", formData)
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <section id="booking" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Agende Seu Serviço</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Pronto para dar ao seu carro o tratamento premium que ele merece? Agende seu horário hoje e experimente a
            diferença CruzeWash.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Booking Form */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-slate-900">Agendar Horário</CardTitle>
                <CardDescription>
                  Preencha o formulário abaixo e confirmaremos seu agendamento em até 24 horas.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Information */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nome Completo *</Label>
                      <Input
                        id="name"
                        type="text"
                        placeholder="João Silva"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Número de Telefone *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="(11) 99999-9999"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Endereço de Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="joao@exemplo.com"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                    />
                  </div>

                  {/* Service Selection */}
                  <div className="space-y-2">
                    <Label htmlFor="service">Pacote de Serviço *</Label>
                    <Select onValueChange={(value) => handleInputChange("service", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione um pacote de serviço" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="basic">Lavagem Básica - R$ 59</SelectItem>
                        <SelectItem value="premium">Detalhamento Premium - R$ 159</SelectItem>
                        <SelectItem value="luxury">Experiência de Luxo - R$ 299</SelectItem>
                        <SelectItem value="custom">Orçamento Personalizado</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="vehicle">Informações do Veículo *</Label>
                    <Input
                      id="vehicle"
                      type="text"
                      placeholder="ex: BMW X5 2020"
                      value={formData.vehicle}
                      onChange={(e) => handleInputChange("vehicle", e.target.value)}
                      required
                    />
                  </div>

                  {/* Date and Time */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="date">Data Preferida *</Label>
                      <Input
                        id="date"
                        type="date"
                        value={formData.date}
                        onChange={(e) => handleInputChange("date", e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="time">Horário Preferido *</Label>
                      <Select onValueChange={(value) => handleInputChange("time", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione horário" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="8:00">8:00 AM</SelectItem>
                          <SelectItem value="9:00">9:00 AM</SelectItem>
                          <SelectItem value="10:00">10:00 AM</SelectItem>
                          <SelectItem value="11:00">11:00 AM</SelectItem>
                          <SelectItem value="12:00">12:00 PM</SelectItem>
                          <SelectItem value="13:00">1:00 PM</SelectItem>
                          <SelectItem value="14:00">2:00 PM</SelectItem>
                          <SelectItem value="15:00">3:00 PM</SelectItem>
                          <SelectItem value="16:00">4:00 PM</SelectItem>
                          <SelectItem value="17:00">5:00 PM</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="notes">Observações Adicionais</Label>
                    <Textarea
                      id="notes"
                      placeholder="Alguma solicitação especial ou preocupação sobre seu veículo..."
                      value={formData.notes}
                      onChange={(e) => handleInputChange("notes", e.target.value)}
                      rows={3}
                    />
                  </div>

                  <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                    Agendar Horário
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Booking Information */}
            <div className="space-y-8">
              {/* Contact Info */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center text-xl font-bold text-slate-900">
                    <Phone className="h-5 w-5 mr-2 text-blue-600" />
                    Agendamento Rápido
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 mb-4">Prefere agendar por telefone? Ligue diretamente:</p>
                  <div className="text-2xl font-bold text-blue-600 mb-4">(11) 9999-WASH</div>
                  <p className="text-sm text-slate-500">Disponível Segunda - Sábado, 8:00 - 18:00</p>
                </CardContent>
              </Card>

              {/* Business Hours */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center text-xl font-bold text-slate-900">
                    <Clock className="h-5 w-5 mr-2 text-blue-600" />
                    Horário de Funcionamento
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-slate-600">Segunda - Sexta</span>
                      <span className="font-medium">8:00 - 18:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">Sábado</span>
                      <span className="font-medium">8:00 - 17:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">Domingo</span>
                      <span className="font-medium">10:00 - 16:00</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Booking Tips */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center text-xl font-bold text-slate-900">
                    <Calendar className="h-5 w-5 mr-2 text-blue-600" />
                    Dicas de Agendamento
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-slate-600">
                    <li>• Agende com 2-3 dias de antecedência para melhor disponibilidade</li>
                    <li>• Horários matinais geralmente têm menor tempo de espera</li>
                    <li>• Pacotes premium requerem 2-3 horas</li>
                    <li>• Oferecemos busca e entrega para pacotes de luxo</li>
                    <li>• Política de cancelamento de 24 horas</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
