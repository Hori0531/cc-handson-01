const skills: { category: string; items: string[] }[] = [
  { category: '言語', items: ['C言語', 'Java', 'C++', 'JavaScript (多少)', 'Python (多少)'] },
  { category: 'フロントエンド', items: ['React (多少)', 'HTML', 'CSS'] },
  { category: 'インフラ', items: ['Docker', 'GitHub Actions', 'Google Cloud'] },
  { category: 'ツール', items: ['Git', 'VS Code', 'Eclipse'] },
]

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">スキル</h2>
        <div className="space-y-6">
          {skills.map(({ category, items }) => (
            <div key={category}>
              <h3 className="text-sm font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-3">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {items.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full text-sm font-medium"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
