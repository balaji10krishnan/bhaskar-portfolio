import { useTheme } from '../context/ThemeContext'

export default function About() {
  const { isDark } = useTheme()

  return (
    <div className={`min-h-screen pt-28 sm:pt-24 pb-16 ${isDark ? 'bg-dark' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 opacity-0 animate-fadeIn">
          <h1 className={`text-4xl sm:text-5xl font-bold mb-4 ${isDark ? 'text-white' : 'text-dark'}`}>About Me</h1>
          <p className={isDark ? 'text-gray-400' : 'text-gray-500'}>Get to know me better</p>
        </div>

        <div className="grid md:grid-cols-[3fr_1fr] gap-12 items-center">
          
          {/* Right: Photo - First on mobile */}
          <div className="w-full order-first md:order-last opacity-0 animate-scaleIn delay-300">
            <div className={`relative w-full aspect-[3/4] overflow-hidden rounded-2xl ${isDark ? 'border border-gray-700/50' : 'border border-gray-200'}`}>
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop&crop=face" 
                alt="Bhaskar Mandapati"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>

          {/* Left: Bio - Second on mobile */}
          <div className="opacity-0 animate-fadeIn delay-200">
            <p className={`text-lg leading-relaxed mb-6 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
              Seasoned Senior Product Manager with notable expertise in crafting products through ideation, 
              technical development, and the launch of innovative solutions. I excel in creating roadmaps, 
              leading product development, securing client acquisitions, and optimizing revenue opportunities.
            </p>
            <p className={`leading-relaxed mb-6 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
              With 19+ years of experience as an Executive and technology expert, I have a proven track record 
              of defining and delivering product solutions. My expertise spans across AI/ML-driven products, 
              cross-functional team leadership, and end-to-end software development processes.
            </p>
            <p className={`leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
              Lead the development and deployment of AI and ML-driven products. Oversaw end-to-end software 
              development processes for AI and ML applications across multiple verticals, ensuring high-quality 
              deliverables within tight deadlines.
            </p>
          </div>

        </div>
      </div>
    </div>
  )
}
