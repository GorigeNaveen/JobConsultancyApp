// components/LottiePlayerComponent.tsx
"use client"; // This is a client component

import { Player, IPlayerProps } from "@lottiefiles/react-lottie-player";
import React from "react";

interface LottiePlayerComponentProps extends IPlayerProps {
  src: string;
  className?: string;
}

const LottiePlayerComponent: React.FC<LottiePlayerComponentProps> = ({
  src,
  className,
  ...props
}) => {
  return (
    <Player autoplay loop src={src} className={className} {...props}></Player>
  );
};

export default LottiePlayerComponent;