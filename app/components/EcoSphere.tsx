import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import { Sphere, MeshDistortMaterial } from "@react-three/drei"
import type * as THREE from "three"

const EcoSphere = () => {
  const sphereRef = useRef<THREE.Mesh>(null!)

  useFrame((state, delta) => {
    sphereRef.current.rotation.x += delta * 0.2
    sphereRef.current.rotation.y += delta * 0.2
  })

  return (
    <Sphere ref={sphereRef} args={[1, 64, 64]}>
      <MeshDistortMaterial color="#4ade80" attach="material" distort={0.4} speed={2} roughness={0.2} />
    </Sphere>
  )
}

export default EcoSphere

