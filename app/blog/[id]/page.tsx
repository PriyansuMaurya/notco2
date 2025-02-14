import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"

const blogPosts = [
  {
    id: 1,
    title: "10 Easy Ways to Reduce Your Carbon Footprint",
    content: `
      <p>Climate change is one of the most pressing issues of our time, and reducing our carbon footprint is crucial in mitigating its effects. Here are ten simple yet effective ways you can make a difference:</p>

      <h2>1. Use Energy-Efficient Appliances</h2>
      <p>Replace old appliances with energy-efficient models. Look for the ENERGY STAR label when shopping for new appliances.</p>

      <h2>2. Reduce, Reuse, Recycle</h2>
      <p>Minimize waste by reducing consumption, reusing items when possible, and recycling materials like paper, plastic, and glass.</p>

      <h2>3. Choose Sustainable Transportation</h2>
      <p>Walk, bike, or use public transportation when possible. If you must drive, consider carpooling or switching to an electric or hybrid vehicle.</p>

      <h2>4. Eat a Plant-Based Diet</h2>
      <p>Reduce your meat consumption and opt for more plant-based meals. The production of meat, especially beef, has a significant environmental impact.</p>

      <h2>5. Use Renewable Energy</h2>
      <p>Consider installing solar panels or switching to a renewable energy provider for your home's electricity needs.</p>

      <h2>6. Conserve Water</h2>
      <p>Fix leaks, take shorter showers, and use water-efficient appliances to reduce your water consumption.</p>

      <h2>7. Support Sustainable Brands</h2>
      <p>Choose products from companies that prioritize sustainability and have environmentally friendly practices.</p>

      <h2>8. Reduce Single-Use Plastics</h2>
      <p>Use reusable bags, water bottles, and food containers to minimize your consumption of single-use plastics.</p>

      <h2>9. Improve Home Insulation</h2>
      <p>Properly insulate your home to reduce energy consumption for heating and cooling.</p>

      <h2>10. Educate and Advocate</h2>
      <p>Share your knowledge with others and support policies that address climate change and promote sustainability.</p>

      <p>By implementing these changes in your daily life, you can significantly reduce your carbon footprint and contribute to a more sustainable future. Remember, every action counts, and collective efforts can lead to substantial positive impacts on our environment.</p>
    `,
    category: "Tips",
    image: "/placeholder.svg?height=600&width=1200",
    date: "2025-03-15",
    author: "Jane Doe",
  },
  // Add more blog posts here...
]

export default function BlogPost({ params }: { params: { id: string } }) {
  const post = blogPosts.find((p) => p.id === Number.parseInt(params.id))

  if (!post) {
    notFound()
  }

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Link href="/blog">
        <Button variant="outline" className="mb-8">
          ← Back to Blog
        </Button>
      </Link>
      <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl mb-4">{post.title}</h1>
      <div className="flex items-center text-gray-600 mb-8">
        <span>{post.author}</span>
        <span className="mx-2">•</span>
        <span>{post.date}</span>
      </div>
      <div className="relative h-96 mb-8">
        <Image
          src={post.image || "/placeholder.svg"}
          alt={post.title}
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>
      <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />
      <div className="mt-12 flex justify-between items-center">
        <Button variant="outline">Share</Button>
        <Link href="/blog">
          <Button variant="outline">More Articles</Button>
        </Link>
      </div>
    </article>
  )
}

