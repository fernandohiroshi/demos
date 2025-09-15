"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, CheckCircle } from "lucide-react"
import { useState } from "react"

export default function Newsletter() {
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [interests, setInterests] = useState<string[]>([])
  const [isSubmitted, setIsSubmitted] = useState(false)

  const interestOptions = [
    "Jornalismo Investigativo",
    "Política & Governo",
    "Responsabilidade Corporativa",
    "Justiça Social",
    "Questões Ambientais",
    "Tecnologia & Ética",
  ]

  const handleInterestChange = (interest: string, checked: boolean) => {
    if (checked) {
      setInterests([...interests, interest])
    } else {
      setInterests(interests.filter((i) => i !== interest))
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email && name) {
      setIsSubmitted(true)
      // Here you would typically send the data to your newsletter service
    }
  }

  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <Mail className="h-8 w-8 mr-3" />
                <h2 className="text-4xl font-bold">Fique Informado</h2>
              </div>
              <p className="text-xl text-gray-300 mb-6">
                Inscreva-se na minha newsletter para receber insights exclusivos, bastidores e novidades das minhas últimas investigações.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                  <span className="text-gray-300">Atualizações investigativas semanais</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                  <span className="text-gray-300">Entrevistas e histórias exclusivas</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                  <span className="text-gray-300">Análises e tendências do setor</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                  <span className="text-gray-300">Sem spam, cancele a inscrição a qualquer momento</span>
                </div>
              </div>
            </div>

            <Card className="bg-white text-gray-900">
              <CardContent className="p-8">
                {!isSubmitted ? (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <Label htmlFor="name" className="text-gray-700">
                        Nome Completo
                      </Label>
                      <Input
                        id="name"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Digite seu nome completo"
                        required
                        className="mt-1"
                      />
                    </div>

                    <div>
                      <Label htmlFor="email" className="text-gray-700">
                        Endereço de E-mail
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Digite seu e-mail"
                        required
                        className="mt-1"
                      />
                    </div>

                    <div>
                      <Label className="text-gray-700 mb-3 block">Interesses (selecione todos que se aplicam)</Label>
                      <div className="grid grid-cols-1 gap-3">
                        {interestOptions.map((interest) => (
                          <div key={interest} className="flex items-center space-x-2">
                            <Checkbox
                              id={interest}
                              checked={interests.includes(interest)}
                              onCheckedChange={(checked) => handleInterestChange(interest, checked as boolean)}
                            />
                            <Label htmlFor={interest} className="text-sm text-gray-600">
                              {interest}
                            </Label>
                          </div>
                        ))}
                      </div>
                    </div>

                    <Button type="submit" className="w-full bg-gray-900 text-white hover:bg-gray-800">
                      Inscrever-se na Newsletter
                    </Button>

                    <p className="text-xs text-gray-500 text-center">
                      Ao se inscrever, você concorda em receber e-mails de Sarah Mitchell. Você pode cancelar a inscrição a qualquer momento.
                    </p>
                  </form>
                ) : (
                  <div className="text-center py-8">
                    <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h3>
                    <p className="text-gray-600">
                      You've successfully subscribed to my newsletter. Check your email for a confirmation message.
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
