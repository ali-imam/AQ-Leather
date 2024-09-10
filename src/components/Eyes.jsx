import React, { useEffect, useState } from "react";

function Eyes() {
  const [rotate, setRotate] = useState(0);
  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      // Mouse position from the window
      let mouseX = e.clientX;
      let mouseY = e.clientY;

      // Mouse position from the center of the window
      let deltaX = mouseX - window.innerWidth / 2;
      let deltaY = mouseY - window.innerHeight / 2;

      // Calculate the angle (convert from radians to degrees) => 1 radian = 180 / Math.PI
      var angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);

      // Update the rotation
      setRotate(angle - 180);
    });
  });

  return (
    <div
    className="eyes w-full h-[300px] md:h-[800px] overflow-hidden">
      <video
        data-scroll
        data-scroll-section
        data-scroll-speed="-0.5"
        src="/src/assets/images/bgv.mp4"
        className="w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
      ></video>
    </div>
  );
}

export default Eyes;
