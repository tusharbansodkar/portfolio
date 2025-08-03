import { useEffect, useState } from "react";

interface TypewriterEffectProps {
  text: string[];
  speed: number;
  deleteSpeed: number;
  loop?: boolean;
}

const TypewriterEffect: React.FC<TypewriterEffectProps> = ({
  text,
  speed,
  deleteSpeed,
  loop,
}) => {
  const [displayText, setDisplayText] = useState<string>("");
  const [string, setString] = useState<number>(0);
  const [index, setIndex] = useState<number>(0);
  const [isDeleting, setIsDeleting] = useState<boolean>(false);

  useEffect(() => {
    const currentString = text[string % text.length];

    const interval = setInterval(
      () => {
        if (isDeleting) {
          setDisplayText(displayText.slice(0, -1));
          setIndex(index - 1);
        } else {
          if (index < currentString.length) {
            setDisplayText(displayText + currentString[index]);
            setIndex(index + 1);
          }
        }

        if (index === currentString.length) {
          setIsDeleting(true);
        }

        if (index === 0 && isDeleting) {
          if (string + 1 === text.length && !loop) {
            clearInterval(interval);
          } else {
            setString((string + 1) % text.length);
            setIndex(0);
            setIsDeleting(false);
          }
        }
      },
      isDeleting ? deleteSpeed : speed
    );

    return () => clearInterval(interval);
  }, [text, speed, index, isDeleting, deleteSpeed, loop, displayText]);

  return (
    <span className="text-white text-md md:text-lg border-r-2 animate-custom-blink">
      {displayText}
    </span>
  );
};

export default TypewriterEffect;
