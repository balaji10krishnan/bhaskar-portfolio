import { useTheme } from '../context/ThemeContext'
import profileImg from '../assets/Profile.jpeg'

const stats = [
  { value: '19+', label: 'Years Experience' },
  { value: '50+', label: 'Products Launched' },
  { value: '10+', label: 'AI/ML Projects' },
  { value: '3', label: 'Countries Led' },
]

const skills = [
  'Product Strategy', 'AI/ML Products', 'Agile/Scrum', 'Cross-functional Leadership',
  'Roadmap Planning', 'Stakeholder Management', 'Revenue Optimization', 'Client Acquisition',
]

export default function About() {
  const { isDark } = useTheme()

  return (
    <div className={`min-h-screen pt-28 sm:pt-24 pb-16 ${isDark ? 'bg-dark bg-grid-dark' : 'bg-white bg-grid-light'}`}>
      {/* Decorative gradient orb */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] rounded-full opacity-15 blur-[100px] pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.4), transparent)' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-12 opacity-0 animate-fadeIn">
          <h1 className={`text-4xl sm:text-5xl font-bold mb-4 ${isDark ? 'text-white' : 'text-dark'}`}>About Me</h1>
          <p className={isDark ? 'text-gray-400' : 'text-gray-500'}>Get to know me better</p>
        </div>

        <div className="grid md:grid-cols-[3fr_1fr] gap-12 items-center mb-16">
          
          {/* Right: Photo - First on mobile */}
          <div className="w-full order-first md:order-last opacity-0 animate-scaleIn delay-300">
            <div className={`relative w-full aspect-[3/4] overflow-hidden rounded-2xl transition-all duration-500 ${
              isDark
                ? 'border border-gray-700/50 shadow-xl shadow-accent/10'
                : 'border border-gray-200 shadow-xl shadow-gray-300/30'
            }`}>
              <img 
                src={profileImg}
                alt="Bhaskar Mandapati"
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-dark/60 to-transparent" />
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

        {/* Stats Row */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 opacity-0 animate-slideUp delay-300`}>
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`text-center p-6 rounded-2xl transition-all duration-300 hover:scale-105 ${
                isDark
                  ? 'bg-dark-lighter border border-gray-800 hover:border-accent/50 hover:shadow-[0_0_25px_rgba(59,130,246,0.15)]'
                  : 'bg-gray-50 border border-gray-200 hover:border-accent/50 hover:shadow-lg'
              }`}
              style={{ animationDelay: `${300 + index * 100}ms` }}
            >
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-1">{stat.value}</div>
              <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Skills */}
        <div className="opacity-0 animate-fadeIn delay-400">
          <h2 className={`text-2xl font-bold mb-6 ${isDark ? 'text-white' : 'text-dark'}`}>Core Skills</h2>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill, index) => (
              <span
                key={skill}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 ${
                  isDark
                    ? 'bg-accent/10 text-accent border border-accent/20 hover:bg-accent/20 hover:border-accent/40'
                    : 'bg-accent/10 text-accent border border-accent/20 hover:bg-accent/20 hover:border-accent/40'
                }`}
                style={{ animationDelay: `${400 + index * 50}ms` }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
