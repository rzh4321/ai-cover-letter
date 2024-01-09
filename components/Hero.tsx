import { MutableRefObject } from "react";
import { Button } from "./ui/button";
import Link from "next/link";

export default function Hero({
  exampleRef,
}: {
  exampleRef: MutableRefObject<HTMLDivElement | null>;
}) {
  const executeScroll = (ref: MutableRefObject<HTMLDivElement | null>) => {
    if (!ref?.current) {
      return;
    }
    document.body.style.position = "static";
    document.body.style.overflow = "unset";
    ref.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <main className="w-full flex justify-center flex-col items-center md:pt-20 pt-16">
      <h1
        className={`p-1 font-extrabold text-center text-4xl md:text-7xl font-secondary`}
      >
        <span className="drop-shadow-md">Make Your Dream</span>
        <span className="block">Job A Reality</span>
      </h1>
      <p className="max-w-[250px] text-center py-6 md:max-w-[400px]">
        Find the perfect cover letter for your next job
      </p>
      <div className="flex gap-2 items-center">
        {/* ${theme === 'light' ? 'bg-blue-500' : 'bg-blue-300 hover:bg-white'} */}
        <Button
          asChild
          className={`md:p-6 md:text-lg duration-200 text-center`}
        >
          <Link href="/create">Get started</Link>
        </Button>
        <Button
          onClick={() => executeScroll(exampleRef)}
          variant={"seeExample"}
          className={`md:text-lg md:p-6 duration-200`}
        >
          See example
        </Button>
      </div>
      <div className="md:my-[100px] my-[80px] flex flex-col steps:flex-row steps:my-[150px] gap-12">
        <div className="flex gap-3">
          <span
            className={`border-1 rounded-sm bg-gray-400 px-2 text-black w-[25px] text-center`}
          >
            1
          </span>
          <span>Tell us about yourself</span>
        </div>
        <div className="flex gap-3">
          <span
            className={`border-1 rounded-sm bg-gray-400 px-2 text-black w-[25px] text-center`}
          >
            2
          </span>
          <span>Generate the cover letter</span>
        </div>
        <div className="flex gap-3">
          <span
            className={`border-1 rounded-sm bg-gray-400 px-2 text-black w-[25px] text-center`}
          >
            3
          </span>
          <span>Personalize the cover letter</span>
        </div>
      </div>
    </main>
  );
}
