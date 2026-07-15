import { useState, useEffect } from 'react'
import { Calendar, Clock, ArrowRight, X } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'

const blogs = [
  {
    id: 1,
    title: 'My Journey Through the Mountains',
    excerpt: 'Exploring the breathtaking trails and hidden gems of the Himalayas. The crisp morning air, the sound of distant bells, and the warmth of local hospitality made this trip unforgettable.',
    content: 'Exploring the breathtaking trails and hidden gems of the Himalayas was a life-changing experience. The crisp morning air, the sound of distant bells, and the warmth of local hospitality made this trip unforgettable.\n\nWe started our journey from Manali, winding through narrow mountain roads that offered stunning views at every turn. The trail to Hampta Pass was particularly challenging, with steep ascents and unpredictable weather. But the reward — a panoramic view of the Chandra Valley — was worth every step.\n\nAlong the way, we encountered small villages where time seemed to stand still. The locals welcomed us with warm chai and stories passed down through generations. Their simplicity and connection to nature reminded me of what truly matters.\n\nThe highlight was reaching the summit at dawn. Watching the sun paint the snow-capped peaks in shades of gold and pink was a moment of pure magic. It taught me that the best things in life often require the hardest climbs.',
    date: 'March 15, 2024',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600&h=400&fit=crop',
    featured: true
  },
  {
    id: 2,
    title: 'Street Photography Tips',
    excerpt: 'How to capture authentic moments in busy city streets without drawing attention. Learn the art of being invisible while creating powerful images.',
    content: 'Street photography is about capturing life as it happens — unposed, unfiltered, and raw. The key is to blend in and become invisible to your surroundings.\n\nThe first rule is to use a small, unobtrusive camera. A large DSLR screams "photographer" and changes the dynamics of a scene. Mirrorless cameras or even smartphones can be your best tools.\n\nSecond, patience is everything. Find an interesting background or composition, then wait for the right moment to unfold. The best street photographs often come from anticipation rather than reaction.\n\nThird, learn to shoot from the hip. Sometimes the best angles come from unconventional positions. Don\'t be afraid to get low or shoot from unexpected perspectives.\n\nFinally, always carry your camera. The perfect moment doesn\'t wait for you to be prepared. Some of my best shots happened on days when I almost left my camera at home.',
    date: 'February 28, 2024',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=600&h=400&fit=crop'
  },
  {
    id: 3,
    title: 'Sunset Chasing in Bali',
    excerpt: 'The best spots to witness magical sunsets on the island. From Tanah Lot to Uluwatu, each location offers a unique perspective of the golden hour.',
    content: 'Bali is renowned for its spectacular sunsets, and after spending two weeks chasing them, I can confirm the hype is real.\n\nTanah Lot is the most iconic spot — a ancient temple perched on a rock formation in the sea. Arrive early to find a good spot and watch as the sun sets directly behind the temple, creating a silhouette that\'s pure magic.\n\nFor something more dramatic, head to Uluwatu Temple. Perched on a 70-meter cliff, the views are breathtaking. Catch a traditional Kecak fire dance performance as the sun goes down — it\'s an experience you won\'t forget.\n\nMy personal favorite was Echo Beach in Canggu. Less crowded than the tourist spots, it offers a more intimate sunset experience. The surfers riding waves against the orange sky create perfect silhouettes.\n\nThe key to sunset chasing in Bali is flexibility. Some of the best sunsets happen when you least expect them — during a random beach dinner or a late afternoon swim.',
    date: 'January 10, 2024',
    readTime: '3 min read',
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=600&h=400&fit=crop'
  },
  {
    id: 4,
    title: 'Night Photography Adventures',
    excerpt: 'Mastering long exposure shots and capturing the stars. Tips on equipment, settings, and finding the perfect dark sky locations.',
    content: 'Night photography opens up a whole new world of creative possibilities. From star trails to light painting, the darkness becomes your canvas.\n\nThe essential gear includes a sturdy tripod (non-negotiable), a remote shutter release, and a fast wide-angle lens. f/2.8 or wider is ideal for capturing stars.\n\nFor star photography, the 500 rule is your friend: divide 500 by your focal length to get the maximum exposure time before stars start to trail. With a 24mm lens, that\'s about 20 seconds.\n\nFinding dark sky locations is crucial. Light pollution is the enemy of night photography. Apps like Dark Sky Finder can help you locate the darkest spots near you.\n\nLong exposure photography at night can transform ordinary scenes into something extraordinary. A waterfall becomes silk, car lights become rivers of color, and the Milky Way reveals itself in all its glory.\n\nThe most important tip? Be patient and keep experimenting. Night photography is as much about trial and error as it is about technique.',
    date: 'December 5, 2023',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=600&h=400&fit=crop'
  },
  {
    id: 5,
    title: 'Hidden Waterfalls of Costa Rica',
    excerpt: 'Discovering secret cascades deep in the rainforest. The sound of rushing water and the mist on your face creates pure magic.',
    content: 'Costa Rica is a paradise for waterfall lovers, with hundreds of cascades hidden throughout its lush rainforests.\n\nLa Fortuna Waterfall is the most famous, but the real magic lies in the lesser-known spots. Nauyaca Waterfalls, accessible only by horseback or a long hike, offers a pristine experience away from the crowds.\n\nThe key to discovering hidden waterfalls is talking to locals. They know secret spots that never make it into guidebooks. On one occasion, a farmer pointed us toward a cascade that wasn\'t on any map — it turned out to be the most beautiful waterfall I\'ve ever seen.\n\nEarly morning visits are best. The light filtering through the canopy creates ethereal conditions for photography, and you\'ll likely have the place to yourself.\n\nAlways respect the environment. These hidden gems remain beautiful because visitors treat them with care. Take nothing but photos, leave nothing but footprints.',
    date: 'November 18, 2023',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1432405972618-c6b0cfba8b41?w=600&h=400&fit=crop'
  },
  {
    id: 6,
    title: 'Portrait Photography Basics',
    excerpt: 'Understanding lighting, composition, and connection with your subject. Simple techniques to create compelling portraits.',
    content: 'Great portraiture is about connection, not just camera settings. It\'s about capturing the essence of a person in a single frame.\n\nLighting is everything. Natural light from a large window is often the most flattering. Position your subject at a 45-degree angle to the light source for depth and dimension.\n\nThe eyes are the windows to the soul — always focus on them. A sharp eye with a slightly soft everything else draws the viewer in immediately.\n\nComposition matters. The rule of thirds is a good starting point, but don\'t be afraid to break it. Centered compositions can be powerful when done right.\n\nThe most overlooked aspect is making your subject comfortable. Talk to them, make them laugh, ask about their day. The best portraits happen when people forget they\'re being photographed.\n\nPost-processing should enhance, not transform. Adjust exposure, contrast, and skin tones subtly. The goal is to present the best version of your subject, not a completely different person.',
    date: 'October 22, 2023',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=600&h=400&fit=crop'
  }
]

export default function Blogs() {
  const [selectedBlog, setSelectedBlog] = useState(null)
  const { isDark } = useTheme()

  useEffect(() => {
    if (selectedBlog) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [selectedBlog])
  const featured = blogs[0]
  const remaining = blogs.slice(1)

  return (
    <div className={`min-h-screen pt-28 sm:pt-24 pb-16 ${isDark ? 'bg-dark' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 opacity-0 animate-fadeIn">
          <h1 className={`text-4xl sm:text-5xl font-bold mb-4 ${isDark ? 'text-white' : 'text-dark'}`}>Blogs</h1>
          <p className={isDark ? 'text-gray-400' : 'text-gray-500'}>Thoughts, stories and ideas from my adventures</p>
        </div>

        {/* Featured Blog */}
        <article onClick={() => setSelectedBlog(featured)} className={`group rounded-2xl overflow-hidden mb-10 transition-all opacity-0 animate-fadeIn delay-200 cursor-pointer ${isDark ? 'bg-dark-lighter border border-gray-800 hover:border-gray-600' : 'bg-gray-50 border border-gray-200 hover:border-gray-300'}`}>
          <div className="grid md:grid-cols-2 gap-0">
            <div className="aspect-video md:aspect-auto overflow-hidden">
              <img 
                src={featured.image} 
                alt={featured.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-8 flex flex-col justify-center">
              <span className={`inline-flex items-center gap-1 text-xs font-medium px-3 py-1 rounded-full w-fit mb-4 ${isDark ? 'bg-accent/10 text-accent' : 'bg-accent/10 text-accent'}`}>
                Featured
              </span>
              <div className={`flex items-center gap-4 text-xs mb-3 ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
                <span className="flex items-center gap-1">
                  <Calendar size={14} />
                  {featured.date}
                </span>
                <span className="flex items-center gap-1">
                  <Clock size={14} />
                  {featured.readTime}
                </span>
              </div>
              <h2 className={`text-2xl font-bold mb-3 ${isDark ? 'text-white group-hover:text-accent' : 'text-dark group-hover:text-accent'} transition-colors`}>
                {featured.title}
              </h2>
              <p className={`text-sm mb-6 leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>{featured.excerpt}</p>
              <button onClick={() => setSelectedBlog(featured)} className="inline-flex items-center gap-1 text-accent text-sm font-medium hover:gap-2 transition-all w-fit pointer-events-none">
                Read More <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </article>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {remaining.map((blog, index) => (
            <article key={blog.id} onClick={() => setSelectedBlog(blog)} className={`group rounded-xl overflow-hidden transition-all opacity-0 animate-fadeIn cursor-pointer ${isDark ? 'bg-dark-lighter border border-gray-800 hover:border-gray-600' : 'bg-gray-50 border border-gray-200 hover:border-gray-300'}`} style={{ animationDelay: `${300 + index * 100}ms` }}>
              <div className="aspect-video overflow-hidden">
                <img 
                  src={blog.image} 
                  alt={blog.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className={`flex items-center gap-4 text-xs mb-3 ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
                  <span className="flex items-center gap-1">
                    <Calendar size={14} />
                    {blog.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock size={14} />
                    {blog.readTime}
                  </span>
                </div>
                <h2 className={`text-lg font-semibold mb-2 ${isDark ? 'text-white group-hover:text-accent' : 'text-dark group-hover:text-accent'} transition-colors`}>
                  {blog.title}
                </h2>
                <p className={`text-sm mb-4 line-clamp-2 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>{blog.excerpt}</p>
                <button onClick={() => setSelectedBlog(blog)} className="inline-flex items-center gap-1 text-accent text-sm font-medium hover:gap-2 transition-all pointer-events-none">
                  Read More <ArrowRight size={16} />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Blog Modal */}
      {selectedBlog && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fadeIn"
          onClick={() => setSelectedBlog(null)}
        >
          <div className="absolute inset-0 bg-dark/80 backdrop-blur-sm"></div>
          <div 
            className={`relative w-full max-w-3xl max-h-[90vh] flex flex-col rounded-2xl overflow-hidden ${isDark ? 'bg-dark-lighter border border-gray-700' : 'bg-white border border-gray-200'}`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header Image - Fixed */}
            <div className="relative h-64 sm:h-80 shrink-0 overflow-hidden">
              <img 
                src={selectedBlog.image} 
                alt={selectedBlog.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <button 
                onClick={() => setSelectedBlog(null)}
                className={`absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center transition-all ${isDark ? 'bg-dark/80 text-white hover:bg-dark' : 'bg-white/80 text-dark hover:bg-white'}`}
              >
                <X size={20} />
              </button>
            </div>

            {/* Modal Content - Scrollable */}
            <div className="flex-1 overflow-y-auto p-6 sm:p-8">
              <div className={`flex items-center gap-4 text-sm mb-4 ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
                <span className="flex items-center gap-1">
                  <Calendar size={14} />
                  {selectedBlog.date}
                </span>
                <span className="flex items-center gap-1">
                  <Clock size={14} />
                  {selectedBlog.readTime}
                </span>
              </div>
              <h2 className={`text-2xl sm:text-3xl font-bold mb-6 ${isDark ? 'text-white' : 'text-dark'}`}>
                {selectedBlog.title}
              </h2>
              <div className={`text-base leading-relaxed whitespace-pre-line ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                {selectedBlog.content}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
