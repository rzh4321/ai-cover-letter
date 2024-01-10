import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { AlertDialogAction } from "./ui/alert-dialog";

export default function CloseLetter() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button type="button">Close</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Are you sure?</DialogTitle>
          <DialogDescription>
            You won't be able to see this cover letter again. Make sure it is
            saved somewhere.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="flex">
          <DialogClose asChild>
            <Button className="p-3 bg-destructive" type="submit">
              No
            </Button>
          </DialogClose>
          <AlertDialogAction asChild>
            <Button className="p-3" type="submit">
              Yes
            </Button>
          </AlertDialogAction>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
