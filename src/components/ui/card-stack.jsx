
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

let interval;

export const CardStack = ({
  items,
  offset,
  scaleFactor
}) => {
  const CARD_OFFSET = offset || 10;
  const SCALE_FACTOR = scaleFactor || 0.06;
  const [cards, setCards] = useState(items);

  useEffect(() => {
    startFlipping();

    return () => clearInterval(interval);
  }, []);
  const startFlipping = () => {
    interval = setInterval(() => {
      setCards((prevCards) => {
        const newArray = [...prevCards]; // create a copy of the array
        newArray.unshift(newArray.pop()); // move the last element to the front
        return newArray;
      });
    }, 5000);
  };

  return (
    (<div className="relative  h-28 w-28 md:h-60 md:w-96">
      {cards.map((card, index) => {
        return (
          (<motion.div
            key={card.id}
            className="absolute bg-white md:bg-black  h-28 w-28 items-center overflow-hidden md:h-60 md:w-96 rounded-2xl md:rounded-3xl p-4 shadow-xl border border-white/[0.1]  shadow-white/[0.05] flex flex-col justify-between"
            style={{
              transformOrigin: "top center",
            }}
            animate={{
              top: index * -CARD_OFFSET,
              scale: 1 - index * SCALE_FACTOR, // decrease scale for cards that are behind
              zIndex: cards.length - index, //  decrease z-index for the cards that are behind
            }}>
            <div className="text-xs font-normal  md:text-neutral-200">
              {card.content}
            </div>
            <div>
              <p className="text-xs text-black md:text-white">
                {card.name}
              </p>
              <p className="text-xs font-normal md:text-neutral-200">
                {card.designation}
              </p>
            </div>
          </motion.div>)
        );
      })}
    </div>)
  );
};
