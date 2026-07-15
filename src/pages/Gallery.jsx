import { useState, useEffect } from 'react'
import { Camera, X } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'

const galleryImages = [
  { id: 1, src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop', alt: 'Mountain landscape' },
  { id: 2, src: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=600&h=400&fit=crop', alt: 'Lake view' },
  { id: 3, src: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=600&h=400&fit=crop', alt: 'Forest path' },
  { id: 4, src: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&h=400&fit=crop', alt: 'Nature trail' },
  { id: 5, src: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=600&h=400&fit=crop', alt: 'Valley view' },
  { id: 6, src: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600&h=400&fit=crop', alt: 'Sunset mountains' },
  { id: 7, src: 'https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=600&h=400&fit=crop', alt: 'Camping' },
  { id: 8, src: 'https://images.unsplash.com/photo-1518173946687-a1e0e2a3a8b7?w=600&h=400&fit=crop', alt: 'Waterfall' },
  { id: 9, src: 'https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=600&h=400&fit=crop', alt: 'Bridge' },
  { id: 10, src: 'https://images.unsplash.com/photo-1490730141103-6cac27aaab94?w=600&h=400&fit=crop', alt: 'Sunrise' },
  { id: 11, src: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=600&h=400&fit=crop', alt: 'Flowers' },
  { id: 12, src: 'https://images.unsplash.com/photo-1494500764479-0c8f2919a3d8?w=600&h=400&fit=crop', alt: 'Night sky' },
]

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null)
  const { isDark } = useTheme()

  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [selectedImage])

  return (
    <div className={`min-h-screen pt-24 pb-16 ${isDark ? 'bg-dark' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 opacity-0 animate-fadeIn">
          <h1 className={`text-4xl sm:text-5xl font-bold mb-4 ${isDark ? 'text-white' : 'text-dark'}`}>Gallery</h1>
          <p className={isDark ? 'text-gray-400' : 'text-gray-500'}>A collection of my favorite shots</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <div 
              key={image.id} 
              className="group relative aspect-square overflow-hidden rounded-lg cursor-pointer opacity-0 animate-fadeIn"
              style={{ animationDelay: `${200 + index * 50}ms` }}
              onClick={() => setSelectedImage(image)}
            >
              <img 
                src={image.src} 
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-dark/0 group-hover:bg-dark/50 transition-colors flex items-center justify-center">
                <Camera className="text-white opacity-0 group-hover:opacity-100 transition-opacity" size={24} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-dark/95 flex items-center justify-center p-4 animate-fadeIn"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-6 right-6 text-white/60 hover:text-white"
            onClick={() => setSelectedImage(null)}
          >
            <X size={32} />
          </button>
          <img 
            src={selectedImage.src} 
            alt={selectedImage.alt}
            className="max-w-full max-h-[90vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  )
}
