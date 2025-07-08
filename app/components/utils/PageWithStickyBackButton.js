"use client";
import { useRef } from "react";
import Header from "./Header";
import BackButton from "./BackButton";
import { useScrollDetection } from "./useScrollDetection";

export default function PageWithStickyBackButton({ children }) {
  const backButtonRef = useRef(null);
  const { isElementVisible } = useScrollDetection(backButtonRef);

  return (
    <>
      <Header showBackButton={!isElementVisible} />
      <BackButton ref={backButtonRef} />
      {children}
    </>
  );
}
