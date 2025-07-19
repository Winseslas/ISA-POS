import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react';
import { InteractiveMap } from './InteractiveMap';
import { useTranslation } from 'react-i18next';

export const Contact: React.FC = () => {
    const { t } = useTranslation();

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        business: '',
        phone: '',
        email: '',
        need: 'Free Demo',
        message: ''
    });
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [touched, setTouched] = useState<Record<string, boolean>>({});

    const validateField = (name: string, value: string): string => {
        switch (name) {
            case 'firstName':
            case 'lastName':
            case 'business':
            case 'message':
                return value.trim() ? '' : t('pages.contactPage.contact.form.error_required');
            case 'email':
                if (!value) return t('pages.contactPage.contact.form.error_email_required');
                if (!/\S+@\S+\.\S+/.test(value)) return t('pages.contactPage.contact.form.error_email_invalid');
                return '';
            case 'phone':
                if (!value) return t('pages.contactPage.contact.form.error_phone_required');
                if (!/^(\+237)?[\s.-]?(\d{9})$/.test(value.replace(/\s/g, ''))) return t('pages.contactPage.contact.form.error_phone_invalid');
                return '';
            default:
                return '';
        }
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));

        // Si le champ a déjà été touché, validez en temps réel
        if (touched[name]) {
            const error = validateField(name, value);
            setErrors(prev => ({ ...prev, [name]: error }));
        }
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        // Marque le champ comme "touché"
        setTouched(prev => ({ ...prev, [name]: true }));
        const error = validateField(name, value);
        setErrors(prev => ({ ...prev, [name]: error }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const newErrors: Record<string, string> = {};
        let hasErrors = false;

        // Marque tous les champs comme "touchés" pour activer la validation partout
        const allTouched = Object.keys(formData).reduce((acc, key) => ({ ...acc, [key]: true }), {});
        setTouched(allTouched);

        Object.keys(formData).forEach(key => {
            const error = validateField(key, formData[key as keyof typeof formData]);
            if (error) {
                newErrors[key] = error;
                hasErrors = true;
            }
        });

        setErrors(newErrors);

        if (!hasErrors) {
            // Simulate form submission
            setIsSubmitted(true);
            setTimeout(() => {
                setIsSubmitted(false);
                // Optionnel: réinitialiser le formulaire après soumission
                setFormData({
                    firstName: '',
                    lastName: '',
                    business: '',
                    phone: '',
                    email: '',
                    need: 'Free Demo',
                    message: ''
                });
            }, 3000);
        }
    };
    
    return (
        <section className="py-20 bg-gray-50" id="contact">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="text-3xl font-bold mb-4">
                        <span className="text-green-600">I</span>
                        <span className="text-orange-500">S</span>
                        <span className="text-green-600">A</span>
                    </div>
                    <h1 className="text-5xl font-bold text-gray-900 mb-6">{t('pages.contactPage.header.title')}</h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t('pages.contactPage.header.subtitle')}</p>
                </div>

                {/* Main Contact Section */}
                <div className="grid lg:grid-cols-2 gap-12 mb-16">
                    {/* Contact Form */}
                    <div className="bg-white p-8 rounded-2xl shadow-lg">
                        <div className="mb-8">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">
                                {t('pages.contactPage.contact.form.title')}
                            </h2>
                            <p className="text-green-600 font-semibold text-lg">
                                {t('pages.contactPage.contact.form.subtitle')}
                            </p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* Name Fields */}
                            <div className="grid md:grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                                        {t('pages.contactPage.contact.form.firstName')}
                                    </label>
                                    <input
                                        id="firstName"
                                        type="text"
                                        name="firstName"
                                        value={formData.firstName}
                                        onChange={handleInputChange}
                                        onBlur={handleBlur}
                                        className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:border-transparent transition-colors ${errors.firstName && touched.firstName ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-green-500'}`}
                                        placeholder="Enter your first name"
                                    />
                                    {errors.firstName && touched.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>}
                                </div>
                                <div>
                                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                                        {t('pages.contactPage.contact.form.lastName')}
                                    </label>
                                    <input
                                        id="lastName"
                                        type="text"
                                        name="lastName"
                                        value={formData.lastName}
                                        onChange={handleInputChange}
                                        required
                                        onBlur={handleBlur}
                                        className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:border-transparent transition-colors ${errors.lastName && touched.lastName ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-green-500'}`}
                                        placeholder="Enter your last name"
                                    />
                                    {errors.lastName && touched.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>}
                                </div>
                            </div>

                            {/* Business */}
                            <div>
                                <label htmlFor="business" className="block text-sm font-medium text-gray-700 mb-2">
                                    {t('pages.contactPage.contact.form.business')}
                                </label>
                                <input
                                    id="business"
                                    type="text"
                                    name="business"
                                    value={formData.business}
                                    onChange={handleInputChange}
                                    required
                                    onBlur={handleBlur}
                                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:border-transparent transition-colors ${errors.business && touched.business ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-green-500'}`}
                                    placeholder="Enter your business name"
                                />
                                {errors.business && touched.business && <p className="text-red-500 text-xs mt-1">{errors.business}</p>}
                            </div>

                            {/* Phone */}
                            <div>
                                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                                    {t('pages.contactPage.contact.form.phone')}
                                </label>
                                <input
                                    id="phone"
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                    required
                                    onBlur={handleBlur}
                                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:border-transparent transition-colors ${errors.phone && touched.phone ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-green-500'}`}
                                    placeholder="+237 XXX XXX XXX"
                                />
                                {errors.phone && touched.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                            </div>

                            {/* Email */}
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                    {t('pages.contactPage.contact.form.email')}
                                </label>
                                <input
                                    id="email"
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    required
                                    onBlur={handleBlur}
                                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:border-transparent transition-colors ${errors.email && touched.email ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-green-500'}`}
                                    placeholder="Enter your email address"
                                />
                                {errors.email && touched.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                            </div>

                            {/* Your Need */}
                            <div>
                                <label htmlFor="need" className="block text-sm font-medium text-gray-700 mb-2">
                                    {t('pages.contactPage.contact.form.need')}
                                </label>
                                <select
                                    id="need"
                                    name="need"
                                    value={formData.need}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                                >
                                    <option value="Free Demo">Free Demo</option>
                                    <option value="Product Information">Product Information</option>
                                    <option value="Pricing Details">Pricing Details</option>
                                    <option value="Technical Support">Technical Support</option>
                                    <option value="Partnership">Partnership</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>

                            {/* Message */}
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                                    {t('pages.contactPage.contact.form.message')}
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    required
                                    rows={4}
                                    onBlur={handleBlur}
                                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:border-transparent transition-colors resize-none ${errors.message && touched.message ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-green-500'}`}
                                    placeholder="Tell us more about your needs..."
                                />
                                {errors.message && touched.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                disabled={isSubmitted}
                                className="w-full bg-green-600 text-white py-4 px-6 rounded-lg font-semibold hover:bg-green-700 transition-colors flex items-center justify-center space-x-2 disabled:opacity-50"
                            >
                                {isSubmitted ? (
                                    <>
                                        <CheckCircle className="h-5 w-5" />
                                        <span>{t('pages.contactPage.contact.form.messageSent')}</span>
                                    </>
                                ) : (
                                    <>
                                        <Send className="h-5 w-5" />
                                        <span>{t('pages.contactPage.contact.form.send')}</span>
                                    </>
                                )}
                            </button>
                        </form>
                    </div>

                    {/* Contact Image */}
                    <div className="relative">
                        <img
                            src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600"
                            alt="Professional working on laptop"
                            className="w-full h-full object-cover rounded-2xl shadow-lg"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl"></div>
                        <div className="absolute bottom-8 left-8 text-white">
                            <h3 className="text-2xl font-bold mb-2">{t('pages.contactPage.contact.image.title')}</h3>
                            <p className="text-lg opacity-90">
                                {t('pages.contactPage.contact.image.subtitle')}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Contact Information Cards */}
                <div className="grid md:grid-cols-3 gap-8 mb-16">
                    {/* Address */}
                    <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
                        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                            <MapPin className="h-8 w-8 text-green-600" />
                        </div>
                        <h3 className="text-xl font-bold text-green-600 mb-4">{t('pages.contactPage.contact.cards.address.title')}</h3>
                        <div className="text-gray-600 space-y-2">
                            <p className="font-semibold">{t('pages.contactPage.contact.cards.address.line1')}</p>
                            <p>{t('pages.contactPage.contact.cards.address.line2')}</p>
                            <p>{t('pages.contactPage.contact.cards.address.line3')}</p>
                            <p>{t('pages.contactPage.contact.cards.address.line4')}</p>
                            <p className="font-medium">{t('pages.contactPage.contact.cards.address.line5')}</p>
                        </div>
                    </div>

                    {/* Hours */}
                    <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
                        <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                            <Clock className="h-8 w-8 text-orange-500" />
                        </div>
                        <h3 className="text-xl font-bold text-orange-500 mb-4">{t('pages.contactPage.contact.cards.hours.title')}</h3>
                        <div className="text-gray-600 space-y-2">
                            <p className="font-semibold">{t('pages.contactPage.contact.cards.hours.weekdays')}</p>
                            <p>{t('pages.contactPage.contact.cards.hours.weekdays_time')}</p>
                            <p className="font-semibold">{t('pages.contactPage.contact.cards.hours.saturday')}</p>
                            <p>{t('pages.contactPage.contact.cards.hours.saturday_time')}</p>
                            <p className="text-sm text-gray-500 mt-4">
                                {t('pages.contactPage.contact.cards.hours.emergency')}
                            </p>
                        </div>
                    </div>

                    {/* Contact */}
                    <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
                        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                            <Phone className="h-8 w-8 text-green-600" />
                        </div>
                        <h3 className="text-xl font-bold text-green-600 mb-4">{t('pages.contactPage.contact.cards.contact.title')}</h3>
                        <div className="text-gray-600 space-y-3">
                            <div className="flex items-center justify-center space-x-2">
                                <Phone className="h-4 w-4" />
                                <span>{t('pages.contactPage.contact.cards.contact.phone1')}</span>
                            </div>
                            <div className="flex items-center justify-center space-x-2">
                                <Phone className="h-4 w-4" />
                                <span>{t('pages.contactPage.contact.cards.contact.phone2')}</span>
                            </div>
                            <div className="flex items-center justify-center space-x-2">
                                <Mail className="h-4 w-4" />
                                <span>{t('pages.contactPage.contact.cards.contact.email')}</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Map Section */}
                <div className="bg-white p-8 rounded-2xl shadow-lg">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">{t('pages.contactPage.map.title')}</h3>
                    <InteractiveMap />
                </div>

                {/* CTA Section */}
                <div className="mt-16 bg-green-600 rounded-2xl p-8 text-center text-white">
                    <h3 className="text-3xl font-bold mb-4">{t('pages.contactPage.cta.title')}</h3>
                    <p className="text-green-100 mb-6 max-w-2xl mx-auto text-lg">
                        {t('pages.contactPage.cta.description')}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                            {t('pages.contactPage.cta.demo_button')}
                        </button>
                        <button
                            className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors"
                            onClick={() => {
                                if (window.confirm(t('pages.contactPage.cta.confirm_call', 'Voulez-vous ouvrir l\'application d\'appel pour contacter le support ?'))) {
                                    window.location.href = 'tel:+237674516017';
                                }
                            }}
                        >
                            {t('pages.contactPage.cta.call_button')}
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};