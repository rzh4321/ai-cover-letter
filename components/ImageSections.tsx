import { useRouter } from "next/navigation";
import React, { MutableRefObject } from "react";
import ImageSection from "./ImageSection";

type Props = {
  exampleRef: MutableRefObject<HTMLDivElement | null>;
};

const ImageSections = ({ exampleRef }: Props) => {
  const router = useRouter();

  const handleCreate = () => {
    router.push("/create");
  };

  const data = [
    {
      title: "AI has got you covered",
      text: "GPT-3 is an artificial intelligence model that is able to generate human-like text. It is trained on a vast amount of data, including books, websites, and other texts. This makes it incredibly powerful at generating text that sounds natural.",
      src: "/images/abstract.svg",
      btnContent: "Create your cover letter",
      reverse: false,
      onClick: handleCreate,
    },
    {
      title: "Cover Letter Example",
      text: "If you’re wondering what a cover letter generated by AI would look like here is an example below generated by our cover letter generator",
      btnContent: "See example",
      src: "/images/tech-man.svg",
      reverse: true,
    },
  ];
  return (
    <div className="px-8 space-y-12 md:flex md:flex-col md:items-center">
      {data.map((section, i) => (
        <ImageSection key={i} {...section} exampleRef={exampleRef} />
      ))}
    </div>
  );
};

export default ImageSections;
