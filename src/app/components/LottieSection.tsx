"use client";

import { Player } from "@lottiefiles/react-lottie-player";

export default function LottieSection() {
  return (
    <div className="flex justify-center items-center w-full">
      <Player
        autoplay
        loop
        src="https://assets1.lottiefiles.com/packages/lf20_qp1q7mct.json"
        style={{ height: "1000px", width: "1000px" }}
      />
    </div>
  );
}


export function LottieSection1() {
  return (
    <div className="flex justify-center items-center w-full">
      <Player
        autoplay
        loop
        src="https://assets1.lottiefiles.com/packages/lf20_qp1q7mct.json"
        style={{ height: "500px", width: "500px" }}
      />
    </div>
  );
}

