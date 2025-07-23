import React, { useState } from 'react';

const categories = [
    'Restauration',
    'Institut de beauté',
    'Boissons et danse',
    'Commerce et shopping',
    'Services divers'
];

const faqCategories = [
    'Informations générales',
    'Prérequis',
    'Abonnement',
    'Support',
];

const ContentForm: React.FC = () => {
    const [form, setForm] = useState({
        category: '',
        title: '',
        description: '',
        features: '',
        image: ''
    });

    const [faqForm, setFaqForm] = useState({
        category: '',
        question: '',
        answer: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleFaqChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFaqForm({ ...faqForm, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Ici, ajoutez la logique pour envoyer les données au backend ou les stocker
        alert('Contenu ajouté !');
    };

    const handleFaqSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Ici, ajoutez la logique pour envoyer la FAQ au backend ou la stocker
        alert('FAQ ajoutée !');
    };

    return (
        <div className="max-w-xl mx-auto bg-white p-8 rounded-xl shadow-sm border border-gray-100 space-y-12">
            <div>
                <h2 className="text-2xl font-bold mb-6">Ajouter un nouveau contenu</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Catégorie</label>
                        <select
                            name="category"
                            value={form.category}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border rounded-lg"
                            required
                        >
                            <option value="">Sélectionner...</option>
                            {categories.map((cat) => (
                                <option key={cat} value={cat}>{cat}</option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Titre</label>
                        <input
                            name="title"
                            value={form.title}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border rounded-lg"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                        <textarea
                            name="description"
                            value={form.description}
                            onChange={handleChange}
                            rows={3}
                            className="w-full px-3 py-2 border rounded-lg"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Fonctionnalités (séparées par des virgules)</label>
                        <input
                            name="features"
                            value={form.features}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border rounded-lg"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">URL de l’image</label>
                        <input
                            name="image"
                            value={form.image}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border rounded-lg"
                        />
                    </div>
                    <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">
                        Ajouter
                    </button>
                </form>
            </div>
            <div>
                <h2 className="text-2xl font-bold mb-6">Ajouter une FAQ</h2>
                <form onSubmit={handleFaqSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Catégorie FAQ</label>
                        <select
                            name="category"
                            value={faqForm.category}
                            onChange={handleFaqChange}
                            className="w-full px-3 py-2 border rounded-lg"
                            required
                        >
                            <option value="">Sélectionner...</option>
                            {faqCategories.map((cat) => (
                                <option key={cat} value={cat}>{cat}</option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Question</label>
                        <input
                            name="question"
                            value={faqForm.question}
                            onChange={handleFaqChange}
                            className="w-full px-3 py-2 border rounded-lg"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Réponse</label>
                        <textarea
                            name="answer"
                            value={faqForm.answer}
                            onChange={handleFaqChange}
                            rows={3}
                            className="w-full px-3 py-2 border rounded-lg"
                            required
                        />
                    </div>
                    <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">
                        Ajouter la FAQ
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ContentForm;