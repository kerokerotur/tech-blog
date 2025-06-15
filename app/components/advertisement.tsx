interface AdvertisementProps {
  title: string
  description: string
}

export function Advertisement({ title, description }: AdvertisementProps) {
  return (
    <div className="bg-gray-100 rounded-lg p-8 text-center my-8">
      <h3 className="text-lg font-medium text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  )
}
