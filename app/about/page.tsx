import Image from "next/image"

export default function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl mb-8">About NOTCO2</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-lg text-gray-600 mb-6">
            At NOTCO2, we're on a mission to make sustainable living accessible and enjoyable for everyone. Founded in
            2025, our company was born out of a passion for environmental conservation and a desire to empower
            individuals to reduce their carbon footprint.
          </p>
          <p className="text-lg text-gray-600 mb-6">
            We believe that small changes can lead to big impacts. That's why we curate a collection of eco-friendly
            products that are not only good for the planet but also beautifully designed and built to last.
          </p>
          <p className="text-lg text-gray-600">
            Join us in our journey towards a greener future. Together, we can make a difference, one sustainable choice
            at a time.
          </p>
        </div>
        <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
          <Image src="/placeholder.svg?height=600&width=800" alt="NOTCO2 Team" layout="fill" objectFit="cover" />
        </div>
      </div>
      <div className="mt-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-green-600 mb-3">Sustainability</h3>
            <p className="text-gray-600">We prioritize eco-friendly materials and practices in everything we do.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-green-600 mb-3">Quality</h3>
            <p className="text-gray-600">
              Our products are built to last, reducing waste and promoting conscious consumption.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-green-600 mb-3">Innovation</h3>
            <p className="text-gray-600">
              We constantly seek new ways to make sustainable living easier and more accessible.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

