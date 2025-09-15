"use client";

import { BlogCard } from "@/components/ui/blog-card";
import { AnimatedSection } from "@/components/ui/animated-section";

export function BlogSection() {
  const articles = [
    {
      title: "Como comer de forma saudável e com consistência?",
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis cursus vitae lorem vehicula, tincidunt cursus tortor.",
      image:
        "https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
    },
    {
      title: "Por que o café da manhã é tão importante?",
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis cursus vitae lorem vehicula, tincidunt cursus tortor.",
      image:
        "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-light text-gray-800 mb-4 leading-tight">
              Descubra as novidades do mundo da nutrição
            </h2>
          </AnimatedSection>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {articles.map((article, index) => (
            <BlogCard key={index} {...article} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
