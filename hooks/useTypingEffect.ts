import { useEffect, useState } from "react";

const useTextAnimation = (textArray: string[], delay: number = 400) => {
  const [currentText, setCurrentText] = useState<string>("");
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    if (currentIndex === 0 && currentText === "") {
      setCurrentText(textArray[0]);
      setCurrentIndex(0);
      return;
    }

    const timeout = setTimeout(() => {
      const currentString: string = textArray[currentIndex % textArray.length];
      if (currentText.length < currentString.length) {
        setCurrentText((prevText) => prevText + currentString[currentText.length]);
      } else {
        setCurrentText("");
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }
    }, delay);

    return () => clearTimeout(timeout);
  }, [currentIndex, currentText, textArray, delay]);

  return currentText;
};

export default useTextAnimation;
