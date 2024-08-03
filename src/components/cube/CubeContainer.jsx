import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import Cube from "./Cube";

const CubeContainer = () => {
  return (
    <>
      <Canvas>
        <Cube />
      </Canvas>
    </>
  );
};

export default CubeContainer;
