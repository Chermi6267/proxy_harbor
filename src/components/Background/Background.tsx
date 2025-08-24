import { ReactNode } from "react";
import RippleGrid from "components/RippleGrid/RippleGrid";
import "./style.css";

function Background({ children }: { children: ReactNode }) {
  return (
    <div className="bg_cont">
      {children}

      <RippleGrid
        enableRainbow={false}
        gridColor="#B2B2B2"
        rippleIntensity={0.05}
        gridSize={25}
        gridThickness={15}
        mouseInteraction={true}
        mouseInteractionRadius={1.2}
        opacity={0.7}
        gridRotation={45}
      />
    </div>
  );
}

export default Background;
