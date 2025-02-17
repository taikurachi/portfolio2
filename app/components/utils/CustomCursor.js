"use client";
import { useEffect, useState } from "react";
import { motion } from "motion/react";
import Image from "next/image";
import { useCursor } from "../cursorContext/CursorContext";
export default function CustomCursor() {
  const { cursorProperties, cursorVariant } = useCursor();
  const [position, setPosition] = useState({
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
  });
  useEffect(() => {
    const mouseMove = (e) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };
    window.addEventListener("mousemove", mouseMove);
    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  const variants = {
    default: {
      height: 20,
      width: 20,
      x: position.x - 12,
      y: position.y - 12,
    },
    text: {
      height: 40,
      width: 200,
      x: position.x - 90,
      y: position.y - 15,
    },
  };

  return (
    <motion.div
      variants={variants}
      animate={cursorVariant}
      exit={{ opacity: 0 }}
      className={`${
        cursorProperties?.color ? cursorProperties.color : "bg-primary-beige"
      } fixed flex opacity-90 font-bold justify-center text-black items-center top-0 z-20 p-2 left-0 rounded-full pointer-events-none`}
    >
      {cursorProperties?.text && (
        <motion.span
          className="flex justify-center items-center gap-3"
          initial={{ opacity: 0 }}
          animate={{
            opacity: cursorProperties.text ? 1 : 0,
          }}
          transition={{
            duration: 0.2,
            delay: cursorProperties.text ? 0.17 : 0,
          }}
        >
          {cursorProperties.text}
          <Image
            className="rotate-90 invert"
            src="/arrow-beige.svg"
            width={14}
            height={14}
            alt="arrow icon"
          />
        </motion.span>
      )}
    </motion.div>
  );
}
