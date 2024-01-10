import { Linkedin, Github } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex flex-col gap-2 items-center content-center py-12">
      <div className="flex gap-3">
        <Link
          href="https://www.linkedin.com/in/ricky-zhang-a85a9024a/"
          target="_blank"
        >
          <Linkedin />
        </Link>
        <Link href="https://github.com/rzh4321" target="_blank">
          <Github />
        </Link>
      </div>
      <div>
        <small className="pt-3 md:pt-4">
          Built and designed by{" "}
          <Link
            href="https://rzh4321.vercel.app/"
            target="_blank"
            className="font-semibold"
          >
            Ricky
          </Link>
        </small>
      </div>
    </footer>
  );
}
