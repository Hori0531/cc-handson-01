import { useState, useEffect } from 'react'

const ROLES = ['フリーランス', 'アニメ好き', '料理（自炊歴10年以上）']

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100)
    return () => clearTimeout(t)
  }, [])

  useEffect(() => {
    const current = ROLES[roleIndex]
    let timeout: ReturnType<typeof setTimeout>

    if (!isDeleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80)
    } else if (!isDeleting && displayed.length === current.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2000)
    } else if (isDeleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length - 1)), 40)
    } else {
      setIsDeleting(false)
      setRoleIndex((i) => (i + 1) % ROLES.length)
    }

    return () => clearTimeout(timeout)
  }, [displayed, isDeleting, roleIndex])

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #7dd3fc 0%, #bae6fd 55%, #f0f9ff 100%)',
      }}
    >
      {/* 雲のような白いぼかし */}
      <div className="absolute top-16 left-1/4 w-72 h-40 bg-white/50 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-24 right-1/5 w-56 h-32 bg-white/40 rounded-full blur-2xl pointer-events-none" />
      <div className="absolute bottom-1/3 left-1/3 w-96 h-48 bg-white/30 rounded-full blur-3xl pointer-events-none" />

      <div
        className={`relative text-center px-4 transition-all duration-700 ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        {/* アバター */}
        <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-white/60 backdrop-blur-sm border-2 border-white/80 flex items-center justify-center text-4xl text-gray-600 font-bold shadow-xl">
          平田
        </div>

        <h1 className="text-4xl md:text-6xl font-bold mb-2 text-gray-700 drop-shadow-sm tracking-tight">
          平田 正人
        </h1>

        {/* タイピングアニメーション */}
        <p className="text-xl md:text-2xl text-gray-500 mb-6 font-mono h-8">
          {displayed}
          <span className="animate-pulse">|</span>
        </p>

        {/* 自己紹介 */}
        <div className="max-w-md mx-auto bg-white/40 backdrop-blur-sm rounded-2xl px-6 py-4 mb-8 text-gray-600 text-sm leading-relaxed border border-white/60">
          <p>趣味：ゲーム、アニメ鑑賞（ここ数年ABEMA見てます）</p>
          <p className="mt-1 text-gray-500 text-xs">
            おすすめ：薬屋のひとりごと／影の実力者になりたくて
            <br />
            ／ソード・アート・オンライン（同級生が監督してます）
          </p>
          <p className="mt-2">特技：料理（10年以上自炊）</p>
        </div>

        {/* CTAボタン */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <a
            href="#projects"
            className="px-6 py-3 bg-sky-500 text-white rounded-lg hover:bg-sky-600 active:scale-95 transition-all font-medium shadow-md"
          >
            Projects を見る
          </a>
          <a
            href="#contact"
            className="px-6 py-3 bg-white/50 border border-white/80 text-gray-600 rounded-lg hover:bg-white/70 active:scale-95 transition-all font-medium"
          >
            Contact
          </a>
        </div>

        {/* SNS リンク */}
        <div className="flex justify-center gap-5">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-white/50 border border-white/70 text-gray-600 hover:bg-white/80 transition-colors shadow-sm"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836a9.59 9.59 0 012.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
            </svg>
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter/X"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-white/50 border border-white/70 text-gray-600 hover:bg-white/80 transition-colors shadow-sm"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>
        </div>
      </div>

      {/* スクロールインジケーター */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-gray-500/70 animate-bounce">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  )
}
