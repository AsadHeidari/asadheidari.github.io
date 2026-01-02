import { useEffect, useRef } from "react";
import styled from "@emotion/styled";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useTransform,
  useSpring,
} from "framer-motion";

const SIZE = 20;

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
  transform: translateZ(-200px);
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  margin-top: 50px;
  margin-bottom: 50px;
  overflow: hidden;
  perspective: 800px;
  max-width: 1024px;
`;

const RotationWrapper = styled(motion.div)`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
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
  const rectRef = useRef<DOMRect | null>(null);
  const rafRef = useRef<number | null>(null);
  const lastXRef = useRef(0);
  const lastYRef = useRef(0);

  // rotation
  const dampen = 30;

  const rotateX = useTransform<number, number>(mouseY, (newMouseY) => {
    const rect = rectRef.current;
    if (!rect) return 0;
    const newRotateX = newMouseY - rect.top - rect.height / 2;
    return -newRotateX / dampen;
  });

  const rotateY = useTransform(mouseX, (newMouseX) => {
    const rect = rectRef.current;
    if (!rect) return 0;
    const newRotateY = newMouseX - rect.left - rect.width / 2;
    return newRotateY / dampen;
  });

  // smooth rotations to avoid frequent style updates
  const smoothRotateX = useSpring(rotateX, { stiffness: 300, damping: 30 });
  const smoothRotateY = useSpring(rotateY, { stiffness: 300, damping: 30 });

  // sheen
  const diagonalMovement = useTransform<number, number>(
    [smoothRotateX, smoothRotateY],
    ([newRotateX, newRotateY]) => newRotateX + newRotateY
  );

  const sheenPosition = useTransform(diagonalMovement, [-5, 5], [-100, 200]);
  const sheenOpacity = useTransform(
    sheenPosition,
    [-250, 50, 250],
    [0, 0.05, 0]
  );

  const sheenGradient = useMotionTemplate`linear-gradient(
    60deg,
    transparent,
    rgba(255 255 255 / ${sheenOpacity}) ${sheenPosition}%,
    transparent)`;

  // cache card rect and listen for resize; throttle mousemove with rAF
  useEffect(() => {
    if (typeof window === "undefined") return;

    const updateRect = () => {
      if (cardRef.current)
        rectRef.current = cardRef.current.getBoundingClientRect();
    };

    updateRect();
    const ro = new ResizeObserver(updateRect);
    if (cardRef.current) ro.observe(cardRef.current);
    window.addEventListener("resize", updateRect);

    const handleMouseMove = (e: MouseEvent) => {
      lastXRef.current = e.clientX;
      lastYRef.current = e.clientY;
      if (rafRef.current != null) return;
      rafRef.current = requestAnimationFrame(() => {
        mouseX.set(lastXRef.current);
        mouseY.set(lastYRef.current);
        rafRef.current = null;
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", updateRect);
      ro.disconnect();
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [mouseX, mouseY]);

  return (
    <Container>
      <RotationWrapper
        style={{ rotateX: smoothRotateX, rotateY: smoothRotateY }}
      >
        <DotGrid />
        <CardWrapper ref={cardRef} style={{ backgroundImage: sheenGradient }}>
          <img
            src="/images/AH.png"
            alt="AsadHeidari"
            className="w-[200px]  sm:w-[400px] sm:h-[400px]"
          />
        </CardWrapper>
      </RotationWrapper>
    </Container>
  );
}

export default AnimationLogo;
