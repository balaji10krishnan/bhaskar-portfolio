import { FaLinkedin, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'
import { useTheme } from '../context/ThemeContext'

export default function Footer() {
  const { isDark } = useTheme()

  const socialLinks = [
    { icon: FaLinkedin, href: '#', label: 'LinkedIn' },
    { icon: FaInstagram, href: '#', label: 'Instagram' },
    { icon: FaTwitter, href: '#', label: 'Twitter' },
    { icon: FaYoutube, href: '#', label: 'YouTube' },
  ]

  return (
    <footer className={`border-t ${isDark ? 'bg-dark-lighter border-gray-800' : 'bg-gray-50 border-gray-200'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-xs ${
              isDark ? 'bg-white text-dark' : 'bg-dark text-white'
            }`}>
              BM
            </div>
            <span className={`text-sm font-medium ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              Bhaskar Mandapati
            </span>
          </div>

          {/* Social Icons */}
          <div className="flex gap-3">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 hover:-translate-y-0.5 ${
                  isDark
                    ? 'bg-dark border border-gray-800 text-gray-400 hover:text-white hover:border-accent'
                    : 'bg-white border border-gray-200 text-gray-500 hover:text-accent hover:border-accent'
                }`}
              >
                <Icon size={16} />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className={`text-xs ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
            &copy; {new Date().getFullYear()} Bhaskar Mandapati. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
