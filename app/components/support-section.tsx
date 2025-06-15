import { Button } from "./ui/button"

interface SupportSectionProps {
  title: string
  description: string
  buttonText: string
  disclaimer: string
}

export function SupportSection({ title, description, buttonText, disclaimer }: SupportSectionProps) {
  return (
    <div className="bg-white border rounded-lg p-6 mb-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4 text-center">{title}</h3>
      <p className="text-sm text-gray-600 text-center mb-4 leading-relaxed">{description}</p>
      <div className="text-center mb-3">
        <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6">{buttonText}</Button>
      </div>
      <p className="text-xs text-gray-500 text-center italic">{disclaimer}</p>
    </div>
  )
}
