import { useTheme } from '../context/ThemeContext'
import { FaLinkedin, FaInstagram, FaTwitter } from 'react-icons/fa'

export default function Home() {
  const { isDark } = useTheme()

  return (
    <div className={`min-h-screen flex flex-col pt-28 sm:pt-24 ${isDark ? 'bg-dark' : 'bg-white'}`}>
      <main className="flex-1 flex items-center">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-[3fr_1fr] gap-12 items-center">
            
            {/* Left: Text Content */}
            <div className="flex flex-col justify-between">
              
              {/* Header: Name */}
              <div className="mb-12 opacity-0 animate-fadeIn">
                <div className="flex flex-col gap-1">
                  <span className={`text-lg font-semibold ${isDark ? 'text-white' : 'text-dark'}`}>
                    Hi, I'm Bhaskar Mandapati.
                  </span>
                  <span className={`text-sm font-medium ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                    GM | Product Manager
                  </span>
                </div>
              </div>

              {/* Hero Title */}
              <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] mb-6 opacity-0 animate-fadeIn delay-200 ${isDark ? 'text-white' : 'text-dark'}`}>
                Driving Growth Through Product Innovation
              </h1>

              {/* Description */}
              <p className={`text-lg leading-relaxed mb-8 max-w-xl opacity-0 animate-fadeIn delay-300 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                Committed to embracing challenges and delivering customer-focused,
                high-impact digital solutions.
              </p>

              {/* Social Icons */}
              <div className="flex gap-4 opacity-0 animate-fadeIn delay-400">
                <a href="#" className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 hover:-translate-y-1 ${isDark ? 'bg-dark-lighter border border-gray-700 text-gray-400 hover:text-white hover:border-gray-500' : 'bg-gray-100 border border-gray-200 text-gray-500 hover:text-dark hover:border-gray-400'}`}>
                  <FaLinkedin size={20} />
                </a>
                <a href="#" className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 hover:-translate-y-1 ${isDark ? 'bg-dark-lighter border border-gray-700 text-gray-400 hover:text-white hover:border-gray-500' : 'bg-gray-100 border border-gray-200 text-gray-500 hover:text-dark hover:border-gray-400'}`}>
                  <FaInstagram size={20} />
                </a>
                <a href="#" className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 hover:-translate-y-1 ${isDark ? 'bg-dark-lighter border border-gray-700 text-gray-400 hover:text-white hover:border-gray-500' : 'bg-gray-100 border border-gray-200 text-gray-500 hover:text-dark hover:border-gray-400'}`}>
                  <FaTwitter size={20} />
                </a>
              </div>

            </div>

            {/* Right: Portrait Photo */}
            <div className="w-full opacity-0 animate-scaleIn delay-300">
              <div className={`relative w-full aspect-[3/4] overflow-hidden rounded-2xl transition-all duration-500 hover:scale-[1.02] ${isDark ? 'border border-gray-700/50' : 'border border-gray-200'}`}>
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=533&fit=crop&crop=face"
                  alt="Bhaskar Mandapati portrait"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>

          </div>
        </div>
      </main>
    </div>
  )
}
