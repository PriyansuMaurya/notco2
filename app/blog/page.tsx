import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

const blogPosts = [
  {
    id: 1,
    title: "10 Easy Ways to Reduce Your Carbon Footprint",
    excerpt:
      "Small changes in your daily routine can make a big difference in reducing your environmental impact. From energy-saving tips to sustainable shopping habits, discover practical ways to live a greener life.",
    category: "Tips",
    image: "/placeholder.svg?height=400&width=600",
    date: "2025-03-15",
  },
  {
    id: 2,
    title: "The Rise of Sustainable Fashion",
    excerpt:
      "Explore how the fashion industry is embracing eco-friendly practices and materials. Learn about innovative brands leading the way in sustainable fashion and how you can make more environmentally conscious clothing choices.",
    category: "Trends",
    image: "/placeholder.svg?height=400&width=600",
    date: "2025-03-10",
  },
  {
    id: 3,
    title: "Understanding Carbon Offsetting",
    excerpt:
      "Delve into the world of carbon offsetting and its role in combating climate change. Discover how individuals and businesses can use carbon offsetting as part of a comprehensive strategy to reduce their environmental impact.",
    category: "Education",
    image: "/placeholder.svg?height=400&width=600",
    date: "2025-03-05",
  },
  {
    id: 4,
    title: "The Impact of Plant-Based Diets on the Environment",
    excerpt:
      "Explore the environmental benefits of adopting a plant-based diet. From reducing greenhouse gas emissions to conserving water, learn how your food choices can make a significant difference in protecting our planet.",
    category: "Lifestyle",
    image: "/placeholder.svg?height=400&width=600",
    date: "2025-02-28",
  },
  {
    id: 5,
    title: "Innovative Technologies Shaping a Sustainable Future",
    excerpt:
      "Discover cutting-edge technologies that are paving the way for a more sustainable future. From renewable energy breakthroughs to smart city solutions, learn about the innovations that are helping to address our most pressing environmental challenges.",
    category: "Technology",
    image: "/placeholder.svg?height=400&width=600",
    date: "2025-02-20",
  },
  {
    id: 6,
    title: "The Importance of Biodiversity Conservation",
    excerpt:
      "Understand why preserving biodiversity is crucial for maintaining the health of our planet. Explore the interconnectedness of ecosystems and learn about conservation efforts you can support to protect endangered species and habitats.",
    category: "Environment",
    image: "/placeholder.svg?height=400&width=600",
    date: "2025-02-15",
  },
]

export default function BlogPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl mb-8">NOTCO2 Blog</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <div key={post.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
            <Image
              src={post.image || "/placeholder.svg"}
              alt={post.title}
              width={600}
              height={400}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <span className="text-green-600 text-sm font-semibold">{post.category}</span>
              <h2 className="text-xl font-semibold mt-2 mb-2">{post.title}</h2>
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">{post.date}</span>
                <Link href={`/blog/${post.id}`}>
                  <Button variant="outline">Read More</Button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

