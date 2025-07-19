import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

interface Testimonial {
    id: number;
    name: string;
    role: string;
    company: string;
    content: string;
    rating: number;
    avatar: string;
}

const testimonials: Testimonial[] = [
    {
        id: 1,
        name: "Marie Dubois",
        role: "Propriétaire",
        company: "Restaurant Le Gourmet",
        content: "ISA a révolutionné notre gestion de restaurant. Le système POS est intuitif et nos serveurs l'ont adopté immédiatement. Nos ventes ont augmenté de 25% depuis l'installation.",
        rating: 5,
        avatar: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=150"
    },
    {
        id: 2,
        name: "Sophie Martin",
        role: "Directrice",
        company: "Beauty Salon Élégance",
        content: "La gestion des rendez-vous et des clients n'a jamais été aussi simple. ISA nous fait gagner un temps précieux et améliore l'expérience de nos clientes.",
        rating: 5,
        avatar: "https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=150"
    },
    {
        id: 3,
        name: "Jean-Pierre Leroy",
        role: "Gérant",
        company: "Bar Le Central",
        content: "Excellent système pour notre bar. La gestion des stocks et des événements est parfaite. L'équipe ISA est très réactive pour le support.",
        rating: 5,
        avatar: "https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&w=150"
    },
    {
        id: 4,
        name: "Amélie Rousseau",
        role: "Propriétaire",
        company: "Boutique Mode & Style",
        content: "ISA nous aide à gérer notre inventaire et nos ventes multi-canaux. Interface moderne et fonctionnalités complètes. Je recommande vivement !",
        rating: 5,
        avatar: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=150"
    }
];

export const TestimonialSlider: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
            );
        }, 5000);

        return () => clearInterval(timer);
    }, []);

    const goToPrevious = () => {
        setCurrentIndex(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1);
    };

    const goToNext = () => {
        setCurrentIndex(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1);
    };

    const currentTestimonial = testimonials[currentIndex];

    return (
        <div className="bg-white p-8 rounded-lg shadow-lg relative overflow-hidden">
            {/* Background Quote Icon */}
            <Quote className="absolute top-4 right-4 h-16 w-16 text-green-100" />

            {/* Content */}
            <div className="relative z-10">
                {/* Stars */}
                <div className="flex mb-4">
                    {[...Array(currentTestimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-700 text-lg mb-6 italic leading-relaxed">
                    "{currentTestimonial.content}"
                </p>

                {/* Author Info */}
                <div className="flex items-center">
                    <img
                        src={currentTestimonial.avatar}
                        alt={currentTestimonial.name}
                        className="w-12 h-12 rounded-full object-cover mr-4"
                    />
                    <div>
                        <h4 className="font-semibold text-gray-900">{currentTestimonial.name}</h4>
                        <p className="text-sm text-gray-600">
                            {currentTestimonial.role} - {currentTestimonial.company}
                        </p>
                    </div>
                </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-between items-center mt-6">
                <button
                    onClick={goToPrevious}
                    className="p-2 rounded-full bg-green-100 hover:bg-green-200 text-green-600 transition-colors"
                >
                    <ChevronLeft className="h-5 w-5" />
                </button>

                {/* Dots */}
                <div className="flex space-x-2">
                    {testimonials.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex
                                ? 'bg-green-600 scale-110'
                                : 'bg-gray-300 hover:bg-gray-400'
                                }`}
                        />
                    ))}
                </div>

                <button
                    onClick={goToNext}
                    className="p-2 rounded-full bg-green-100 hover:bg-green-200 text-green-600 transition-colors"
                >
                    <ChevronRight className="h-5 w-5" />
                </button>
            </div>
        </div>
    );
};