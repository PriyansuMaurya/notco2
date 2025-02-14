"use client"

import { Suspense } from "react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, Environment } from "@react-three/drei"
import { Button } from "@/components/ui/button"
import EcoSphere from "./components/EcoSphere"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-green-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
          <div>
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block">Sustainable Living</span>
              <span className="block text-green-600">Zero Carbon Footprint</span>
            </h1>
            <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
              Join the NOTCO2 movement and make a positive impact on our planet. Discover eco-friendly products and
              learn how to reduce your carbon footprint.
            </p>
            <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
              <div className="rounded-md shadow">
                <Button className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 md:py-4 md:text-lg md:px-10">
                  Shop Now
                </Button>
              </div>
              <div className="mt-3 sm:mt-0 sm:ml-3">
                <Button
                  variant="outline"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-green-700 bg-green-100 hover:bg-green-200 md:py-4 md:text-lg md:px-10"
                >
                  Learn More
                </Button>
              </div>
            </div>
          </div>
          <div className="mt-12 lg:mt-0 h-[500px]">
            <Canvas>
              <Suspense fallback={null}>
                <EcoSphere />
                <OrbitControls enableZoom={false} />
                <Environment preset="sunset" background />
              </Suspense>
            </Canvas>
          </div>
        </div>
      </div>
    </div>
  )
}

