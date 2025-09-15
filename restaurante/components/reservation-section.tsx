"use client";

import type React from "react";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar, Clock, Users } from "lucide-react";

export function ReservationSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui seria implementada a lógica de envio do formulário
    alert("Reserva solicitada com sucesso! Entraremos em contato em breve.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      date: "",
      time: "",
      guests: "",
      message: "",
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <section id="reservas" ref={ref} className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-primary mb-6">
            Faça Sua Reserva
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Reserve sua mesa e desfrute de uma experiência gastronômica única em
            nosso ambiente acolhedor e elegante.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Restaurant Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <Card className="overflow-hidden h-full flex items-center justify-center py-0">
              <div className="w-full aspect-[4/3] max-h-[520px]">
                <img
                  src="/imgs/reservation.jpg"
                  alt="Interior elegante da Trattoria Bellavita com atmosfera italiana autêntica"
                  className="w-full h-full object-cover rounded"
                  style={{ aspectRatio: "4/3" }}
                />
              </div>
            </Card>
          </motion.div>

          {/* Reservation Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl font-serif text-primary">
                  Solicitar Reserva
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nome Completo</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) =>
                          handleInputChange("name", e.target.value)
                        }
                        required
                        placeholder="Seu nome"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">E-mail</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) =>
                          handleInputChange("email", e.target.value)
                        }
                        required
                        placeholder="seu@email.com"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Telefone</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) =>
                        handleInputChange("phone", e.target.value)
                      }
                      required
                      placeholder="(11) 99999-9999"
                    />
                  </div>

                  <div className="grid sm:grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="date">Data</Label>
                      <Input
                        id="date"
                        type="date"
                        value={formData.date}
                        onChange={(e) =>
                          handleInputChange("date", e.target.value)
                        }
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="time">Horário</Label>
                      <Select
                        value={formData.time}
                        onValueChange={(value) =>
                          handleInputChange("time", value)
                        }
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="18:00">18:00</SelectItem>
                          <SelectItem value="18:30">18:30</SelectItem>
                          <SelectItem value="19:00">19:00</SelectItem>
                          <SelectItem value="19:30">19:30</SelectItem>
                          <SelectItem value="20:00">20:00</SelectItem>
                          <SelectItem value="20:30">20:30</SelectItem>
                          <SelectItem value="21:00">21:00</SelectItem>
                          <SelectItem value="21:30">21:30</SelectItem>
                          <SelectItem value="22:00">22:00</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="guests">Pessoas</Label>
                      <Select
                        value={formData.guests}
                        onValueChange={(value) =>
                          handleInputChange("guests", value)
                        }
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Qtd" />
                        </SelectTrigger>
                        <SelectContent>
                          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(
                            (num) => (
                              <SelectItem key={num} value={num.toString()}>
                                {num}
                              </SelectItem>
                            )
                          )}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Observações (opcional)</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) =>
                        handleInputChange("message", e.target.value)
                      }
                      placeholder="Alguma preferência especial, aniversário, etc."
                      rows={3}
                      className="resize-none"
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full">
                    Solicitar Reserva
                  </Button>
                </form>
              </CardContent>
              <div className="pl-6 text-xs text-muted-foreground flex flex-wrap gap-x-6 gap-y-1">
                <span>
                  <span className="font-semibold">Seg - Dom:</span> 18h - 23h
                </span>
                <span>
                  <span className="font-semibold">Reservas:</span> até 20h
                </span>
                <span>
                  <span className="font-semibold">Grupos:</span> até 12 pessoas
                </span>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
