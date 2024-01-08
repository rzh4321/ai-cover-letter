import { Button } from "./ui/button";
import Link from "next/link";
import ModeToggle from "./ModeToggle";
import { ThemeProvider } from "@/components/theme-provider"


export default function NavBar( { showCreate } : { showCreate : boolean}) {


    return (
      <div className="flex justify-between items-center py-8 px-5 h-3">
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            disableTransitionOnChange
          >
        <span className="text-xl font-bold">COVERED</span>
        <div className="flex gap-2 items-center">
          {showCreate ? 
            <Button asChild>
              <Link href="/create" className="py-2 px-4 md:px-10 my-2 text-center duration-200">Create</Link>
            </Button> : <div>home icon</div>}
          <ModeToggle />
        </div>
        </ThemeProvider>
      </div>
)
}