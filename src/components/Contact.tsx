const links = [
  { label: 'GitHub', href: 'https://github.com', icon: '🐙' },
  { label: 'X (Twitter)', href: 'https://x.com', icon: '🐦' },
  { label: 'LinkedIn', href: 'https://linkedin.com', icon: '💼' },
  { label: 'Email', href: 'mailto:your@email.com', icon: '✉️' },
]

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">お問い合わせ</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-10">
          お気軽にご連絡ください。お仕事のご相談・ご質問お待ちしています。
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          {links.map(({ label, href, icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-5 py-3 border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 hover:shadow-md transition-shadow font-medium text-sm"
            >
              <span>{icon}</span>
              {label}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
