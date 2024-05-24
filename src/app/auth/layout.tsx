import { Button } from "@/components/ui/button";
import { ArrowLeftCircle } from "lucide-react";
import Link from "next/link";


export default function AuthenticationLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-full p-5 flex flex-col">
        <div className="w-full flex items-start justify-start">
            <Button className="rounded-lg size-12 p-0" asChild >
                <Link href={"/"}>
                    <ArrowLeftCircle/>
                </Link>
            </Button>
        </div>
        <div className="w-full">
            {children}
        </div>
    </div>
  );
}
