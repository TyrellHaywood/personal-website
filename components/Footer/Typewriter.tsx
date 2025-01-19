"use client";

import React, { useState, useEffect } from "react";

const TypeWriter = () => {
  const sentences = [
    "Let’s chat and share ideas :D",
    "Come check out ⍩Synchronize Sundays",
    "Make something and share it <3",
  ];
  const [currentSentenceIndex, setCurrentSentenceIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const handleTyping = () => {
      const currentSentence = sentences[currentSentenceIndex];

      // if deleting, reduce length of displayedText
      if (isDeleting) {
        setDisplayedText(
          currentSentence.substring(0, displayedText.length - 1)
        );
        setTypingSpeed(25); // Speed up when deleting
      } else {
        // if typing, increase the length of displayedText
        setDisplayedText(
          currentSentence.substring(0, displayedText.length + 1)
        );
        setTypingSpeed(75); // normal speed when typing
      }

      // if sentence is fully typed out, start deleting after a pause
      if (!isDeleting && displayedText === currentSentence) {
        setTimeout(() => setIsDeleting(true), 1000);
      }
      // ff sentence is fully deleted, move to next sentence
      else if (isDeleting && displayedText === "") {
        setIsDeleting(false);
        setCurrentSentenceIndex(
          (prevIndex) => (prevIndex + 1) % sentences.length
        );
      }
    };

    // set a timeout for typing effect
    const typingTimeout = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(typingTimeout); // cleanup timeout on component unmount
  }, [displayedText, isDeleting, typingSpeed, sentences, currentSentenceIndex]);

  return (
    <div className="border-[1px] border-[--cblue] w-full h-auto min-h-[45px] flex items-center pl-2 p-font font-light text-xl lg:text-3xl relative">
      {"> " + displayedText}
      <div className="w-[1px] h-full min-h-[40px] bg-black"></div>
      {/* corners */}
      <div className="w-[10px] h-[10px] bg-white border-[1px] border-[--cblue] absolute -top-[5px] -left-[5px]"></div>
      <div className="w-[10px] h-[10px] bg-white border-[1px] border-[--cblue] absolute -top-[5px] -right-[5px] "></div>
      <div className="w-[10px] h-[10px] bg-white border-[1px] border-[--cblue] absolute -bottom-[5px] -left-[5px]"></div>
      <div className="w-[10px] h-[10px] bg-white border-[1px] border-[--cblue] absolute -bottom-[5px] -right-[5px]"></div>
    </div>
  );
};

export default TypeWriter;
