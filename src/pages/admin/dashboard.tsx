import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    BarChart3,
    Users,
    TrendingUp,
    Settings,
    FileText,
    MessageSquare,
    LogOut,
    Bell,
    Search,
    Edit3,
    Eye,
    Plus
} from 'lucide-react';

const AdminDashboard: React.FC = () => {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('overview');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedPage, setSelectedPage] = useState<any>(null);
    const [faqItems, setFaqItems] = useState([
        {
            id: 1,
            category: 'Informations générales',
            question: 'Android / iOS - fonctionnalités ?',
            answer: 'Oui, ISA fonctionne sur Android et iOS.',
        },
        // ...autres FAQ existantes...
    ]);
    const [faqForm, setFaqForm] = useState({
        category: '',
        question: '',
        answer: ''
    });

    useEffect(() => {
        // Vérifier l'authentification
        const isAuthenticated = localStorage.getItem('isAdminAuthenticated');
        if (!isAuthenticated) {
            navigate('/admin/login');
        }
    }, [navigate]);

    const handleLogout = () => {
        localStorage.removeItem('isAdminAuthenticated');
        navigate('/admin/login');
    };

    const stats = [
        { title: 'Visiteurs totaux', value: '12,543', change: '+12%', icon: Users, color: 'text-blue-600' },
        { title: 'Demandes de contact', value: '89', change: '+23%', icon: MessageSquare, color: 'text-green-600' },
        { title: 'Pages vues', value: '45,231', change: '+8%', icon: Eye, color: 'text-purple-600' },
        { title: 'Taux de conversion', value: '3.2%', change: '+0.5%', icon: TrendingUp, color: 'text-orange-600' }
    ];

    const recentActivities = [
        { action: 'Nouvelle demande de contact', user: 'Marie Dubois', time: 'Il y a 2 min', type: 'contact' },
        { action: 'Page FAQ mise à jour', user: 'Admin', time: 'Il y a 15 min', type: 'content' },
        { action: 'Nouveau téléchargement app', user: 'Jean Martin', time: 'Il y a 1h', type: 'download' },
        { action: 'Demande de démo planifiée', user: 'Sophie Laurent', time: 'Il y a 2h', type: 'demo' }
    ];

    const contentPages = [
        { name: 'Page d\'accueil', status: 'Publié', lastModified: '2024-01-15', views: '8,234' },
        { name: 'FAQ', status: 'Publié', lastModified: '2024-01-14', views: '2,156' },
        { name: 'Contact', status: 'Publié', lastModified: '2024-01-13', views: '1,876' },
        { name: 'Services', status: 'Brouillon', lastModified: '2024-01-12', views: '945' }
    ];

    const renderOverview = () => (
        <div className="space-y-6">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                    <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-gray-600 mb-1">{stat.title}</p>
                                <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                                <p className="text-sm text-green-600 font-medium">{stat.change}</p>
                            </div>
                            <div className={`w-12 h-12 rounded-lg bg-gray-50 flex items-center justify-center ${stat.color}`}>
                                <stat.icon className="h-6 w-6" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Charts and Activities */}
            <div className="grid lg:grid-cols-2 gap-6">
                {/* Chart placeholder */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Trafic du site</h3>
                    <div className="h-64 bg-gradient-to-br from-green-50 to-orange-50 rounded-lg flex items-center justify-center">
                        <div className="text-center">
                            <BarChart3 className="h-16 w-16 text-green-600 mx-auto mb-4" />
                            <p className="text-gray-600">Graphique des statistiques</p>
                        </div>
                    </div>
                </div>

                {/* Recent Activities */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Activités récentes</h3>
                    <div className="space-y-4">
                        {recentActivities.map((activity, index) => (
                            <div key={index} className="flex items-start space-x-3">
                                <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                                <div className="flex-1">
                                    <p className="text-sm font-medium text-gray-900">{activity.action}</p>
                                    <p className="text-xs text-gray-500">{activity.user} • {activity.time}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );

    const handleEditClick = (page: any) => {
        setSelectedPage(page);
        setIsModalOpen(true);
    };

    const handleModalClose = () => {
        setIsModalOpen(false);
        setSelectedPage(null);
    };

    const handleFaqChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setFaqForm({ ...faqForm, [e.target.name]: e.target.value });
    };

    const handleFaqSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setFaqItems(prev => [
            ...prev,
            {
                id: prev.length + 1,
                category: faqForm.category,
                question: faqForm.question,
                answer: faqForm.answer
            }
        ]);
        setFaqForm({ category: '', question: '', answer: '' });
        setIsModalOpen(false);
    };

    // Exemple de formulaire d’édition dans la modal
    const EditModal = () => (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
            <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-lg relative">
                <button
                    onClick={handleModalClose}
                    className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
                >
                    &times;
                </button>
                <h2 className="text-xl font-bold mb-6">Éditer {selectedPage?.name}</h2>
                <form className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Titre</label>
                        <input
                            type="text"
                            defaultValue={selectedPage?.name}
                            className="w-full px-3 py-2 border rounded-lg"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">URLs des images</label>
                        {(selectedPage?.images ?? []).map((img: string, idx: number) => (
                            <input
                                key={idx}
                                type="text"
                                defaultValue={img}
                                className="w-full px-3 py-2 border rounded-lg mb-2"
                            />
                        ))}
                        <button
                            type="button"
                            className="bg-green-600 text-white px-2 py-1 rounded-lg hover:bg-green-700"
                        >
                            + Ajouter une image
                        </button>
                    </div>
                    {/* Ajoute ici d’autres champs selon tes besoins */}
                    <button
                        type="submit"
                        className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
                    >
                        Enregistrer
                    </button>
                </form>

                {/* Formulaire d'ajout de FAQ */}
                <form onSubmit={handleFaqSubmit} className="space-y-4 mt-8">
                    <h3 className="text-lg font-semibold mb-2">Ajouter une FAQ</h3>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Catégorie</label>
                        <select
                            name="category"
                            value={faqForm.category}
                            onChange={handleFaqChange}
                            className="w-full px-3 py-2 border rounded-lg"
                            required
                        >
                            <option value="">Sélectionner...</option>
                            <option value="Informations générales">Informations générales</option>
                            <option value="Prérequis">Prérequis</option>
                            <option value="Abonnement">Abonnement</option>
                            <option value="Support">Support</option>
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

    const renderContent = () => (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold text-gray-900">Gestion du contenu</h2>
                <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors flex items-center space-x-2">
                    <Plus className="h-4 w-4" />
                    <span>Nouveau contenu</span>
                </button>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Page</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Statut</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Dernière modification</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Vues</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {contentPages.map((page, index) => (
                                <tr key={index} className="hover:bg-gray-50">
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="text-sm font-medium text-gray-900">{page.name}</div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${page.status === 'Publié'
                                            ? 'bg-green-100 text-green-800'
                                            : 'bg-yellow-100 text-yellow-800'
                                            }`}>
                                            {page.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        {page.lastModified}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        {page.views}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                        <div className="flex space-x-2">
                                            <button
                                                className="text-green-600 hover:text-green-900"
                                                onClick={() => handleEditClick(page)}
                                            >
                                                <Edit3 className="h-4 w-4" />
                                            </button>
                                            <button className="text-blue-600 hover:text-blue-900">
                                                <Eye className="h-4 w-4" />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            {isModalOpen && <EditModal />}
        </div>
    );

    const renderSettings = () => (
        <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">Paramètres</h2>

            <div className="grid lg:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Paramètres généraux</h3>
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Nom du site</label>
                            <input
                                type="text"
                                defaultValue="ISA POS"
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                            <textarea
                                rows={3}
                                defaultValue="Solution de gestion complète pour entreprises modernes"
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                            />
                        </div>
                    </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Langues</h3>
                    <div className="space-y-3">
                        {['Français', 'English', 'Deutsch'].map((lang, index) => (
                            <div key={index} className="flex items-center justify-between">
                                <span className="text-sm text-gray-700">{lang}</span>
                                <label className="relative inline-flex items-center cursor-pointer">
                                    <input type="checkbox" defaultChecked className="sr-only peer" />
                                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"></div>
                                </label>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <header className="bg-white shadow-sm border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center py-4">
                        <div className="flex items-center space-x-4">
                            <div className="text-2xl font-bold">
                                <span className="text-green-600">I</span>
                                <span className="text-orange-500">S</span>
                                <span className="text-green-600">A</span>
                            </div>
                            <div className="hidden md:block">
                                <h1 className="text-xl font-semibold text-gray-900">Dashboard Administration</h1>
                            </div>
                        </div>

                        <div className="flex items-center space-x-4">
                            <div className="relative">
                                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                                <input
                                    type="text"
                                    placeholder="Rechercher..."
                                    className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                />
                            </div>
                            <button className="relative p-2 text-gray-400 hover:text-gray-600">
                                <Bell className="h-5 w-5" />
                                <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
                            </button>
                            <button
                                onClick={handleLogout}
                                className="flex items-center space-x-2 text-gray-700 hover:text-gray-900"
                            >
                                <LogOut className="h-5 w-5" />
                                <span className="hidden md:block">Déconnexion</span>
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Sidebar */}
                    <div className="lg:w-64">
                        <nav className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
                            <div className="space-y-2">
                                {[
                                    { id: 'overview', label: 'Vue d\'ensemble', icon: BarChart3 },
                                    { id: 'content', label: 'Contenu', icon: FileText },
                                    { id: 'users', label: 'Utilisateurs', icon: Users },
                                    { id: 'analytics', label: 'Analytics', icon: TrendingUp },
                                    { id: 'settings', label: 'Paramètres', icon: Settings }
                                ].map((item) => (
                                    <button
                                        key={item.id}
                                        onClick={() => setActiveTab(item.id)}
                                        className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-colors ${activeTab === item.id
                                            ? 'bg-green-50 text-green-700 border border-green-200'
                                            : 'text-gray-700 hover:bg-gray-50'
                                            }`}
                                    >
                                        <item.icon className="h-5 w-5" />
                                        <span>{item.label}</span>
                                    </button>
                                ))}
                            </div>
                        </nav>
                    </div>

                    {/* Main Content */}
                    <div className="flex-1">
                        {activeTab === 'overview' && renderOverview()}
                        {activeTab === 'content' && renderContent()}
                        {activeTab === 'settings' && renderSettings()}
                        {activeTab === 'users' && (
                            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center">
                                <Users className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">Gestion des utilisateurs</h3>
                                <p className="text-gray-600">Cette section sera développée prochainement</p>
                            </div>
                        )}
                        {activeTab === 'analytics' && (
                            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center">
                                <TrendingUp className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">Analytics avancées</h3>
                                <p className="text-gray-600">Rapports détaillés et métriques de performance</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;