'use client';

import { Button } from "@/components/ui/button";
import { useState, useRef } from "react";
import {
  Dialog,
  DialogContent,
  DialogClose,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Check, Copy } from "lucide-react";

type ModalProps = {
    title: String;
    text: string;
    btnContent: String;
}

export default function Modal({ title, text, btnContent } : ModalProps) {
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
            const inp = selection?.toString() || '';            
            navigator.clipboard.writeText(inp);
            selection?.removeAllRanges();
            setCopied(true);
        
            setTimeout(() => {
            setCopied(false); // icon changes after 1 second
            }, 1000);
            }
      };

      const insertTabAtCursor = () => {
        const tabCharacter = '\t';
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
        if (event.key === 'Tab') {
          event.preventDefault();
          insertTabAtCursor();
        }
      };

  return (
    <Dialog>
      <DialogTrigger asChild>
      <Button className={`md:p-6 md:text-lg duration-200 text-center border-2`}
                >
                  {btnContent}
                </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[800px] h-screen sm:h-auto">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>
        <Button onClick={onCopy} size="icon" variant={"outline"} className="absolute right-4 top-10">
              {copied 
                ? <Check className="w-4 h-4" /> 
                : <Copy className="w-4 h-4" />
              }
            </Button>
        <div className="">
            <blockquote onKeyDown={handleKeyDown} ref={ref} suppressContentEditableWarning={true} contentEditable="true" className="whitespace-pre-wrap text-sm leading-relaxed mt-8 mx-6 p-10 md:p-4 max-h-[580px] overflow-auto">
                {text}
            </blockquote>
        </div>
        <DialogFooter>
            <DialogClose asChild>
            <Button type="button" variant={'secondary'}>Close</Button>
            </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
