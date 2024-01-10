import Image from "next/image";
import React, { LegacyRef } from "react";
import { Button } from "./ui/button";
import Modal from "./Modal";

type ImageSectionProps = {
  title: string;
  text: String;
  btnContent: String;
  src: string;
  reverse: boolean;
  exampleRef: LegacyRef<HTMLDivElement>;
  onClick?: () => void;
};

const exampleCoverLetter =
  "Dear Hiring Manager,\n\n\tI am John Doe, a passionate software engineer with a robust five-year track record in the tech industry. My experience spans from developing high-traffic social media features at TechSolutions Inc. to contributing to widely-used open-source projects. The prospect of joining Twitter, a company at the vanguard of social media innovation, is an opportunity that excites me greatly.\n\n\tAt TechSolutions Inc., my efforts led to a 30% increase in user engagement, and my work on scalable software architecture has been adopted by numerous global companies. These accomplishments underscore my commitment to creating impactful user experiences and my readiness to tackle the unique challenges at Twitter.\n\n\tI am adept at problem-solving and thrive in fast-paced environments, qualities that I understand are valued at Twitter. My technical skills, combined with a proven ability to work collaboratively, make me a strong candidate for the Software Engineer role. I am eager to contribute to Twitter's mission to enrich public conversation and believe that my background aligns well with your team's goals.\n\n\tThank you for considering my application. I look forward to the possibility of discussing how my skills and experiences can help drive Twitter's success.\n\nSincerely,\nJohn Doe";

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
        {btnContent === "See example" ? (
          <Modal
            title="Example Cover Letter"
            text={exampleCoverLetter}
            btnContent={btnContent}
            isGenerateBtn={false}
            isExample={true}
          />
        ) : (
          <Button
            onClick={onClick}
            className={`md:p-6 md:text-lg duration-200 text-center border-2`}
          >
            {btnContent}
          </Button>
        )}
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
