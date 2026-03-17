interface Project {
  id: number
  title: string
  description: string
  tags: string[]
  github?: string
  demo?: string
}

const projects: Project[] = [
  {
    id: 0,
    title: 'K プロジェクト',
    description: 'とある機関が初めて紙からシステムに切り替えた開発。8ベンダ共同開発。',
    tags: ['C言語', 'オリジナルプリンタドライバ'],
  },
  {
    id: 1,
    title: 'ARADIN プロジェクト',
    description: 'WebPerformer を用いて開発した業務用 Web アプリケーションです。',
    tags: ['WebPerformer', 'SQL Server', 'Java'],
  },
  {
    id: 2,
    title: 'NCTB プロジェクト',
    description: 'WebPerformer を用いて開発した業務用 Web アプリケーションです。',
    tags: ['WebPerformer', 'SQL Server', 'Java', 'JavaScript'],
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">プロジェクト</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="border border-gray-200 dark:border-gray-700 rounded-xl p-6 bg-white dark:bg-gray-800 hover:shadow-lg transition-shadow"
            >
              <div className="w-full h-32 bg-gradient-to-br from-blue-100 to-indigo-200 dark:from-blue-900 dark:to-indigo-900 rounded-lg mb-4" />
              <h3 className="font-bold text-lg mb-2">{project.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-1 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300 rounded text-xs font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex gap-3 text-sm font-medium">
                {project.github && (
                  <a href={project.github} target="_blank" rel="noreferrer" className="text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors">
                    GitHub →
                  </a>
                )}
                {project.demo && (
                  <a href={project.demo} target="_blank" rel="noreferrer" className="text-blue-500 hover:text-blue-700 transition-colors">
                    Demo →
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
