"use client";

import { Button } from "@/components/ui/button";
import { useState, useRef } from "react";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
  AlertDialogAction,
} from "@/components/ui/alert-dialog";
import { Check, Copy, Loader2 } from "lucide-react";
import Loader from "./Loader";
import CloseLetter from "./CloseLetter";

type ModalProps = {
  title: String;
  text: string | null;
  btnContent: String;
  isGenerateBtn: boolean;
  isExample: boolean;
  loading?: boolean;
  disabled?: boolean;
};

export default function Modal({
  title,
  text,
  btnContent,
  isGenerateBtn,
  isExample,
  loading,
  disabled,
}: ModalProps) {
  const [copied, setCopied] = useState(false);
  const ref = useRef<HTMLQuoteElement>(null);

  const onCopy = () => {
    if (ref.current) {
      const selection = window.getSelection();
      const range = document.createRange();
      // manually select the text to copy in order to preserve whitespaces
      range.selectNodeContents(ref.current);
      selection?.removeAllRanges();
      selection?.addRange(range);
      const inp = selection?.toString() || "";
      navigator.clipboard.writeText(inp);
      selection?.removeAllRanges();
      setCopied(true);

      setTimeout(() => {
        setCopied(false); // icon changes after 1 second
      }, 1000);
    }
  };

  const insertTabAtCursor = () => {
    const tabCharacter = "\t";
    const selection = window.getSelection();
    if (selection && selection.rangeCount > 0) {
      const range = selection.getRangeAt(0);
      range.deleteContents();
      range.insertNode(document.createTextNode(tabCharacter));
      range.setStart(range.endContainer, range.endOffset);
      selection.removeAllRanges();
      selection.addRange(range);
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLQuoteElement>) => {
    if (event.key === "Tab") {
      event.preventDefault();
      insertTabAtCursor();
    }
  };

  if (disabled) {
    return <Button variant={"generate"}>{btnContent}</Button>;
  }

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button
          type={isGenerateBtn ? "submit" : "button"}
          variant={isGenerateBtn ? "generate" : "default"}
          className={`${
            isGenerateBtn
              ? null
              : "md:p-6 md:text-lg duration-200 text-center border-2"
          }`}
        >
          {btnContent}
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="sm:max-w-[800px] max-h-screen overflow-auto">
        {loading ? (
          <>
            <Loader />
            <Loader2 className="animate-spin mx-auto my-5 size-20 stroke-blue-500" />
          </>
        ) : (
          <>
            <AlertDialogHeader>
              <AlertDialogTitle className="p-2 text-center">
                {title}
              </AlertDialogTitle>
              <AlertDialogDescription className="px-10 text-center text-xs">
                {`* The AI is likely to make up details if you ${isExample ? 'do' : 'did'} not provide
                sufficient information. It is highly recommended to make any
                necessary adjustments.`}
              </AlertDialogDescription>
            </AlertDialogHeader>
            <Button
              onClick={onCopy}
              size="icon"
              variant={"outline"}
              className="absolute right-4 top-16 sm:top-10"
            >
              {copied ? (
                <Check className="w-4 h-4" />
              ) : (
                <Copy className="w-4 h-4" />
              )}
            </Button>
            <div className="">
              <blockquote
                onKeyDown={handleKeyDown}
                ref={ref}
                suppressContentEditableWarning={true}
                contentEditable="true"
                className="whitespace-pre-wrap text-sm leading-relaxed mt-8 mx-6 p-10 md:p-4 max-h-[580px] overflow-auto"
              >
                {text}
              </blockquote>
            </div>
          </>
        )}
        <AlertDialogFooter>
          {isExample ? <AlertDialogAction asChild><Button type="button">Close</Button></AlertDialogAction> : <CloseLetter />}
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
