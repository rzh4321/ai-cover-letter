import { Button } from "./ui/button";
import Link from "next/link";

export default function NavBar( { showCreate } : { showCreate : boolean }) {
    return (
      <nav className="flex justify-between items-center p-8 w-screen h-3">
      <span className="font-primary text-xl text-white">COVERED</span>
      {showCreate ? <Button asChild>
        <Link href="/create" className="py-2 px-4 md:px-10  my-2 text-center bg-blue-300 text-black">Create</Link>
        </Button> : <div className="text-white">home icon</div>}
      </nav>
)
}