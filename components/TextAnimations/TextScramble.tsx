import React, { useEffect, useState } from 'react';

interface TextScrambleProps {
  texts: string[];
  duration?: number;
}

export const TextScramble: React.FC<TextScrambleProps> = ({ texts, duration = 700 }) => {
  const [scrambledText, setScrambledText] = useState<string>('');
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const characters = '!<>-_\\/[]{}—=+*^?#________';

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    let frame = 0;
    const totalFrames = Math.floor(duration / 50);
    const scramble = (newText: string, oldText: string) => {
      let output = '';
      for (let i = 0; i < newText.length; i++) {
        if (Math.random() < frame / totalFrames) {
          output += newText[i];
        } else {
          output += characters[Math.floor(Math.random() * characters.length)];
        }
      }
      setScrambledText(output);
      if (frame < totalFrames) {
        timeout = setTimeout(() => {
          frame++;
          scramble(newText, oldText);
        }, 50);
      } else {
        // Move to the next text after the current text unscrambles
        setTimeout(() => {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
        }, 1000); // Pause for a second before moving to the next text
      }
    };

    const prevText = currentIndex === 0 ? texts[texts.length - 1] : texts[currentIndex - 1];
    scramble(texts[currentIndex], prevText);

    return () => clearTimeout(timeout);
  }, [texts, duration, currentIndex, characters]);

  return <span className='text-[#0F0] text-md'>{scrambledText}</span>;
};