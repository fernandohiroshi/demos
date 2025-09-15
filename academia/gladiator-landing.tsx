import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Play, ArrowRight, Check } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Component() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="border-b border-gray-800">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold">GLADIATOR</div>
          <nav className="hidden md:flex space-x-8">
            <Link href="#" className="hover:text-lime-400 transition-colors">
              HOME
            </Link>
            <Link href="#" className="hover:text-lime-400 transition-colors">
              ABOUT
            </Link>
            <Link href="#" className="hover:text-lime-400 transition-colors">
              SERVICES
            </Link>
            <Link href="#" className="hover:text-lime-400 transition-colors">
              BLOG
            </Link>
            <Link href="#" className="hover:text-lime-400 transition-colors">
              PAGES
            </Link>
            <Link href="#" className="hover:text-lime-400 transition-colors">
              CONTACT
            </Link>
          </nav>
          <Button className="bg-lime-400 text-black hover:bg-lime-500">JOIN NOW</Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-6xl lg:text-7xl font-bold mb-6">
                STRENGTH
                <br />
                UNITED
              </h1>
              <p className="text-gray-400 text-lg mb-8 max-w-md">
                Join our community of fitness enthusiasts and transform your body with our expert trainers and
                state-of-the-art equipment.
              </p>
              <div className="flex items-center space-x-4">
                <Button className="bg-lime-400 text-black hover:bg-lime-500 px-8 py-3">GET STARTED</Button>
                <Button variant="ghost" className="flex items-center space-x-2">
                  <Play className="w-5 h-5" />
                  <span>WATCH VIDEO</span>
                </Button>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=600&width=500"
                alt="Fitness training"
                width={500}
                height={600}
                className="rounded-lg object-cover"
              />
              <div className="absolute top-4 right-4 bg-black/80 p-4 rounded-lg">
                <div className="flex items-center space-x-2 mb-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-lime-400 text-lime-400" />
                    ))}
                  </div>
                  <span className="text-sm">4.9</span>
                </div>
                <p className="text-xs text-gray-400">Trusted by 10k+ members</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 border-t border-gray-800">
        <div className="container mx-auto px-4 text-center">
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Dedicated to nurturing well-being, fostering community, and promoting physical growth.
          </p>
        </div>
      </section>

      {/* About Us */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge className="bg-lime-400 text-black mb-4">ABOUT US</Badge>
              <h2 className="text-4xl font-bold mb-6">ABOUT US</h2>
              <p className="text-gray-400 mb-6">
                We are dedicated to providing the best fitness experience with our modern equipment, expert trainers,
                and supportive community. Our mission is to help you achieve your fitness goals in a welcoming
                environment.
              </p>
              <p className="text-gray-400 mb-8">
                With over 10 years of experience in the fitness industry, we've helped thousands of members transform
                their lives through fitness and wellness programs.
              </p>
              <Button className="bg-lime-400 text-black hover:bg-lime-500">LEARN MORE</Button>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=600&width=600"
                alt="Person doing plank exercise"
                width={600}
                height={600}
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Workout Space */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <Badge className="bg-lime-400 text-black mb-4">FACILITIES</Badge>
          <h2 className="text-4xl font-bold mb-12">EXPLORE OUR WORKOUT SPACE</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "STRENGTH TRAINING", image: "strength training equipment gym" },
              { title: "BODY WEIGHT FITNESS", image: "bodyweight fitness training" },
              { title: "CARDIO FITNESS", image: "cardio equipment treadmill" },
              { title: "PERSONAL SESSIONS", image: "personal trainer session" },
            ].map((item, index) => (
              <Card key={index} className="bg-black border-gray-800 overflow-hidden group cursor-pointer">
                <div className="relative h-48">
                  <Image
                    src={`/placeholder.svg?height=200&width=300&query=${item.image}`}
                    alt={item.title}
                    width={300}
                    height={200}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-white">{item.title}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment Showcase */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge className="bg-lime-400 text-black mb-4">EQUIPMENT</Badge>
              <h2 className="text-4xl font-bold mb-6">
                EXPLORE OUR
                <br />
                WORKOUT SPACE
              </h2>
              <p className="text-gray-400 mb-8">
                Our gym features state-of-the-art equipment from leading manufacturers, ensuring you have access to the
                best tools for your fitness journey.
              </p>
              <Button className="bg-lime-400 text-black hover:bg-lime-500">VIEW ALL EQUIPMENT</Button>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="Gym equipment"
                width={600}
                height={500}
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Client Review */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge className="bg-lime-400 text-black mb-4">TESTIMONIAL</Badge>
              <h2 className="text-4xl font-bold mb-6">CLIENT REVIEW</h2>
              <p className="text-gray-400 text-lg mb-8">
                "The trainers are above and beyond to make personalized workout plans that cater to your goals and
                needs. What they offer blended perfectly with the sense of community. It's become how everyone supports
                each other."
              </p>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-lime-400 rounded-full flex items-center justify-center text-black font-bold">
                  JD
                </div>
                <div>
                  <p className="font-semibold">Jessica Davis</p>
                  <p className="text-gray-400 text-sm">Premium Member</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="Client testimonial"
                width={600}
                height={500}
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <Image
                src="/placeholder.svg?height=600&width=500"
                alt="Fitness training"
                width={500}
                height={600}
                className="rounded-lg object-cover"
              />
            </div>
            <div>
              <Badge className="bg-lime-400 text-black mb-4">PRICING</Badge>
              <h2 className="text-4xl font-bold mb-8">PRICING PLAN</h2>
              <div className="space-y-6">
                <Card className="bg-gray-900 border-gray-800 p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold">STANDARD</h3>
                      <p className="text-gray-400">Basic membership with gym access</p>
                    </div>
                    <div className="text-right">
                      <span className="text-2xl font-bold">$29.99</span>
                      <span className="text-gray-400">/month</span>
                    </div>
                  </div>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center space-x-2">
                      <Check className="w-4 h-4 text-lime-400" />
                      <span className="text-sm">Gym Access</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Check className="w-4 h-4 text-lime-400" />
                      <span className="text-sm">Locker Room</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Check className="w-4 h-4 text-lime-400" />
                      <span className="text-sm">Group Classes</span>
                    </li>
                  </ul>
                  <Button className="w-full bg-lime-400 text-black hover:bg-lime-500">CHOOSE PLAN</Button>
                </Card>

                <Card className="bg-gray-900 border-yellow-400 p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold">PREMIUM</h3>
                      <p className="text-gray-400">Full access with personal training</p>
                    </div>
                    <div className="text-right">
                      <span className="text-2xl font-bold">$49.99</span>
                      <span className="text-gray-400">/month</span>
                    </div>
                  </div>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center space-x-2">
                      <Check className="w-4 h-4 text-lime-400" />
                      <span className="text-sm">Everything in Standard</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Check className="w-4 h-4 text-lime-400" />
                      <span className="text-sm">Personal Training</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Check className="w-4 h-4 text-lime-400" />
                      <span className="text-sm">Nutrition Consultation</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Check className="w-4 h-4 text-lime-400" />
                      <span className="text-sm">Priority Booking</span>
                    </li>
                  </ul>
                  <Button className="w-full bg-lime-400 text-black hover:bg-lime-500">CHOOSE PLAN</Button>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <Badge className="bg-lime-400 text-black mb-4">BLOG</Badge>
          <h2 className="text-4xl font-bold mb-12">LATEST NEWS</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "FUNCTIONAL FITNESS BUILDS REAL-LIFE STRENGTH",
                image: "functional fitness training workout",
                date: "Dec 15, 2023",
              },
              {
                title: "NUTRITION COACHING AND PHONE SUPPORT",
                image: "nutrition coaching healthy food",
                date: "Dec 12, 2023",
              },
              {
                title: "MAKE ACTIVE RECOVERY A LIFESTYLE OF WELLNESS",
                image: "active recovery wellness lifestyle",
                date: "Dec 10, 2023",
              },
            ].map((article, index) => (
              <Card key={index} className="bg-black border-gray-800 overflow-hidden group cursor-pointer">
                <div className="relative h-48">
                  <Image
                    src={`/placeholder.svg?height=200&width=300&query=${article.image}`}
                    alt={article.title}
                    width={300}
                    height={200}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <p className="text-lime-400 text-sm mb-2">{article.date}</p>
                  <h3 className="font-bold text-white mb-4 line-clamp-2">{article.title}</h3>
                  <Button variant="ghost" className="p-0 h-auto text-lime-400 hover:text-yellow-300">
                    READ MORE <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button className="bg-lime-400 text-black hover:bg-lime-500">VIEW ALL POSTS</Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/placeholder.svg?height=400&width=1200"
            alt="Fitness background"
            width={1200}
            height={400}
            className="object-cover w-full h-full opacity-30"
          />
          <div className="absolute inset-0 bg-black/70"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-5xl font-bold mb-6">
            ELEVATE YOUR FITNESS GOALS
            <br />
            WITH GLADIATOR
          </h2>
          <Button className="bg-lime-400 text-black hover:bg-lime-500 px-8 py-3 text-lg">JOIN NOW</Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">GLADIATOR</h3>
              <p className="text-gray-400 mb-4">
                Transform your body and mind with our comprehensive fitness programs and expert guidance.
              </p>
              <div className="flex space-x-4">
                <div className="w-8 h-8 bg-lime-400 rounded flex items-center justify-center">
                  <span className="text-black text-xs font-bold">f</span>
                </div>
                <div className="w-8 h-8 bg-lime-400 rounded flex items-center justify-center">
                  <span className="text-black text-xs font-bold">t</span>
                </div>
                <div className="w-8 h-8 bg-lime-400 rounded flex items-center justify-center">
                  <span className="text-black text-xs font-bold">i</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-4">PAGES</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Classes
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Trainers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">LINKS</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white">
                    Membership
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Support
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">SERVICES</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white">
                    Personal Training
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Group Classes
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Nutrition Coaching
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Wellness Programs
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Recovery Services
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2023 Gladiator Fitness. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
