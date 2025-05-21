import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface SoftwareImage {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
}

const softwareImages: SoftwareImage[] = [
  {
    id: 1,
    title: "Software 1",
    description: "Description of software 1",
    imageUrl: "/software1.png"
  },
  {
    id: 2,
    title: "Software 2",
    description: "Description of software 2",
    imageUrl: "/software2.png"
  },
  // Add more software images as needed
];

const ShowcasePage = () => {
  const [selectedImage, setSelectedImage] = useState<SoftwareImage | null>(null);

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Software Showcase</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {softwareImages.map((image) => (
            <motion.div
              key={image.id}
              className="relative group cursor-pointer"
              whileHover={{ scale: 1.02 }}
              onClick={() => setSelectedImage(image)}
            >
              <div className="aspect-video relative overflow-hidden rounded-lg bg-gray-800">
                <Image
                  src={image.imageUrl}
                  alt={image.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-20 transition-all duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-xl font-semibold">{image.title}</h3>
                  <p className="text-sm text-gray-300">{image.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal for selected image */}
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-4xl w-full">
              <button
                className="absolute top-4 right-4 text-white text-xl"
                onClick={() => setSelectedImage(null)}
              >
                ×
              </button>
              <div className="aspect-video relative">
                <Image
                  src={selectedImage.imageUrl}
                  alt={selectedImage.title}
                  fill
                  className="object-contain"
                />
              </div>
              <div className="mt-4 text-center">
                <h2 className="text-2xl font-bold">{selectedImage.title}</h2>
                <p className="text-gray-300 mt-2">{selectedImage.description}</p>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default ShowcasePage; 