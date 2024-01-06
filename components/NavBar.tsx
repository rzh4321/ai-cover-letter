import { Button } from "./ui/button";
import Link from "next/link";
import ModeToggle from "./ModeToggle";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

export default function NavBar( { showCreate } : { showCreate : boolean }) {
  const { theme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);
  
    // fix hydration error
    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return null;
    }

    return (
      <nav className="flex justify-between items-center p-8 w-screen h-3">
        <span className="text-xl font-bold">COVERED</span>
        <div className="flex gap-2 items-center">
          {showCreate ? 
            <Button asChild className={`${theme === 'light' ? 'bg-blue-500' : 'bg-blue-300'}`}>
              <Link href="/create" className="py-2 px-4 md:px-10 my-2 text-center duration-200">Create</Link>
            </Button> : <div>home icon</div>}
          <ModeToggle />
        </div>
      </nav>
)
}