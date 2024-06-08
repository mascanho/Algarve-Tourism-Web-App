"use client";
import React, { useState, useEffect } from "react";

const Typewriter = ({ text, delay, heading }) => {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrentText((prevText) => prevText + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, delay);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, delay, text]);

  return (
    <div className="text-lg">
      {heading === "h1" && <h1>{currentText}</h1>}
      {heading === "h2" && <h2>{currentText}</h2>}
      {heading === "h3" && <h3>{currentText}</h3>}
      {heading === "h4" && <h4>{currentText}</h4>}
      {heading === "h5" && <h5>{currentText}</h5>}
      {heading === "h6" && <h6>{currentText}</h6>}
    </div>
  );
};

export default Typewriter;
