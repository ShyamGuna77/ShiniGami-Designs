
import { Button } from "@/components/ui/button";
import { auth } from "@/auth";
import Link from "next/link";


export default async function Home() {
  const session = await auth();
  return (
    <div>
      <Link href = "/editor/123">
         <Button variant="ghost" className="p-4"
     >Click Me
     </Button>
      </Link>
  
      {JSON.stringify(session)}

  
    </div>
  );
}
