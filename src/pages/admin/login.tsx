import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Lock, User, Eye, EyeOff, Shield } from 'lucide-react';
// import { useTranslation } from 'react-i18next';

const AdminLogin: React.FC = () => {
    // const { t } = useTranslation();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setError('');

        // Simulation d'authentification
        setTimeout(() => {
            if (formData.username === 'admin' && formData.password === 'isa2024') {
                localStorage.setItem('isAdminAuthenticated', 'true');
                navigate('/admin/dashboard');
            } else {
                setError('Identifiants incorrects');
            }
            setIsLoading(false);
        }, 1000);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-green-50 to-orange-50 flex items-center justify-center p-4">
            <div className="max-w-md w-full">
                {/* Logo et titre */}
                <div className="text-center mb-8">
                    <div className="text-6xl font-bold mb-4">
                        <span className="text-green-600">I</span>
                        <span className="text-orange-500">S</span>
                        <span className="text-green-600">A</span>
                    </div>
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">Administration</h1>
                    <p className="text-gray-600">Connectez-vous pour accéder au dashboard</p>
                </div>

                {/* Formulaire de connexion */}
                <div className="bg-white p-8 rounded-2xl shadow-xl">
                    <div className="flex items-center justify-center mb-6">
                        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                            <Shield className="h-8 w-8 text-green-600" />
                        </div>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Username */}
                        <div>
                            <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-2">
                                Nom d'utilisateur
                            </label>
                            <div className="relative">
                                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                                <input
                                    id="username"
                                    name="username"
                                    type="text"
                                    required
                                    value={formData.username}
                                    onChange={handleInputChange}
                                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                                    placeholder="Entrez votre nom d'utilisateur"
                                />
                            </div>
                        </div>

                        {/* Password */}
                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                                Mot de passe
                            </label>
                            <div className="relative">
                                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                                <input
                                    id="password"
                                    name="password"
                                    type={showPassword ? 'text' : 'password'}
                                    required
                                    value={formData.password}
                                    onChange={handleInputChange}
                                    className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                                    placeholder="Entrez votre mot de passe"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                                >
                                    {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                                </button>
                            </div>
                        </div>

                        {/* Error message */}
                        {error && (
                            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
                                {error}
                            </div>
                        )}

                        {/* Submit button */}
                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full bg-green-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-green-700 focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {isLoading ? 'Connexion...' : 'Se connecter'}
                        </button>
                    </form>

                    {/* Demo credentials */}
                    <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                        <p className="text-sm text-gray-600 text-center mb-2">
                            <strong>Identifiants de démonstration :</strong>
                        </p>
                        <p className="text-sm text-gray-600 text-center">
                            Username: <code className="bg-white px-2 py-1 rounded">admin</code><br />
                            Password: <code className="bg-white px-2 py-1 rounded">isa2024</code>
                        </p>
                    </div>
                </div>

                {/* Footer */}
                <div className="text-center mt-8">
                    <p className="text-gray-500 text-sm">
                        © 2024 ISA POS - Dashboard Administration
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AdminLogin;