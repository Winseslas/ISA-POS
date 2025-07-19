import { useTranslation } from 'react-i18next';
import React, { useState, useEffect, useRef } from 'react';
import { FR, GB, DE } from "country-flag-icons/react/3x2";

// Define the type for the language options
interface Language {
    code: string;
    label: string;
    flag: React.ElementType;
}

// List of languages with their respective labels and flags
const languages: Language[] = [
    { code: 'de', label: 'Deutsch', flag: DE },
    { code: 'en', label: 'English', flag: GB },
    { code: 'fr', label: 'Français', flag: FR },
];

// External style constants updated to match the theme
const selectorContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    position: 'relative' as const,  
    zIndex: 1000,
    maxHeight: '30px',
};

const labelStyle = {
    marginRight: '8px',
    color: '#9CA3AF', // text-gray-400
    fontSize: '0.875rem', // text-sm
};

const selectContainerStyle = {
    position: 'relative' as const,
};

const languageButtonStyle = {
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    padding: '4px 8px',
    borderRadius: '0.375rem', // rounded
    backgroundColor: '#1F2937', // bg-gray-800
    color: '#F3F4F6', // text-gray-100
    border: '1px solid #374151', // border-gray-700
    transition: 'all 0.2s ease-in-out',
    '&:hover': {
        backgroundColor: '#374151', // hover:bg-gray-700
    },
};

const flagStyle = {
    width: '1.2em',
    marginRight: '0.5em',
    borderRadius: '2px',
};

const languageDropdownStyle = {
    position: 'absolute' as const,
    top: '100%',
    right: 0,
    backgroundColor: '#1F2937', // bg-gray-800
    border: '1px solid #374151', // border-gray-700
    borderRadius: '0.375rem', // rounded
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    marginTop: '0.5rem',
    minWidth: '140px',
    overflow: 'hidden',
    zIndex: 2000,
};

const languageOptionStyle = {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    padding: '8px 12px',
    cursor: 'pointer',
    color: '#E5E7EB', // text-gray-200
    backgroundColor: 'transparent',
    transition: 'all 0.2s ease-in-out',
    '&:hover': {
        backgroundColor: '#374151', // hover:bg-gray-700
    },
};

const headerLanguageButtonStyle = {
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    padding: '4px 8px',
    borderRadius: '0.375rem',
    backgroundColor: 'transparent',
    color: '#374151', // text-gray-700
    border: '1px solid transparent',
    transition: 'all 0.2s ease-in-out',
    '&:hover': {
        backgroundColor: '#f3f4f6', // hover:bg-gray-100
    },
};

const headerLanguageDropdownStyle = {
    ...languageDropdownStyle,
    backgroundColor: 'white',
    border: '1px solid #e5e7eb', // border-gray-200
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
};

const headerLanguageOptionStyle = {
    ...languageOptionStyle,
    color: '#374151', // text-gray-700
    '&:hover': {
        backgroundColor: '#f3f4f6', // hover:bg-gray-100
    },
};

// Define the props for the LanguageSelector component
interface LanguageSelectorProps {
    formClassName?: string;
    labelClassName?: string;
    selectClassName?: string;
    onLanguageChange?: (language: string) => void;
}

const LanguageSelector: React.FC<LanguageSelectorProps> = ({ 
    formClassName = '', 
    labelClassName = '', 
    selectClassName = '',
    onLanguageChange = () => {},
}) => {
    const { t, i18n } = useTranslation();
    const [currentLanguage, setCurrentLanguage] = useState(i18n.language);
    const [isOpen, setIsOpen] = useState(false);
    const selectorRef = useRef<HTMLDivElement>(null);

    // Mettre à jour la langue courante quand elle change dans i18n
    useEffect(() => {
        const handleLanguageChanged = (lng: string) => {
            setCurrentLanguage(lng);
            onLanguageChange(lng);
        };

        i18n.on('languageChanged', handleLanguageChanged);
        return () => {
            i18n.off('languageChanged', handleLanguageChanged);
        };
    }, [i18n, onLanguageChange]);

    const changeLanguage = async (lng: string) => {
        try {
            await i18n.changeLanguage(lng);
            // Forcer la mise à jour du composant
            setCurrentLanguage(lng);
            setIsOpen(false);
        } catch (error) {
            console.error('Error changing language:', error);
        }
    };

    const handleClickOutside = (event: MouseEvent) => {
        if (selectorRef.current && !selectorRef.current.contains(event.target as Node)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen]);

    const CurrentFlag = languages.find(lang => lang.code === currentLanguage)?.flag || GB;

    return (
        <div ref={selectorRef} className={formClassName} style={selectorContainerStyle}>
            <label htmlFor="language-select" className={labelClassName} style={labelStyle}>
                {t('components.footer.languageLabel', 'Language')} : 
            </label>
            <div className={selectClassName} style={selectContainerStyle}>
                <div 
                    id="language-select" 
                    onClick={() => setIsOpen(!isOpen)}
                    style={labelClassName === 'hidden' ? headerLanguageButtonStyle : languageButtonStyle}
                    className={`${labelClassName === 'hidden' ? 'hover:bg-gray-100' : 'hover:bg-gray-700'} transition-colors flex items-center`}
                    role="button"
                    aria-haspopup="listbox"
                    aria-expanded={isOpen}
                >
                    <CurrentFlag style={flagStyle} />
                    <span className="text-sm ml-1">
                        {languages.find(lang => lang.code === currentLanguage)?.label}
                    </span>
                    <svg 
                        className="w-4 h-4 ml-1" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                        style={{
                            transition: 'transform 0.2s',
                            transform: isOpen ? 'rotate(180deg)' : 'rotate(0)'
                        }}
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                </div>
                {isOpen && (
                    <div 
                        style={labelClassName === 'hidden' ? headerLanguageDropdownStyle : languageDropdownStyle}
                        role="listbox"
                        aria-label="Select language"
                    >
                        {languages.map((lang) => (
                            <div 
                                key={lang.code}
                                onClick={() => changeLanguage(lang.code)}
                                style={{
                                    ...(labelClassName === 'hidden' ? headerLanguageOptionStyle : languageOptionStyle),
                                    backgroundColor: currentLanguage === lang.code 
                                        ? (labelClassName === 'hidden' ? '#f3f4f6' : '#374151') 
                                        : 'transparent',
                                }}
                                className={labelClassName === 'hidden' ? 'hover:bg-gray-100' : 'hover:bg-gray-700'}
                                role="option"
                                aria-selected={currentLanguage === lang.code}
                            >
                                <lang.flag style={flagStyle} />
                                <span className="text-sm ml-1">{lang.label}</span>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default LanguageSelector;
