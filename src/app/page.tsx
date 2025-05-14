
import { Button } from "@/components/ui/button";
import { protectServer } from "@/features/auth/utils";
import Link from "next/link";
import { auth } from "@/auth";


export default async function Home() {

   await protectServer();

   const session = await auth();
  
  return (
    <div>
      <Link href = "/editor/123">
         <Button variant="ghost" className="p-4"
     >Click Me
     </Button>
      </Link>
  
      <p>You are logged in</p>

      {JSON.stringify(session)}

  
    </div>
  );
}
