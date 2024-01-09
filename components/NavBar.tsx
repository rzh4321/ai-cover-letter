import { Button } from "./ui/button";
import Link from "next/link";
import ModeToggle from "./ModeToggle";
import { ThemeProvider } from "@/components/theme-provider";
import { useState, useEffect } from "react";
import { useWindowScroll } from "react-use";

export default function NavBar({ showCreate }: { showCreate: boolean }) {
  const { y: pageYOffset } = useWindowScroll();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(pageYOffset > 0);
    onScroll(); // Call on mount for initial check
  }, [pageYOffset]); // Only re-run the effect if pageYOffset changes

  return (
    <div className={`flex justify-between items-center py-8 px-5 h-3 sticky top-0 z-50 transition-all duration-300 bg-white dark:bg-black ${scrolled ? 'shadow-md border-b border-gray-200 dark:border-gray-600' : null}`}>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        disableTransitionOnChange
      >
        <span className="text-xl font-bold">COVERED</span>
        <div className="flex gap-2 items-center">
          {showCreate ? (
            <Button asChild>
              <Link
                href="/create"
                className="py-2 px-4 md:px-10 my-2 text-center duration-200"
              >
                Create
              </Link>
            </Button>
          ) : (
            <div>home icon</div>
          )}
          <ModeToggle />
        </div>
      </ThemeProvider>
    </div>
  );
}
