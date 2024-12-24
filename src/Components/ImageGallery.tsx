"use client";

import React, { useState } from "react";
import Image from "next/image";

interface ImageGalleryProps {
  images: string[];
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(images[0]); // Imagen inicial

  return (
    <div className="flex flex-col items-center">
      {/* Imagen Principal */}
      <MainImage selectedImage={selectedImage} />

      {/* Indicadores en Pantalla Móvil */}
      <div className="flex gap-2 mt-4 sm:hidden">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setSelectedImage(image)}
            className={`rounded-full transition-all duration-0 ${
              selectedImage === image
                ? "bg-gray-400 h-2 w-10 transition-all  duration-500"
                : "bg-gray-300 hover:bg-gray-400 h-2 w-5 transition-all duration-500 "
            }`}
          ></button>
        ))}
      </div>

      {/* Miniaturas en Pantallas Grandes */}
      <div className="hidden sm:flex gap-4 overflow-x-auto mt-4">
        <ThumbnailList
          images={images}
          selectedImage={selectedImage}
          onThumbnailClick={setSelectedImage}
        />
      </div>
    </div>
  );
};

export default ImageGallery;

// Subcomponente para la imagen principal
interface MainImageProps {
  selectedImage: string;
}

const MainImage: React.FC<MainImageProps> = ({ selectedImage }) => (
  <div className="mb-4">
    <Image
      src={selectedImage}
      alt="Imagen principal"
      width={600}
      height={400}
      className="rounded-lg shadow-lg"
    />
  </div>
);

// Subcomponente para la lista de miniaturas
interface ThumbnailListProps {
  images: string[];
  selectedImage: string;
  onThumbnailClick: (image: string) => void;
}

const ThumbnailList: React.FC<ThumbnailListProps> = ({
  images,
  selectedImage,
  onThumbnailClick,
}) => (
  <div className="flex gap-4">
    {images.map((image, index) => (
      <Thumbnail
        key={index}
        image={image}
        isSelected={selectedImage === image}
        onClick={() => onThumbnailClick(image)}
      />
    ))}
  </div>
);

// Subcomponente para una miniatura individual
interface ThumbnailProps {
  image: string;
  isSelected: boolean;
  onClick: () => void;
}

const Thumbnail: React.FC<ThumbnailProps> = ({ image, isSelected, onClick }) => (
  <button
    onClick={onClick}
    className={`w-20 h-20 rounded-lg overflow-hidden border-2 ${
      isSelected ? "border-gray-400" : "border-transparent"
    }`}
  >
    <Image
      src={image}
      alt="Miniatura"
      width={80}
      height={80}
      className="w-full h-full object-cover"
    />
  </button>
);
