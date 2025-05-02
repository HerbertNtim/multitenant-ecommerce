import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div>
      <Button variant="destructive">
        Hello World
      </Button>
      <p className="text-center text-gray-700 text-7xl"> 
        This is a simple example of a Next.js application using Tailwind CSS and Radix UI components.
      </p>
    </div>
  );
}
