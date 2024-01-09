'use client';
import { Button } from "./ui/button";
import Link from "next/link";
import ModeToggle from "./ModeToggle";
import { ThemeProvider } from "@/components/theme-provider";
import { useState, useEffect } from "react";
import { useWindowScroll } from "react-use";
import { usePathname } from "next/navigation";

export default function NavBar() {
  const { y: pageYOffset } = useWindowScroll();
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(pageYOffset > 0);
    onScroll(); // Call on mount for initial check
  }, [pageYOffset]); // Only re-run the effect if pageYOffset changes

  return (
    <div className={`flex justify-between items-center py-8 px-5 h-3 sticky top-0 z-50 transition-all duration-300 bg-inherit ${scrolled ? 'shadow-md border-b border-gray-200 dark:border-gray-600' : null}`}>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        disableTransitionOnChange
      >
        <Link href='/' className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-700 dark:from-blue-200 dark:to-blue-400 text-xl font-bold hover:dark:from-blue-400 hover:dark:to-blue-700 hover:from-blue-500 hover:to-blue-800">COVERED</Link>
        <div className="flex gap-2 items-center">
          {pathname === '/' ? (
            <Button asChild>
              <Link
                href="/create"
                className="py-2 px-4 md:px-10 my-2 text-center duration-200"
              >
                Create
              </Link>
            </Button>
          ) : null}
          <ModeToggle />
        </div>
      </ThemeProvider>
    </div>
  );
}
