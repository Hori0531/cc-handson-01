export default function About() {
  return (
    <section id="about" className="py-24 px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">自己紹介</h2>
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="w-40 h-40 rounded-full bg-gray-200 dark:bg-gray-700 flex-shrink-0 flex items-center justify-center text-5xl">
            👤
          </div>
          <div className="space-y-4 text-gray-600 dark:text-gray-300">
            <p>
              この度、７年ぶりに WebPerformer の開発を行っています。
            </p>
            <p>
              以前の感覚を取り戻すのにてんやわんやしながら仕事をしています。
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
