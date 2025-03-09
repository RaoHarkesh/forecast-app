import { useEffect, useState } from "react";
import { useThrottle } from "./useThrottle";

export function useWindowSize(throttleTime = 300) {
  const [width, setWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1920
  );

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const throttledWidth = useThrottle(width, throttleTime);

  return throttledWidth;
}
