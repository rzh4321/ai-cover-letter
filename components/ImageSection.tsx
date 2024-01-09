import Image from "next/image";
import React, { LegacyRef } from "react";
import { Button } from "./ui/button";

type ImageSectionProps = {
  title: string;
  text: String;
  btnContent: String;
  src: string;
  reverse: boolean;
  exampleRef: LegacyRef<HTMLDivElement>;
  onClick: () => void;
};

const ImageSection = ({
  title,
  text,
  btnContent,
  src,
  reverse,
  exampleRef,
  onClick,
}: ImageSectionProps) => {
  const textBeginning = title.substring(0, title.lastIndexOf(" "));
  const lastWord = title.split(" ").pop();
  return (
    <div
      ref={btnContent === "See example" ? exampleRef : undefined}
      className={`md:w-10/12 space-y-8 md:flex ${
        reverse ? "md:flex-row-reverse" : "md:flex"
      } md:items-center md:justify-between`}
    >
      <div className="">
        <h2 className="text-3xl font-secondary md:text-5xl">
          {textBeginning}
          <span className="block bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-700">
            {lastWord}
          </span>
        </h2>
        <p className="text-left w-11/12 max-w-[600px] md:py-4 my-4">{text}</p>
        <Button
          onClick={onClick}
          className={`md:p-6 md:text-lg duration-200 text-center border-2`}
        >
          {btnContent}
        </Button>
      </div>
      <Image
        src={src}
        alt={title}
        width={100}
        height={100}
        className="w-full max-w-[450px]"
        loading="lazy"
      />
    </div>
  );
};

export default ImageSection;
