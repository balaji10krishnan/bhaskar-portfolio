import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Sun, Moon } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const { isDark, toggleTheme } = useTheme()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const links = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/blogs', label: 'Blogs' },
    { path: '/gallery', label: 'Gallery' },
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md transition-all duration-300 ${
      scrolled
        ? isDark
          ? 'bg-dark/90 shadow-lg shadow-black/20 border-b border-gray-800/50'
          : 'bg-white/90 shadow-lg shadow-gray-200/50 border-b border-gray-200/50'
        : isDark
          ? 'bg-dark/80'
          : 'bg-white/80'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo with Initials */}
          <Link to="/" className="flex items-center gap-2">
            <div className={`w-9 h-9 rounded-lg flex items-center justify-center font-bold text-sm transition-all duration-300 hover:scale-105 ${
              isDark ? 'bg-white text-dark' : 'bg-dark text-white'
            }`}>
              BM
            </div>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            {links.map(link => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm transition-all duration-200 relative py-1 ${
                  location.pathname === link.path 
                    ? (isDark ? 'text-white font-medium' : 'text-dark font-medium')
                    : (isDark ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-dark')
                }`}
              >
                {link.label}
                {location.pathname === link.path && (
                  <span className={`absolute -bottom-1 left-0 right-0 h-0.5 rounded-full ${isDark ? 'bg-accent' : 'bg-accent'}`} />
                )}
              </Link>
            ))}

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className={`w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 ${
                isDark 
                  ? 'bg-gray-800 text-gray-400 hover:text-white hover:bg-gray-700' 
                  : 'bg-gray-200 text-gray-600 hover:text-dark hover:bg-gray-300'
              }`}
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>

          <div className="flex md:hidden items-center gap-3">
            {/* Theme Toggle Mobile */}
            <button
              onClick={toggleTheme}
              className={`w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 ${
                isDark 
                  ? 'bg-gray-800 text-gray-400 hover:text-white hover:bg-gray-700' 
                  : 'bg-gray-200 text-gray-600 hover:text-dark hover:bg-gray-300'
              }`}
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            <button
              className={isDark ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-dark'}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ${
        isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className={`border-t ${isDark ? 'bg-dark-lighter border-gray-800' : 'bg-gray-50 border-gray-200'}`}>
          <div className="px-4 py-4 space-y-3">
            {links.map(link => (
              <Link
                key={link.path}
                to={link.path}
                className={`block transition-colors ${
                  location.pathname === link.path 
                    ? (isDark ? 'text-white font-medium' : 'text-dark font-medium')
                    : (isDark ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-dark')
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}
