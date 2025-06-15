interface ArticleSection {
  title: string
  content: string
}

interface ArticleContentProps {
  introduction: string
  sections: ArticleSection[]
}

export function ArticleContent({ introduction, sections }: ArticleContentProps) {
  return (
    <div className="prose prose-gray max-w-none">
      <p className="text-gray-700 leading-relaxed mb-8">{introduction}</p>

      {sections.map((section, index) => (
        <div key={index} className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">{section.title}</h2>
          <p className="text-gray-700 leading-relaxed">{section.content}</p>
        </div>
      ))}
    </div>
  )
}
