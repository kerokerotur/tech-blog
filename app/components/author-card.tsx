import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import { Facebook, Twitter, Github } from "lucide-react"

interface AuthorCardProps {
  name: string
  title: string
  bio: string
  avatar: string
  socialLinks?: {
    facebook?: string
    twitter?: string
    github?: string
  }
}

export function AuthorCard({ name, title, bio, avatar, socialLinks }: AuthorCardProps) {
  return (
    <div className="bg-white border rounded-lg p-6 mb-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">About the Author</h3>

      <div className="flex items-start space-x-4">
        <Avatar className="w-12 h-12">
          <AvatarImage src={avatar || "/placeholder.svg"} alt={name} />
          <AvatarFallback>{name.charAt(0)}</AvatarFallback>
        </Avatar>

        <div className="flex-1">
          <h4 className="font-semibold text-gray-900">{name}</h4>
          <p className="text-sm text-gray-600 mb-2">{title}</p>
          <p className="text-sm text-gray-700 leading-relaxed mb-3">{bio}</p>

          {socialLinks && (
            <div className="flex space-x-3">
              {socialLinks.facebook && (
                <a href={socialLinks.facebook} className="text-gray-400 hover:text-gray-600">
                  <Facebook className="w-4 h-4" />
                </a>
              )}
              {socialLinks.twitter && (
                <a href={socialLinks.twitter} className="text-gray-400 hover:text-gray-600">
                  <Twitter className="w-4 h-4" />
                </a>
              )}
              {socialLinks.github && (
                <a href={socialLinks.github} className="text-gray-400 hover:text-gray-600">
                  <Github className="w-4 h-4" />
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
