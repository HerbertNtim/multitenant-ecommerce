import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import Link from "next/link";

interface NavbarItem {
  href: string;
  children: React.ReactNode;
}

interface MobileNavbarProps {
  items: NavbarItem[];
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const MobileNavbar = ({ items, open, onOpenChange }: MobileNavbarProps) => {
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="left" className="p-0 transition-none">
        <SheetHeader className="p-4 border-b">
          <SheetTitle>Menu</SheetTitle>
        </SheetHeader>
        <ScrollArea className="h-full flex flex-col overflow-y-auto pb-2">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="w-full text-left p-4 hover:bg-black hover:text-white flex items-center text-base font-medium"
              onClick={() => onOpenChange(false)}
            >
              {item.children}
            </Link>
          ))}

          <div className="border-t flex flex-col mt-12">
            <Button
              asChild
              variant={"secondary"}
              className="border-l-0 border-t-0 border-b border-r-0 py-8 h-full rounded-none bg-white hover:bg-pink-400 transition-colors text-2xl font-medium"
            >
              <Link href={"sign-in"}>Log In</Link>
            </Button>
            <Button
              asChild
              className="border-l-0 border-t-0 border-b border-r-0 py-8 h-full rounded-none bg-black text-white hover:bg-pink-400 transition-colors text-2xl font-medium"
            >
              <Link href={"sign-up"}>Start Selling</Link>
            </Button>
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNavbar;
