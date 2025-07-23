export interface FAQItem {
    id: number;
    category: string;
    question: string;
    answer: string;
    icon: React.ReactNode;
}

export interface FAQCategoryProps {
    category: string;
    items: FAQItem[];
    openItems: number[];
    toggleItem: (id: number) => void;
    t: (key: string) => string;
}

export interface FAQItemProps {
    item: FAQItem;
    isOpen: boolean;
    onClick: () => void;
}

export interface FAQSupportSectionProps {
    t: (key: string) => string;
}

export interface FAQHeaderProps {
    t: (key: string) => string;
}  

export interface FAQContextType {
    openItemId: number | null;
    setOpenItemId: (id: number | null) => void;
}

export interface FAQProviderProps {
    children: React.ReactNode;
}