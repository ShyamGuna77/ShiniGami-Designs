
import { Button } from "@/components/ui/button";
import Link from "next/link";
export default function Home() {
  return (
    <div>
      <Link href = "/editor/123">
         <Button variant="ghost" className="p-4"
     >Click Me
     </Button>
      </Link>
  
    </div>
  );
}
