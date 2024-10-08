'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"
import { ChevronDown, CheckCircle, Zap, Shield, BarChart, Users, Menu, X } from 'lucide-react'

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Features', href: '#features' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'About', href: '#about' },
  ]

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-red-50 to-red-100 dark:from-gray-900 dark:to-red-950">
 

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-white dark:bg-gray-800 shadow-lg rounded-b-lg mx-4 mt-2"
          >
            <nav className="flex flex-col space-y-4 p-4">
              {navItems.map((item) => (
                <Link key={item.name} href={item.href} className="text-gray-600 hover:text-red-600 dark:text-gray-300 dark:hover:text-red-400 transition-colors">
                  {item.name}
                </Link>
              ))}
              <Button className="bg-red-600 hover:bg-red-700 text-white w-full">
                Try for Free
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-5xl md:text-6xl lg:text-7xl">
                <span className="block">Enhance Your Images</span>
                <span className="block text-red-600 dark:text-red-400">with Our Upscaler</span>
              </h1>
              <p className="mt-6 max-w-lg mx-auto text-xl text-gray-500 dark:text-gray-300 sm:max-w-3xl">
                Transform your images into stunning high-resolution masterpieces effortlessly. Experience fast, secure, and scalable image enhancement solutions.
              </p>
              <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
                <div className="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5">
                  <Button className="w-full bg-red-600 hover:bg-red-700 text-white text-lg py-3">
                    Upscale Your Image Now
                  </Button>
                  <Button variant="outline" className="w-full text-red-600 bg-white hover:bg-red-50 border-red-600 text-lg py-3">
                    More Information
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="features" className="py-20 bg-white dark:bg-gray-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
                Key Features of Our Upscaler
              </h2>
              <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500 dark:text-gray-300">
                Powerful tools that will elevate your image quality to the next level.
              </p>
            </div>
            <div className="mt-20">
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  { icon: <Zap className="w-8 h-8" />, title: "Fast Processing", description: "Upscale your images in seconds." },
                  { icon: <Shield className="w-8 h-8" />, title: "Secure Uploads", description: "Your images are safe with us." },
                  { icon: <BarChart className="w-8 h-8" />, title: "High-Quality Results", description: "Experience superior image enhancement." },
                  { icon: <Users className="w-8 h-8" />, title: "User-Friendly Interface", description: "Easy to use for everyone." },
                  { icon: <CheckCircle className="w-8 h-8" />, title: "Automatic Enhancements", description: "Let our AI do the work for you." },
                  { icon: <Zap className="w-8 h-8" />, title: "Multiple Formats", description: "Supports various image formats." },
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                      <CardHeader>
                        <div className="w-12 h-12 bg-red-100 dark:bg-red-900 rounded-full flex items-center justify-center text-red-600 dark:text-red-400 mb-4">
                          {feature.icon}
                        </div>
                        <CardTitle className="text-xl font-semibold">{feature.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-500 dark:text-gray-400">{feature.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="pricing" className="py-20 bg-red-50 dark:bg-red-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
                Affordable Pricing Plans
              </h2>
              <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500 dark:text-gray-300">
                Choose a plan that fits your needs and start enhancing your images today.
              </p>
            </div>
            <div className="mt-16">
              <Tabs defaultValue="monthly" className="w-full max-w-3xl mx-auto">
                <TabsList className="grid w-full grid-cols-2 mb-8">
                  <TabsTrigger value="monthly">Monthly</TabsTrigger>
                  <TabsTrigger value="yearly">Yearly</TabsTrigger>
                </TabsList>
                <TabsContent value="monthly">
                  <div className="grid gap-8 lg:grid-cols-3">
                    {[
                      { name: "Starter", price: "$9.99", features: ["1 user", "Basic features", "Email support"] },
                      { name: "Pro", price: "$29.99", features: ["5 users", "Advanced features", "Priority support"] },
                      { name: "Enterprise", price: "Custom", features: ["Unlimited users", "Custom solutions", "24/7 support"] },
                    ].map((plan, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                      >
                        <Card className={`flex flex-col h-full ${index === 1 ? 'border-red-600 dark:border-red-400 shadow-lg' : ''}`}>
                          <CardHeader>
                            <CardTitle className="text-2xl">{plan.name}</CardTitle>
                            <CardDescription>
                              <span className="text-3xl font-bold">{plan.price}</span>
                              {plan.price !== "Custom" && <span className="text-gray-500 dark:text-gray-400">/month</span>}
                            </CardDescription>
                          </CardHeader>
                          <CardContent className="flex-grow">
                            <ul className="space-y-2">
                              {plan.features.map((feature, fIndex) => (
                                <li key={fIndex} className="flex items-center">
                                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                                  {feature}
                                </li>
                              ))}
                            </ul>
                          </CardContent>
                          <CardFooter>
                            <Button className={`w-full ${index === 1 ? 'bg-red-600 hover:bg-red-700 text-white' : ''}`}>
                              {index === 2 ? 'Contact Us' : 'Choose Plan'}
                            </Button>
                          </CardFooter>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                </TabsContent>
                <TabsContent value="yearly">
                  <div className="grid gap-8 lg:grid-cols-3">
                    {[
                      { name: "Starter", price: "$99.99", features: ["1 user", "Basic features", "Email support"] },
                      { name: "Pro", price: "$299.99", features: ["5 users", "Advanced features", "Priority support"] },
                      { name: "Enterprise", price: "Custom", features: ["Unlimited users", "Custom solutions", "24/7 support"] },
                    ].map((plan, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                      >
                        <Card className={`flex flex-col h-full ${index === 1 ? 'border-red-600 dark:border-red-400 shadow-lg' : ''}`}>
                          <CardHeader>
                            <CardTitle className="text-2xl">{plan.name}</CardTitle>
                            <CardDescription>
                              <span className="text-3xl font-bold">{plan.price}</span>
                              {plan.price !== "Custom" && <span className="text-gray-500 dark:text-gray-400">/year</span>}
                            </CardDescription>
                          </CardHeader>
                          <CardContent className="flex-grow">
                            <ul className="space-y-2">
                              {plan.features.map((feature, fIndex) => (
                                <li key={fIndex} className="flex items-center">
                                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                                  {feature}
                                </li>
                              ))}
                            </ul>
                          </CardContent>
                          <CardFooter>
                            <Button className={`w-full ${index === 1 ? 'bg-red-600 hover:bg-red-700 text-white' : ''}`}>
                              {index === 2 ? 'Contact Us' : 'Choose Plan'}
                            </Button>
                          </CardFooter>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>

        <section id="about" className="py-20 bg-white dark:bg-gray-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
                About Our Upscaler
              </h2>
              <p className="mt-4 text-xl text-gray-500 dark:text-gray-300">
                Our image upscaling service was founded to provide high-quality image enhancement solutions. We aim to empower users with the tools they need to transform their images effortlessly.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 bg-red-600 dark:bg-red-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                Get Started with Image Upscaling
              </h2>
              <p className="mt-4 text-xl text-red-100">
                All the tools you need to enhance your images are at your fingertips. Start your free trial now!
              </p>
              <div className="mt-8">
                <Link href="/upscaler">
                <Button className="bg-white text-indigo-600 hover:bg-indigo-50 text-lg py-3 px-8">
                  Try for Free
                </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Product</h3>
              <ul className="mt-4 space-y-4">
                <li><Link href="#" className="text-base text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">Features</Link></li>
                <li><Link href="#" className="text-base text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">Pricing</Link></li>
                <li><Link href="#" className="text-base text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">Integrations</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Company</h3>
              <ul className="mt-4 space-y-4">
                <li><Link href="#" className="text-base text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">About Us</Link></li>
                <li><Link href="#" className="text-base text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">Blog</Link></li>
                <li><Link href="#" className="text-base text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">Kariyer</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Destek</h3>
              <ul className="mt-4 space-y-4">
                <li><Link href="#" className="text-base text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">Yardım Merkezi</Link></li>
                <li><Link href="#" className="text-base text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">Dokümantasyon</Link></li>
                <li><Link href="#" className="text-base text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">İletişim</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Yasal</h3>
              <ul className="mt-4 space-y-4">
                <li><Link href="#" className="text-base text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">Gizlilik Politikası</Link></li>
                <li><Link href="#" className="text-base text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">Kullanım Şartları</Link></li>
                <li><Link href="#" className="text-base text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">KVKK</Link></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 border-t border-gray-200 dark:border-gray-700 pt-8">
            <p className="text-base text-gray-400 xl:text-center">
              &copy; 2024 MicroSaaS. Tüm hakları saklıdır.
            </p>
          </div>
        </div>
      </footer>
 
    </div>


  )
}

