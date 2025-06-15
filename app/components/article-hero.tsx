import { Calendar, Clock, User } from "lucide-react"
import { Badge } from "./ui/badge"

interface ArticleHeroProps {
  title: string
  heroImage: string
  heroImageAlt: string
  author: string
  publishDate: string
  readTime: string
  tags: string[]
}

export function ArticleHero({ title, heroImage, heroImageAlt, author, publishDate, readTime, tags }: ArticleHeroProps) {
  return (
    <div className="mb-8">
      <div className="mb-6">
        <img
          src={heroImage || "/placeholder.svg"}
          alt={heroImageAlt}
          className="w-full h-64 object-cover rounded-lg"
        />
      </div>

      <h1 className="text-4xl font-bold text-gray-900 mb-4 leading-tight">{title}</h1>

      <div className="flex items-center space-x-4 text-sm text-gray-600 mb-4">
        <div className="flex items-center space-x-1">
          <User className="w-4 h-4" />
          <span>{author}</span>
        </div>
        <div className="flex items-center space-x-1">
          <Calendar className="w-4 h-4" />
          <span>{publishDate}</span>
        </div>
        <div className="flex items-center space-x-1">
          <Clock className="w-4 h-4" />
          <span>{readTime}</span>
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <Badge key={tag} variant="secondary" className="bg-blue-100 text-blue-800">
            {tag}
          </Badge>
        ))}
      </div>
    </div>
  )
}
