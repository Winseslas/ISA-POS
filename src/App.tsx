import React, { useState } from 'react';
import { Menu, X, Phone, Mail, MapPin, Download, Check, Users, Building, ShoppingCart } from 'lucide-react';
import { TestimonialSlider } from './components/pages/home/Testimonials/TestimonialSlider';
import { ImageSlider } from './components/pages/home/Services/ImageSlider';
import { ThumbnailSlider } from './components/pages/home/Services/ThumbnailSlider';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo ISA */}
            <div className="flex items-center">
              <div className="text-2xl font-bold">
                <span className="text-green-600">I</span>
                <span className="text-orange-500">S</span>
                <span className="text-green-600">A</span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-gray-700 hover:text-green-600 transition-colors">Home</a>
              <a href="#" className="text-gray-700 hover:text-green-600 transition-colors">About</a>
              <a href="#" className="text-gray-700 hover:text-green-600 transition-colors">Services</a>
              <a href="#" className="text-gray-700 hover:text-green-600 transition-colors">Contact</a>
            </nav>

            {/* Mobile menu button */}
            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-4 py-2 space-y-2">
              <a href="#" className="block py-2 text-gray-700 hover:text-green-600">Home</a>
              <a href="#" className="block py-2 text-gray-700 hover:text-green-600">About</a>
              <a href="#" className="block py-2 text-gray-700 hover:text-green-600">Services</a>
              <a href="#" className="block py-2 text-gray-700 hover:text-green-600">Contact</a>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-green-50 to-orange-50 py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="z-10">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                ISA Sales Force
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Manage your Sales force and their 
                performance with our comprehensive 
                sales management system designed 
                for modern businesses.
              </p>
              <button className="bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-700 transition-colors">
                Learn More
              </button>
            </div>
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-green-100 to-orange-100 rounded-2xl flex items-center justify-center">
                <img 
                  src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600" 
                  alt="Professional woman with tablet" 
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 bg-green-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg text-center">
              <Users className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Sales Management</h3>
              <p className="text-sm text-gray-600">Comprehensive sales team management and performance tracking</p>
            </div>
            <div className="bg-white p-6 rounded-lg text-center">
              <Building className="h-12 w-12 text-orange-500 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Business Analytics</h3>
              <p className="text-sm text-gray-600">Advanced analytics and reporting for better decision making</p>
            </div>
            <div className="bg-white p-6 rounded-lg text-center">
              <ShoppingCart className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Point of Sale</h3>
              <p className="text-sm text-gray-600">Modern POS system with integrated payment processing</p>
            </div>
            <div className="bg-white p-6 rounded-lg text-center">
              <Phone className="h-12 w-12 text-orange-500 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Mobile Support</h3>
              <p className="text-sm text-gray-600">Full mobile compatibility for on-the-go management</p>
            </div>
          </div>
        </div>
      </section>

     {/* Navigation Buttons */}
     <section className="bg-green-600 py-4 sticky top-16 z-40">
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         <div className="flex justify-center space-x-1 flex-wrap gap-2">
           <a 
             href="#restoration" 
             className="bg-gray-700 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
           >
             Restoration
           </a>
           <a 
             href="#beauty-institute" 
             className="bg-gray-700 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
           >
             Institut de Beauté
           </a>
           <a 
             href="#drinks-dancing" 
             className="bg-gray-700 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
           >
             Boisson & Dancing
           </a>
           <a 
             href="#commerce-shopping" 
             className="bg-green-700 text-white px-4 py-2 rounded-lg text-sm font-medium"
           >
             Commerce & Shopping
           </a>
           <a 
             href="#miscellaneous-services" 
             className="bg-gray-700 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
           >
             Service Divers
           </a>
         </div>
       </div>
     </section>

      {/* Services Sections */}
     <section className="py-20 bg-white" id="services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          
          {/* Restoration */}
          <div id="restoration" className="grid lg:grid-cols-2 gap-12 items-center scroll-mt-24">
            <div>
              <ImageSlider 
                images={[
                  "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=600",
                  "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=600",
                  "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=600",
                  "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=600"
                ]}
                autoPlay={true}
                interval={4000}
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Restoration</h2>
              <p className="text-gray-600 mb-6">
                Complete restaurant management solution with order tracking, inventory management, 
                and customer service optimization. Streamline your restaurant operations with our 
                comprehensive POS system designed specifically for the food service industry.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-600 mr-3" />
                  <span className="text-gray-700">Order Management System</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-600 mr-3" />
                  <span className="text-gray-700">Kitchen Display Integration</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-600 mr-3" />
                  <span className="text-gray-700">Table Management</span>
                </li>
              </ul>
              <ThumbnailSlider 
                images={[
                  "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=150",
                  "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=150",
                  "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=150",
                  "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=150",
                  "https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&w=150",
                  "https://images.pexels.com/photos/1449773/pexels-photo-1449773.jpeg?auto=compress&cs=tinysrgb&w=150"
                ]}
                title="Restaurant"
              />
            </div>
          </div>

          {/* Beauty Institute */}
          <div id="beauty-institute" className="grid lg:grid-cols-2 gap-12 items-center scroll-mt-24">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Beauty Institute</h2>
              <p className="text-gray-600 mb-6">
                Specialized management system for beauty salons and institutes. Handle appointments, 
                client records, service tracking, and inventory management all in one integrated platform 
                designed for the beauty industry.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-600 mr-3" />
                  <span className="text-gray-700">Appointment Scheduling</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-600 mr-3" />
                  <span className="text-gray-700">Client Management</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-600 mr-3" />
                  <span className="text-gray-700">Service Tracking</span>
                </li>
              </ul>
              <ThumbnailSlider 
                images={[
                  "https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=150",
                  "https://images.pexels.com/photos/3997989/pexels-photo-3997989.jpeg?auto=compress&cs=tinysrgb&w=150",
                  "https://images.pexels.com/photos/3985163/pexels-photo-3985163.jpeg?auto=compress&cs=tinysrgb&w=150",
                  "https://images.pexels.com/photos/3985166/pexels-photo-3985166.jpeg?auto=compress&cs=tinysrgb&w=150",
                  "https://images.pexels.com/photos/3997991/pexels-photo-3997991.jpeg?auto=compress&cs=tinysrgb&w=150",
                  "https://images.pexels.com/photos/3985167/pexels-photo-3985167.jpeg?auto=compress&cs=tinysrgb&w=150"
                ]}
                title="Beauty Institute"
              />
            </div>
            <div className="order-1 lg:order-2">
              <ImageSlider 
                images={[
                  "https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=600",
                  "https://images.pexels.com/photos/3997989/pexels-photo-3997989.jpeg?auto=compress&cs=tinysrgb&w=600",
                  "https://images.pexels.com/photos/3985163/pexels-photo-3985163.jpeg?auto=compress&cs=tinysrgb&w=600",
                  "https://images.pexels.com/photos/3985166/pexels-photo-3985166.jpeg?auto=compress&cs=tinysrgb&w=600"
                ]}
                autoPlay={true}
                interval={4500}
              />
            </div>
          </div>

          {/* Drinks & Dancing */}
          <div id="drinks-dancing" className="grid lg:grid-cols-2 gap-12 items-center scroll-mt-24">
            <div>
              <ImageSlider 
                images={[
                  "https://images.pexels.com/photos/274192/pexels-photo-274192.jpeg?auto=compress&cs=tinysrgb&w=600",
                  "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=600",
                  "https://images.pexels.com/photos/1267696/pexels-photo-1267696.jpeg?auto=compress&cs=tinysrgb&w=600",
                  "https://images.pexels.com/photos/1089930/pexels-photo-1089930.jpeg?auto=compress&cs=tinysrgb&w=600"
                ]}
                autoPlay={true}
                interval={3500}
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Drinks & Dancing</h2>
              <p className="text-gray-600 mb-6">
                Nightlife and entertainment venue management system. Perfect for bars, clubs, and 
                entertainment venues with features for event management, drink inventory, and 
                customer experience optimization.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-600 mr-3" />
                  <span className="text-gray-700">Event Management</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-600 mr-3" />
                  <span className="text-gray-700">Inventory Control</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-600 mr-3" />
                  <span className="text-gray-700">Customer Analytics</span>
                </li>
              </ul>
              <ThumbnailSlider 
                images={[
                  "https://images.pexels.com/photos/274192/pexels-photo-274192.jpeg?auto=compress&cs=tinysrgb&w=150",
                  "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=150",
                  "https://images.pexels.com/photos/1267696/pexels-photo-1267696.jpeg?auto=compress&cs=tinysrgb&w=150",
                  "https://images.pexels.com/photos/1089930/pexels-photo-1089930.jpeg?auto=compress&cs=tinysrgb&w=150",
                  "https://images.pexels.com/photos/1540406/pexels-photo-1540406.jpeg?auto=compress&cs=tinysrgb&w=150",
                  "https://images.pexels.com/photos/1267697/pexels-photo-1267697.jpeg?auto=compress&cs=tinysrgb&w=150"
                ]}
                title="Drinks & Dancing"
              />
            </div>
          </div>

          {/* Commerce & Shopping */}
          <div id="commerce-shopping" className="grid lg:grid-cols-2 gap-12 items-center scroll-mt-24">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Commerce & Shopping</h2>
              <p className="text-gray-600 mb-6">
                Comprehensive retail management solution for stores and shopping centers. 
                Manage inventory, sales, customer relationships, and analytics all from 
                one powerful platform designed for retail success.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-600 mr-3" />
                  <span className="text-gray-700">Inventory Management</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-600 mr-3" />
                  <span className="text-gray-700">Customer Loyalty Programs</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-600 mr-3" />
                  <span className="text-gray-700">Multi-location Support</span>
                </li>
              </ul>
              <ThumbnailSlider 
                images={[
                  "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=150",
                  "https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&w=150",
                  "https://images.pexels.com/photos/1005638/pexels-photo-1005638.jpeg?auto=compress&cs=tinysrgb&w=150",
                  "https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=150",
                  "https://images.pexels.com/photos/1005644/pexels-photo-1005644.jpeg?auto=compress&cs=tinysrgb&w=150",
                  "https://images.pexels.com/photos/1005640/pexels-photo-1005640.jpeg?auto=compress&cs=tinysrgb&w=150"
                ]}
                title="Commerce & Shopping"
              />
            </div>
            <div className="order-1 lg:order-2">
              <ImageSlider 
                images={[
                  "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600",
                  "https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&w=600",
                  "https://images.pexels.com/photos/1005638/pexels-photo-1005638.jpeg?auto=compress&cs=tinysrgb&w=600",
                  "https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=600"
                ]}
                autoPlay={true}
                interval={4200}
              />
            </div>
          </div>

          {/* Miscellaneous Services */}
          <div id="miscellaneous-services" className="grid lg:grid-cols-2 gap-12 items-center scroll-mt-24">
            <div>
              <ImageSlider 
                images={[
                  "https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&w=600",
                  "https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=600",
                  "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=600",
                  "https://images.pexels.com/photos/3182750/pexels-photo-3182750.jpeg?auto=compress&cs=tinysrgb&w=600"
                ]}
                autoPlay={true}
                interval={3800}
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Miscellaneous Services</h2>
              <p className="text-gray-600 mb-6">
                Flexible business management solutions for various service industries. 
                Our adaptable platform can be customized to meet the unique needs of 
                your specific business type and operational requirements.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-600 mr-3" />
                  <span className="text-gray-700">Custom Workflows</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-600 mr-3" />
                  <span className="text-gray-700">Flexible Reporting</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-600 mr-3" />
                  <span className="text-gray-700">Integration Support</span>
                </li>
              </ul>
              <ThumbnailSlider 
                images={[
                  "https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&w=150",
                  "https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=150",
                  "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=150",
                  "https://images.pexels.com/photos/3182750/pexels-photo-3182750.jpeg?auto=compress&cs=tinysrgb&w=150",
                  "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=150",
                  "https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=150"
                ]}
                title="Miscellaneous Services"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      {/* <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Ce que disent nos clients</h2>
            <p className="text-xl text-gray-600">
              Découvrez pourquoi des milliers d'entreprises font confiance à ISA
            </p>
          </div>
          <TestimonialSlider />
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="py-20 bg-green-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-12">
            <img 
              src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400" 
              alt="Professional woman" 
              className="w-32 h-32 rounded-full mx-auto mb-6 object-cover"
            />
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to transform your business?
            </h2>
            <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
              Join thousands of businesses that have chosen ISA to streamline their operations 
              and boost their performance. Start your free trial today.
            </p>
            <button className="bg-white text-green-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors">
              Get Started Now
            </button>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="text-3xl font-bold mb-4">
              <span className="text-green-600">I</span>
              <span className="text-orange-500">S</span>
              <span className="text-green-600">A</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Pricing</h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-green-600">L</span>
              </div>
              <h3 className="text-xl font-bold mb-2">LITE</h3>
              <p className="text-3xl font-bold text-green-600 mb-4">$99/Month</p>
              <p className="text-gray-600 mb-6">Perfect for small businesses starting their digital journey</p>
              <ul className="space-y-2 mb-8 text-left">
                <li className="flex items-center">
                  <Check className="h-4 w-4 text-green-600 mr-2" />
                  <span className="text-sm">Basic POS System</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-4 w-4 text-green-600 mr-2" />
                  <span className="text-sm">Up to 2 Users</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-4 w-4 text-green-600 mr-2" />
                  <span className="text-sm">Basic Reporting</span>
                </li>
              </ul>
              <button className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors">
                Choose Plan
              </button>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-green-600">S</span>
              </div>
              <h3 className="text-xl font-bold mb-2">SMART</h3>
              <p className="text-3xl font-bold text-green-600 mb-4">$199/Month</p>
              <p className="text-gray-600 mb-6">Ideal for growing businesses with advanced needs</p>
              <ul className="space-y-2 mb-8 text-left">
                <li className="flex items-center">
                  <Check className="h-4 w-4 text-green-600 mr-2" />
                  <span className="text-sm">Advanced POS System</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-4 w-4 text-green-600 mr-2" />
                  <span className="text-sm">Up to 10 Users</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-4 w-4 text-green-600 mr-2" />
                  <span className="text-sm">Advanced Analytics</span>
                </li>
              </ul>
              <button className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors">
                Choose Plan
              </button>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-green-600">A</span>
              </div>
              <h3 className="text-xl font-bold mb-2">ABOVE LITE</h3>
              <p className="text-3xl font-bold text-green-600 mb-4">$299/Month</p>
              <p className="text-gray-600 mb-6">Comprehensive solution for established businesses</p>
              <ul className="space-y-2 mb-8 text-left">
                <li className="flex items-center">
                  <Check className="h-4 w-4 text-green-600 mr-2" />
                  <span className="text-sm">Full POS Suite</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-4 w-4 text-green-600 mr-2" />
                  <span className="text-sm">Unlimited Users</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-4 w-4 text-green-600 mr-2" />
                  <span className="text-sm">Premium Support</span>
                </li>
              </ul>
              <button className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors">
                Choose Plan
              </button>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-green-600">∞</span>
              </div>
              <h3 className="text-xl font-bold mb-2">INFINITY</h3>
              <p className="text-3xl font-bold text-green-600 mb-4">$499/Month</p>
              <p className="text-gray-600 mb-6">Enterprise solution with unlimited possibilities</p>
              <ul className="space-y-2 mb-8 text-left">
                <li className="flex items-center">
                  <Check className="h-4 w-4 text-green-600 mr-2" />
                  <span className="text-sm">Enterprise Features</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-4 w-4 text-green-600 mr-2" />
                  <span className="text-sm">Custom Integration</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-4 w-4 text-green-600 mr-2" />
                  <span className="text-sm">24/7 Priority Support</span>
                </li>
              </ul>
              <button className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors">
                Choose Plan
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section className="py-16 bg-green-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Download Now !!!</h2>
          <div className="flex justify-center space-x-4">
            <button className="bg-black text-white px-6 py-3 rounded-lg flex items-center space-x-2 hover:bg-gray-800 transition-colors">
              <Download className="h-5 w-5" />
              <span>App Store</span>
            </button>
            <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors">
              Google Play
            </button>
          </div>
        </div>
      </section>

      {/* About ISA Section */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">About ISA</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                ISA is the innovative digital solution for small and medium-sized enterprises in the commercial sector, aiming at 
                optimizing business processes. Our team is made up of young, dynamic, and experienced professionals in the field of 
                information technology and business management.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                We understand the challenges faced by modern businesses and have developed comprehensive solutions that address 
                these needs effectively. Our platform combines cutting-edge technology with user-friendly interfaces to deliver 
                exceptional results.
              </p>
              <p className="text-gray-600 leading-relaxed">
                With ISA, you're not just getting software - you're getting a partner committed to your success. We provide ongoing 
                support, regular updates, and continuous innovation to ensure your business stays ahead of the competition.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=300" 
                alt="Team member 1" 
                className="w-full h-48 object-cover rounded-lg"
              />
              <img 
                src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=300" 
                alt="Team member 2" 
                className="w-full h-48 object-cover rounded-lg"
              />
              <img 
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=300" 
                alt="Team member 3" 
                className="w-full h-48 object-cover rounded-lg"
              />
              <img 
                src="https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&w=300" 
                alt="Team member 4" 
                className="w-full h-48 object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-bold mb-4">
                <span className="text-green-600">I</span>
                <span className="text-orange-500">S</span>
                <span className="text-green-600">A</span>
              </div>
              <p className="text-gray-400 mb-4">
                Innovative solutions for modern businesses. Transform your operations with our comprehensive POS and management systems.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Restaurant POS</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Beauty Salon</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Retail Management</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Entertainment</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Training</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <div className="space-y-3 text-gray-400">
                <div className="flex items-center">
                  <Phone className="h-5 w-5 mr-3" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 mr-3" />
                  <span>contact@isa.com</span>
                </div>
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 mr-3 mt-0.5" />
                  <span>123 Business Ave<br />Suite 100<br />City, State 12345</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p className="text-gray-400">© 2024 ISA. All rights reserved. | Privacy Policy | Terms of Service</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;