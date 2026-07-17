import { useTheme } from '../context/ThemeContext'
import { FaLinkedin, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'
import profileImg from '../assets/Profile.jpeg'

export default function Home() {
  const { isDark } = useTheme()

  const socialLinks = [
    { icon: FaLinkedin, href: '#', label: 'LinkedIn' },
    { icon: FaInstagram, href: '#', label: 'Instagram' },
    { icon: FaTwitter, href: '#', label: 'Twitter' },
    { icon: FaYoutube, href: '#', label: 'YouTube' },
  ]

  return (
    <div className={`min-h-screen flex flex-col pt-28 sm:pt-24 ${isDark ? 'bg-dark bg-grid-dark' : 'bg-white bg-grid-light'}`}>
      {/* Subtle gradient orb decoration */}
      <div className="absolute top-20 right-0 w-[500px] h-[500px] rounded-full opacity-20 blur-[120px] pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(59,130,246,0.4), transparent)' }}
      />

      <main className="flex-1 flex items-center relative">
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

              {/* Hero Title with gradient */}
              <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] mb-6 opacity-0 animate-fadeIn delay-200 ${isDark ? 'gradient-text' : 'text-dark'}`}>
                Driving Growth Through Product Innovation
              </h1>

              {/* Description */}
              <p className={`text-lg leading-relaxed mb-8 max-w-xl opacity-0 animate-fadeIn delay-300 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                Committed to embracing challenges and delivering customer-focused,
                high-impact digital solutions.
              </p>

              {/* Social Icons with glow hover */}
              <div className="flex gap-4 opacity-0 animate-fadeIn delay-400">
                {socialLinks.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:scale-110 ${
                      isDark
                        ? 'bg-dark-lighter border border-gray-700 text-gray-400 hover:text-white hover:border-accent hover:shadow-[0_0_20px_rgba(59,130,246,0.3)]'
                        : 'bg-gray-100 border border-gray-200 text-gray-500 hover:text-accent hover:border-accent hover:shadow-[0_0_20px_rgba(59,130,246,0.2)]'
                    }`}
                  >
                    <Icon size={20} />
                  </a>
                ))}
              </div>

            </div>

            {/* Right: Portrait Photo */}
            <div className="w-full opacity-0 animate-scaleIn delay-300">
              <div className={`relative w-full aspect-[3/4] overflow-hidden rounded-2xl transition-all duration-500 hover:scale-[1.02] ${
                isDark
                  ? 'border border-gray-700/50 shadow-xl shadow-accent/10'
                  : 'border border-gray-200 shadow-xl shadow-gray-300/30'
              }`}>
                <img
                  src={profileImg}
                  alt="Bhaskar Mandapati portrait"
                  className="w-full h-full object-cover object-top"
                />
                {/* Gradient overlay at bottom */}
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-dark/60 to-transparent" />
              </div>
            </div>

          </div>
        </div>
      </main>
    </div>
  )
}
