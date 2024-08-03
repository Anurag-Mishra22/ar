import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import XrCube from "./XrCube";
import { ARButton, XR } from "@react-three/xr";

const XrCubeContainer = () => {
  return (
    <>
      <ARButton
        sessionInit={{
          optionalFeatures: [
            "local-floor",
            "bounded-floor",
            "hand-tracking",
            "layers",
            "dom-overlay",
          ],
        }}
      />
      <Canvas>
        <XR>
          <XrCube />
        </XR>
      </Canvas>
    </>
  );
};

export default XrCubeContainer;
