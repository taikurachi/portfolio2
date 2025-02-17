"use client";
import Footer from "./components/utils/Footer";
import Header from "./components/utils/Header";
import Work from "./components/work/Work";
import Hero from "./components/hero/Hero";
import { useCursor } from "./components/cursorContext/CursorContext";
import { useEffect } from "react";
export default function Home() {
  const { setCursorProperties } = useCursor();
  useEffect(() => {
    setCursorProperties((prev) => {
      if (prev.color !== "bg-primary-beige") {
        return { color: "bg-primary-beige" };
      }
      return prev;
    });
  }, [setCursorProperties]);
  return (
    <>
      <Header />
      <Hero />
      <Work />
      <Footer />
    </>
  );
}
