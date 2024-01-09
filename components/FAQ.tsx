import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQ() {
  return (
    <div className="my-20 mx-auto w-10/12">
      <h3 className="text-3xl font-secondary text-center md:text-5xl md:py-4 mb-5">
        Frequently Asked
        <span className="block bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-500">
          Questions
        </span>
      </h3>
      <Accordion type="multiple" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>
            <span className="bg-gradient-to-r from-blue-500 to-blue-600 dark:from-blue-300 dark:to-blue-400 bg-clip-text text-transparent">
            How does an AI generated cover letter work?
            </span>
            </AccordionTrigger>
          <AccordionContent>
          Enter information about yourself and the job you're applying to. When you submit, our AI, powered by OpenAI's GPT-3, will generate a tailored cover letter. If you don't like the cover letter, just give it another go!
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>
          <span className="bg-gradient-to-r from-blue-500 to-blue-600 dark:from-blue-300 dark:to-blue-400 bg-clip-text text-transparent">
            Is it free?
            </span>
            </AccordionTrigger>
          <AccordionContent>
          Yes, it is completely free. We believe in supporting your job search without any cost, so you can focus on landing your dream job.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>
          <span className="bg-gradient-to-r from-blue-500 to-blue-600 dark:from-blue-300 dark:to-blue-400 bg-clip-text text-transparent">
            Is any of my information saved?
            </span>
            </AccordionTrigger>
          <AccordionContent>
            No, none of your information is saved. Our service is designed with your privacy in mind; as soon as the cover letter is generated, your personal data is not stored anymore. Each session is independent to ensure your confidentiality and security.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>
          <span className="bg-gradient-to-r from-blue-500 to-blue-600 dark:from-blue-300 dark:to-blue-400 bg-clip-text text-transparent">
            How can I get in touch?
            </span>
            </AccordionTrigger>
          <AccordionContent>
            You can get in touch by dropping me an email at rzh4321@gmail.com, or via my socials at the bottom of this page.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
