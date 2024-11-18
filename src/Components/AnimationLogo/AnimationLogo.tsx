import { useEffect, useRef } from "react";
import styled from "@emotion/styled";
import {
  animate,
  motion,
  useMotionTemplate,
  useMotionValue,
  useTransform,
} from "framer-motion";

const SIZE = 50;

const DotGrid = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-size: ${SIZE}px ${SIZE}px;
  background-image: radial-gradient(
    circle at 2px 2px,
    white 2px,
    transparent 0
  );
  background-position: center;
  transform: translateZ(-500px);
`;

const Container = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  perspective: 1000px;
`;

const RotationWrapper = styled(motion.div)`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  transform-style: preserve-3d;
`;

const CardWrapper = styled(motion.div)`
  margin: 24px;
  border-radius: 20px;
  backdrop-filter: blur(4px) brightness(120%);
`;

/**
 * AnimationLogo component creates an animated logo with rotating cards and a sheen effect.
 *
 * @component
 * @returns {JSX.Element} The JSX element representing the AnimationLogo component.
 */
function AnimationLogo(): JSX.Element {
  const mouseX = useMotionValue(
    typeof window !== "undefined" ? window.innerWidth / 2 : 0
  );
  const mouseY = useMotionValue(
    typeof window !== "undefined" ? window.innerHeight / 2 : 0
  );

  const cardRef = useRef<HTMLDivElement>(null);

  // rotation
  const dampen = 30;

  const rotateX = useTransform<number, number>(mouseY, (newMouseY) => {
    if (!cardRef.current) return 0;
    const rect = cardRef.current.getBoundingClientRect();
    const newRotateX = newMouseY - rect.top - rect.height / 2;
    return -newRotateX / dampen;
  });

  const rotateY = useTransform(mouseX, (newMouseX) => {
    if (!cardRef.current) return 0;
    const rect = cardRef.current.getBoundingClientRect();
    const newRotateY = newMouseX - rect.left - rect.width / 2;
    return newRotateY / dampen;
  });

  // sheen
  const diagonalMovement = useTransform<number, number>(
    [rotateX, rotateY],
    ([newRotateX, newRotateY]) => {
      const position: number = newRotateX + newRotateY;
      return position;
    }
  );

  const sheenPosition = useTransform(diagonalMovement, [-5, 5], [-100, 200]);
  const sheenOpacity = useTransform(
    sheenPosition,
    [-250, 50, 250],
    [0, 0.05, 0]
  );

  const sheenGradient = useMotionTemplate`linear-gradient(
    55deg,
    transparent,
    rgba(255 255 255 / ${sheenOpacity}) ${sheenPosition}%,
    transparent)`;

  // handle mouse move on document
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // animate mouse x and y
      animate(mouseX, e.clientX);
      animate(mouseY, e.clientY);
    };
    if (typeof window === "undefined") return;
    // recalculate grid on resize
    window.addEventListener("mousemove", handleMouseMove);
    // cleanup
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <Container>
      <RotationWrapper style={{ rotateX, rotateY }}>
        <DotGrid />
        <CardWrapper ref={cardRef} style={{ backgroundImage: sheenGradient }}>
          <img
            src="/images/AH.png"
            alt="AsadHeidari"
            width={400}
            height={400}
          />
        </CardWrapper>
      </RotationWrapper>
    </Container>
  );
}

export default AnimationLogo;
