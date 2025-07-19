import React, { useState } from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';

interface ThumbnailSliderProps {
    images: string[];
    title: string;
}

export const ThumbnailSlider: React.FC<ThumbnailSliderProps> = ({ images, title }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    const goToNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    const goToPrevious = () => {
        setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
    };

    const goToSlide = (index: number) => {
        setCurrentIndex(index);
    };

    // Show 3 thumbnails at a time
    const visibleThumbnails = 3;
    const startIndex = Math.max(0, Math.min(currentIndex - 1, images.length - visibleThumbnails));
    const visibleImages = images.slice(startIndex, startIndex + visibleThumbnails);

    return (
        <div
            className="flex items-center space-x-2"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Thumbnail Images */}
            {visibleImages.map((image, index) => {
                const actualIndex = startIndex + index;
                const isActive = actualIndex === currentIndex;

                return (
                    <button
                        key={actualIndex}
                        onClick={() => goToSlide(actualIndex)}
                        className={`relative w-16 h-16 rounded-lg overflow-hidden transition-all duration-300 ${isActive
                            ? 'ring-2 ring-green-500 scale-105 shadow-lg'
                            : 'hover:scale-102 hover:shadow-md'
                            }`}
                    >
                        <img
                            src={image}
                            alt={`${title} ${actualIndex + 1}`}
                            className="w-full h-full object-cover"
                        />
                        {isActive && (
                            <div className="absolute inset-0 bg-green-500 bg-opacity-20"></div>
                        )}
                    </button>
                );
            })}

            {/* Navigation Arrow */}
            <div className="flex items-center space-x-1">
                {isHovered && images.length > visibleThumbnails && (
                    <button
                        onClick={goToPrevious}
                        className="p-1 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 transition-all duration-200"
                    >
                        <ChevronLeft className="h-4 w-4" />
                    </button>
                )}

                <button
                    onClick={goToNext}
                    className="p-2 rounded-full bg-green-100 hover:bg-green-200 text-green-600 transition-all duration-200"
                >
                    <ChevronRight className="h-5 w-5" />
                </button>

                {isHovered && images.length > visibleThumbnails && (
                    <button
                        onClick={goToNext}
                        className="p-1 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 transition-all duration-200"
                    >
                        <ChevronRight className="h-4 w-4" />
                    </button>
                )}
            </div>

            {/* Slide Counter */}
            <div className="text-xs text-gray-500 ml-2">
                {currentIndex + 1}/{images.length}
            </div>
        </div>
    );
};