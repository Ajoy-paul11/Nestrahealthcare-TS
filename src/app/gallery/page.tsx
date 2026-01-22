"use client";

import { IconX, IconChevronLeft, IconChevronRight } from "@tabler/icons-react";
import { useState } from "react";

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  // Placeholder images - replace with your actual image imports
  const galleryImages = [
    { id: 1, src: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800", alt: "Facility entrance", size: "large" },
    { id: 2, src: "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=800", alt: "Common area", size: "standard" },
    { id: 3, src: "https://images.unsplash.com/photo-1666214280557-f1b5022eb634?w=600", alt: "Activity room", size: "portrait" },
    { id: 4, src: "https://images.unsplash.com/photo-1584515933487-779824d29309?w=800", alt: "Dining area", size: "standard" },
    { id: 5, src: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=800", alt: "Garden view", size: "standard" },
    { id: 6, src: "https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=800", alt: "Therapy room", size: "standard" },
    { id: 7, src: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=800", alt: "Reading corner", size: "standard" },
    { id: 8, src: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=800", alt: "Recreation area", size: "standard" },
    { id: 9, src: "https://images.unsplash.com/photo-1615461066159-fea0960485d5?w=800", alt: "Medical room", size: "standard" },
    { id: 10, src: "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?w=800", alt: "Outdoor space", size: "standard" },
    { id: 11, src: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=800", alt: "Staff area", size: "standard" },
    { id: 12, src: "https://images.unsplash.com/photo-1516549655169-df83a0774514?w=800", alt: "Relaxation zone", size: "standard" },
  ];

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const navigateLightbox = (direction: "prev" | "next") => {
    if (selectedImage === null) return;
    
    if (direction === "prev") {
      setSelectedImage(selectedImage === 0 ? galleryImages.length - 1 : selectedImage - 1);
    } else {
      setSelectedImage(selectedImage === galleryImages.length - 1 ? 0 : selectedImage + 1);
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 blue-shade-bg text-white-background">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Our Facilities & Amenities
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 text-white/90">
            Take a tour through our warm, welcoming spaces designed for comfort, safety, and joy
          </p>
          <div className="w-24 h-1 bg-white mx-auto"></div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className=" container mx-auto">
          {/* Masonry Grid Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 auto-rows-[240px] gap-4">
            {/* Large Image - spans 2x2 */}
            <div 
              className="relative lg:col-span-4 lg:row-span-2 overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer group"
              onClick={() => openLightbox(0)}
            >
              <img
                src={galleryImages[0].src}
                alt={galleryImages[0].alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-white font-semibold text-lg">{galleryImages[0].alt}</p>
                </div>
              </div>
            </div>

            {/* Portrait Image - spans 2 rows */}
            <div
              className="relative lg:row-span-2 lg:col-span-2 overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer group"
              onClick={() => openLightbox(2)}
            >
              <img
                src={galleryImages[2].src}
                alt={galleryImages[2].alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-white font-semibold text-lg">{galleryImages[2].alt}</p>
                </div>
              </div>
            </div>

            {/* Standard Images */}
            {galleryImages.slice(1, 2).map((image, index) => (
              <div
                key={image.id}
                className="relative lg:row-span-2 lg:col-span-3 overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer group"
                onClick={() => openLightbox(index + 1)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p className="text-white font-semibold">{image.alt}</p>
                  </div>
                </div>
              </div>
            ))}

            

            {/* Remaining Standard Images */}
            {galleryImages.slice(3).map((image, index) => (
              <div
                key={image.id}
                className="relative lg:row-span-2 lg:col-span-3 overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer group"
                onClick={() => openLightbox(index + 3)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p className="text-white font-semibold">{image.alt}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <div 
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10"
          >
            <IconX size={32} />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              navigateLightbox("prev");
            }}
            className="absolute left-4 text-white hover:text-gray-300 transition-colors z-10"
          >
            <IconChevronLeft size={48} />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              navigateLightbox("next");
            }}
            className="absolute right-4 text-white hover:text-gray-300 transition-colors z-10"
          >
            <IconChevronRight size={48} />
          </button>

          <div 
            className="max-w-6xl max-h-[90vh] w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={galleryImages[selectedImage].src}
              alt={galleryImages[selectedImage].alt}
              className="w-full h-full object-contain rounded-lg"
            />
            <div className="text-center mt-4">
              <p className="text-white text-lg font-semibold">
                {galleryImages[selectedImage].alt}
              </p>
              <p className="text-gray-400 text-sm mt-1">
                {selectedImage + 1} / {galleryImages.length}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Call to Action */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#025F67] to-[#2F9D94]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl lg:text-4xl font-bold mb-6 text-white">
            Experience Our Facilities in Person
          </h2>
          <p className="text-sm lg:text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Nothing compares to seeing our warm, welcoming environment firsthand. Schedule a visit to tour our facilities and meet our compassionate team.
          </p>
          <button className="px-8 py-4 bg-white text-[#025F67] rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 text-sm lg:text-base">
            Schedule a Visit
          </button>
        </div>
      </section>
    </div>
  );
}