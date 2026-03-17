import { useState, useEffect } from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'

const NAV_ITEMS = [
  { id: 'hero',     label: 'Home' },
  { id: 'about',    label: 'About' },
  { id: 'skills',   label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact',  label: 'Contact' },
]

function App() {
  const [isDark, setIsDark] = useState<boolean>(() => {
    const stored = localStorage.getItem('theme')
    if (stored) return stored === 'dark'
    return window.matchMedia('(prefers-color-scheme: dark)').matches
  })
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark)
    localStorage.setItem('theme', isDark ? 'dark' : 'light')
  }, [isDark])

  // ヘッダー影：スクロール量で切り替え
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // アクティブセクション検知
  useEffect(() => {
    const observers: IntersectionObserver[] = []
    NAV_ITEMS.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (!el) return
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id) },
        { rootMargin: '-40% 0px -55% 0px' }
      )
      obs.observe(el)
      observers.push(obs)
    })
    return () => observers.forEach((o) => o.disconnect())
  }, [])

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-white transition-colors duration-300">
      <header
        className={`fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-950/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800 transition-shadow duration-300 ${
          scrolled ? 'shadow-md' : 'shadow-none'
        }`}
      >
        <div className="max-w-5xl mx-auto px-4 h-14 flex items-center justify-between">
          <span className="font-bold text-lg">Portfolio</span>
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            {NAV_ITEMS.map(({ id, label }) => (
              <a
                key={id}
                href={`#${id}`}
                className={`transition-colors ${
                  activeSection === id
                    ? 'text-blue-500'
                    : 'text-gray-600 dark:text-gray-300 hover:text-blue-500'
                }`}
              >
                {label}
              </a>
            ))}
          </nav>
          <button
            onClick={() => setIsDark(!isDark)}
            className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="ダークモード切り替え"
          >
            {isDark ? '☀️' : '🌙'}
          </button>
        </div>
      </header>

      <main className="pt-14">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <footer className="border-t border-gray-200 dark:border-gray-800 py-6 text-center text-sm text-gray-500">
        © 2026 Portfolio. All rights reserved.
      </footer>
    </div>
  )
}

export default App
