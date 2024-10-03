'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"
import { ChevronDown, CheckCircle, Zap, Shield, BarChart, Users, Menu, X } from 'lucide-react'

export function EnhancedMicroSaas() {
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
    { name: 'Özellikler', href: '#features' },
    { name: 'Fiyatlandırma', href: '#pricing' },
    { name: 'Hakkımızda', href: '#about' },
  ]

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100 dark:from-gray-900 dark:to-indigo-950">
      <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${isScrolled ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-md' : 'bg-transparent'}`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="flex items-center space-x-2">
                <Zap className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
                <span className="text-2xl font-bold text-gray-900 dark:text-white">MicroSaaS</span>
              </Link>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link key={item.name} href={item.href} className="text-gray-600 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400 transition-colors">
                  {item.name}
                </Link>
              ))}
              <Button className="bg-indigo-600 hover:bg-indigo-700 text-white">
                Ücretsiz Dene
              </Button>
            </nav>
            <div className="md:hidden">
              <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </Button>
            </div>
          </div>
        </div>
      </header>

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
                <Link key={item.name} href={item.href} className="text-gray-600 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400 transition-colors">
                  {item.name}
                </Link>
              ))}
              <Button className="bg-indigo-600 hover:bg-indigo-700 text-white w-full">
                Ücretsiz Dene
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
                <span className="block">İşinizi Büyütün</span>
                <span className="block text-indigo-600 dark:text-indigo-400">MicroSaaS ile</span>
              </h1>
              <p className="mt-6 max-w-lg mx-auto text-xl text-gray-500 dark:text-gray-300 sm:max-w-3xl">
                Küçük işletmenizi büyük başarılara taşıyacak güçlü araçlar. Hızlı, güvenli ve ölçeklenebilir çözümlerle tanışın.
              </p>
              <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
                <div className="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5">
                  <Button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white text-lg py-3">
                    Ücretsiz Deneyin
                  </Button>
                  <Button variant="outline" className="w-full text-indigo-600 bg-white hover:bg-indigo-50 border-indigo-600 text-lg py-3">
                    Daha Fazla Bilgi
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
                Öne Çıkan Özellikler
              </h2>
              <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500 dark:text-gray-300">
                İşinizi bir üst seviyeye taşıyacak güçlü araçlar
              </p>
            </div>

            <div className="mt-20">
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  { icon: <Zap className="w-8 h-8" />, title: "Hızlı Entegrasyon", description: "Dakikalar içinde kurulum yapın ve hemen kullanmaya başlayın." },
                  { icon: <Shield className="w-8 h-8" />, title: "Güvenli Altyapı", description: "En son güvenlik protokolleri ile verileriniz güvende." },
                  { icon: <BarChart className="w-8 h-8" />, title: "Detaylı Analizler", description: "Gerçek zamanlı verilerle işinizi daha iyi anlayın." },
                  { icon: <Users className="w-8 h-8" />, title: "Takım İşbirliği", description: "Ekibinizle sorunsuz çalışın ve verimliliği artırın." },
                  { icon: <CheckCircle className="w-8 h-8" />, title: "Otomatik Görevler", description: "Tekrarlayan işleri otomatikleştirin, zamandan tasarruf edin." },
                  { icon: <Zap className="w-8 h-8" />, title: "API Entegrasyonu", description: "Mevcut araçlarınızla kolayca entegre edin." },
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                      <CardHeader>
                        <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900 rounded-full flex items-center justify-center text-indigo-600 dark:text-indigo-400 mb-4">
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

        <section id="pricing" className="py-20 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
                Fiyatlandırma Planları
              </h2>
              <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500 dark:text-gray-300">
                Her bütçeye uygun çözümler
              </p>
            </div>

            <div className="mt-16">
              <Tabs defaultValue="monthly" className="w-full max-w-3xl mx-auto">
                <TabsList className="grid w-full grid-cols-2 mb-8">
                  <TabsTrigger value="monthly">Aylık</TabsTrigger>
                  <TabsTrigger value="yearly">Yıllık</TabsTrigger>
                </TabsList>
                <TabsContent value="monthly">
                  <div className="grid gap-8 lg:grid-cols-3">
                    {[
                      { name: "Başlangıç", price: "₺99", features: ["5 kullanıcı", "Temel özellikler", "Email desteği"] },
                      { name: "Pro", price: "₺299", features: ["20 kullanıcı", "Gelişmiş özellikler", "Öncelikli destek", "API erişimi"] },
                      { name: "Kurumsal", price: "Özel", features: ["Sınırsız kullanıcı", "Özel geliştirmeler", "7/24 destek", "Özel eğitim"] },
                    ].map((plan, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                      >
                        <Card className={`flex flex-col h-full ${index === 1 ? 'border-indigo-600 dark:border-indigo-400 shadow-lg' : ''}`}>
                          <CardHeader>
                            <CardTitle className="text-2xl">{plan.name}</CardTitle>
                            <CardDescription>
                              <span className="text-3xl font-bold">{plan.price}</span>
                              {plan.price !== "Özel" && <span className="text-gray-500 dark:text-gray-400">/ay</span>}
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
                            <Button className={`w-full ${index === 1 ? 'bg-indigo-600 hover:bg-indigo-700 text-white' : ''}`}>
                              {index === 2 ? 'İletişime Geçin' : 'Planı Seçin'}
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
                      { name: "Başlangıç", price: "₺990", features: ["5 kullanıcı", "Temel özellikler", "Email desteği"] },
                      { name: "Pro", price: "₺2990", features: ["20 kullanıcı", "Gelişmiş özellikler", "Öncelikli destek", "API erişimi"] },
                      { name: "Kurumsal", price: "Özel", features: ["Sınırsız kullanıcı", "Özel geliştirmeler", "7/24 destek", "Özel eğitim"] },
                    ].map((plan, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                      >
                        <Card className={`flex flex-col h-full ${index === 1 ? 'border-indigo-600 dark:border-indigo-400 shadow-lg' : ''}`}>
                          <CardHeader>
                            <CardTitle className="text-2xl">{plan.name}</CardTitle>
                            <CardDescription>
                              <span className="text-3xl font-bold">{plan.price}</span>
                              {plan.price !== "Özel" && <span className="text-gray-500 dark:text-gray-400">/yıl</span>}
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
                            <Button className={`w-full ${index === 1 ? 'bg-indigo-600 hover:bg-indigo-700 text-white' : ''}`}>
                              {index === 2 ? 'İletişime Geçin' : 'Planı Seçin'}
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
                Hakkımızda
              </h2>
              <p className="mt-4 text-xl text-gray-500 dark:text-gray-300">
                MicroSaaS, işletmelerin dijital dönüşümünü kolaylaştırmak için 2023 yılında kuruldu. Amacımız, küçük ve
                orta ölçekli işletmelere kurumsal düzeyde çözümler sunmaktır.
              </p>
            </div>

            <div className="mt-20">
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                {[
                  { title: "Misyonumuz", content: "İşletmelerin büyümesine ve başarıya ulaşmasına yardımcı olmak için yenilikçi ve kullanıcı dostu çözümler sunmak." },
                  { title: "Vizyonumuz", content: "Dünya çapında küçük ve orta ölçekli işletmelerin tercih ettiği, güvenilir bir SaaS platformu olmak." },
                  { title: "Değerlerimiz", content: "Müşteri odaklılık, sürekli inovasyon, şeffaflık ve takım çalışması bizim temel değerlerimizdir." },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card className="h-full">
                      <CardHeader>
                        <CardTitle className="text-xl font-semibold">{item.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-500 dark:text-gray-400">{item.content}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-indigo-600 dark:bg-indigo-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                Hemen Başlayın
              </h2>
              <p className="mt-4 text-xl text-indigo-100">
                İşinizi büyütmek için gereken tüm araçlar elinizin altında. Hemen ücretsiz denemeye başlayın!
              </p>
              <div className="mt-8">
                <Button className="bg-white text-indigo-600 hover:bg-indigo-50 text-lg py-3 px-8">
                  Ücretsiz Deneyin
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Ürün</h3>
              <ul className="mt-4 space-y-4">
                <li><Link href="#" className="text-base text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">Özellikler</Link></li>
                <li><Link href="#" className="text-base text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">Fiyatlandırma</Link></li>
                <li><Link href="#" className="text-base text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">Entegrasyonlar</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Şirket</h3>
              <ul className="mt-4 space-y-4">
                <li><Link href="#" className="text-base text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">Hakkımızda</Link></li>
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