import React from 'react';
import { Check } from 'lucide-react';

interface ItemListProps {
    items: string[] | string;
}

const ItemList: React.FC<ItemListProps> = ({ items }) => {
    // Convert string to array if needed
    const itemsArray = Array.isArray(items)
        ? items
        : typeof items === 'string'
            ? items.split('\n').filter(Boolean) // or use another delimiter
            : [];

    return (
        <ul className="space-y-3 mb-6">
            {itemsArray.map((item, idx) => (
                <li key={idx} className="flex items-center">
                    <Check className="h-5 w-5 text-green-600 mr-3" />
                    <span className="text-gray-700">{item}</span>
                </li>
            ))}
        </ul>
    );
};

export default ItemList;
