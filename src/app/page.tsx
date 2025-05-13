
import { Button } from "@/components/ui/button";
import { protectServer } from "@/features/auth/utils";
import Link from "next/link";


export default async function Home() {

   await protectServer();
  
  return (
    <div>
      <Link href = "/editor/123">
         <Button variant="ghost" className="p-4"
     >Click Me
     </Button>
      </Link>
  
      <p>You are logged in</p>

  
    </div>
  );
}
