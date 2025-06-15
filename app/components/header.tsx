import { Search } from "lucide-react"
import { Input } from "./ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"

interface HeaderProps {
  blogTitle: string
  navigation: Array<{ label: string; href: string; active?: boolean }>
  userAvatar?: string
  userName?: string
}

export function Header({ blogTitle, navigation, userAvatar, userName }: HeaderProps) {
  return (
    <header className="border-b bg-white">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-blue-500 rounded flex items-center justify-center">
                <div className="w-3 h-3 bg-white rounded-sm"></div>
              </div>
              <h1 className="text-xl font-semibold text-gray-900">{blogTitle}</h1>
            </div>

            <nav className="hidden md:flex space-x-6">
              {navigation.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className={`text-sm font-medium ${
                    item.active ? "text-blue-600 border-b-2 border-blue-600 pb-3" : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="flex items-center space-x-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input type="search" placeholder="Search articles..." className="pl-10 w-64 bg-gray-50 border-gray-200" />
            </div>
            <Avatar className="w-8 h-8">
              <AvatarImage src={userAvatar || "/placeholder.svg"} alt={userName} />
              <AvatarFallback>{userName?.charAt(0) || "U"}</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </div>
    </header>
  )
}
