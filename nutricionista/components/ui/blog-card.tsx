"use client";

import { Card, CardContent } from "@/components/ui/card";
import { AnimatedSection } from "@/components/ui/animated-section";
import { motion } from "framer-motion";
import Image from "next/image";

interface BlogCardProps {
  title: string;
  excerpt: string;
  image: string;
  index?: number;
}

export function BlogCard({ title, excerpt, image, index = 0 }: BlogCardProps) {
  return (
    <AnimatedSection delay={index * 0.2}>
      <motion.div
        whileHover={{ y: -5, scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        <Card className="overflow-hidden transition-all duration-300 hover:shadow-xl cursor-pointer group pt-0">
          <motion.div
            className="relative h-48 overflow-hidden"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src={image || "/placeholder.svg"}
              alt={title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
          </motion.div>
          <CardContent className="p-6">
            <motion.h3
              className="text-xl font-semibold text-gray-800 mb-3 leading-tight"
              whileHover={{ color: "rgb(16 185 129)" }}
              transition={{ duration: 0.2 }}
            >
              {title}
            </motion.h3>
            <p className="text-gray-600 text-sm leading-relaxed">{excerpt}</p>
          </CardContent>
        </Card>
      </motion.div>
    </AnimatedSection>
  );
}
