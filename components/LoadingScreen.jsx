"use client";
import { useState, useEffect } from "react";

const LoadingScreenMain = ({ visible = true }) => {
  const [dots, setDots] = useState("");
  const [isVisible, setIsVisible] = useState(visible);

  useEffect(() => {
    // Animation for dots
    const interval = setInterval(() => {
      setDots((prev) => (prev.length >= 3 ? "" : prev + "."));
    }, 500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Hide when loading resources
    if (visible) {
      setIsVisible(true);
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [visible]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-b from-purple-900 to-slate-900">
      <div className="w-full max-w-md px-4 text-center">
        <div className="relative mx-auto mb-8 h-24 w-24">
          <div className="absolute inset-0 rounded-full border-4 border-t-4 border-purple-200 border-t-purple-500 animate-spin"></div>
          <div className="absolute inset-3 rounded-full border-4 border-r-4 border-teal-200 border-r-teal-500 animate-spin-reverse"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="h-4 w-4 rounded-full bg-white animate-pulse"></div>
          </div>
        </div>

        <h2 className="mb-6 text-2xl font-bold text-white">
          Creating Crossword Puzzles...
          <span className="inline-block w-6 text-left">{dots}</span>
        </h2>

        <p className="text-sm text-gray-300">Loading...</p>

        <div className="absolute top-1/4 left-1/4 text-purple-300 opacity-30 animate-float">✨</div>
        <div className="absolute bottom-1/4 right-1/3 text-teal-300 opacity-30 animate-float-delay">✨</div>
        <div className="absolute top-1/3 right-1/4 text-pink-300 opacity-30 animate-float-delay-long">✨</div>
      </div>
    </div>
  );
};

export default LoadingScreenMain;
