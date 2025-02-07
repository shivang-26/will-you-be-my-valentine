"use client";
import { useState } from "react";

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const getNoButtonText = () => {
    const phrases = [
      "Nahi",
      "Dubara soch lo?",
      "Sach me nahi?",
      "Ek baar aur sochlo?",
      "Accha ek last time puch raha hoon",
      "Ek chocolate dunga",
      "Ek kinder joy bhi dunga",
      "PLEASE BUBU",
      "Par kyun? :*(",
      "Mera dil toot gaya",
      "Ab to mai mar gaya",
      "Haan mai bhoot ban gaya ab",
      "Please bebuuuu",
      ":((((",
      "Ekdum last time, please?",
      "Maan jaao na baccha :(",
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <div
    className="absolute inset-0 flex flex-col items-center justify-center bg-cover bg-center bg-no-repeat"
    style={{ backgroundImage: "url(will-you-be-my-valentine/src/assets/background.png)" }}
  >
      {yesPressed ? (
        <>
          <img src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif" />
          <div className="my-4 text-4xl font-bold">Yayyyyyyyy!!! I love you my kucchu pucchu pookie🥹💕</div>
        </>
      ) : (
        <>
          <img
            className="h-[200px]"
            src="https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.gif"
          />
          <h1 className="my-4 text-4xl">Will you be my Valentine Anannya❤️</h1>
          <div className="flex items-center">
            <button
              className={`mr-4 rounded bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-700`}
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              Hanjiiiii
            </button>
            <button
              onClick={handleNoClick}
              className=" rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-700"
            >
              {noCount === 0 ? "Nahi" : getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}
