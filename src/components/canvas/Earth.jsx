import React, { Suspense, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";

const Earth = () => {
  const { scene } = useGLTF("./planet/scene.gltf");

  useEffect(() => {
    // Log and sanitize positions to check for NaN values
    scene.traverse((child) => {
      if (child.isMesh) {
        const positions = child.geometry.attributes.position.array;
        for (let i = 0; i < positions.length; i++) {
          if (isNaN(positions[i])) {
            console.error("NaN value found in positions:", positions[i]);
            positions[i] = 0; // or some other default value
          }
        }
        child.geometry.attributes.position.needsUpdate = true;
        child.geometry.computeBoundingSphere();
      }
    });
  }, [scene]);

  return <primitive object={scene} scale={2.5} position-y={0} rotation-y={0} />;
};

const EarthCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop="demand"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Earth />
        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;
