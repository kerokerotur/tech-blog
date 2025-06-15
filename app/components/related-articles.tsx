interface RelatedArticle {
  title: string
  description: string
  href: string
}

interface RelatedArticlesProps {
  title: string
  articles: RelatedArticle[]
}

export function RelatedArticles({ title, articles }: RelatedArticlesProps) {
  return (
    <div className="bg-white border rounded-lg p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">{title}</h3>

      <div className="space-y-4">
        {articles.map((article, index) => (
          <div key={index}>
            <a href={article.href} className="block group">
              <h4 className="font-medium text-gray-900 group-hover:text-blue-600 mb-1">{article.title}</h4>
              <p className="text-sm text-gray-600 leading-relaxed">{article.description}</p>
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}
