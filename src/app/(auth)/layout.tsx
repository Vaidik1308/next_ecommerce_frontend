import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";



export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="w-full min-h-screen">
        <div className="mb-4 py-1 border-b-[1px] border-gray-600 border-solid w-[95%] mx-auto">
            {/* back link for the navigation */}
            <Button asChild>
              <Link className="flex items-center gap-1" href={"."}>
                <ArrowLeft size={16} className="text-[16px]"/>
                <span>Back</span>
              </Link>
            </Button>
        </div>
        <div className="w-[95%] mx-auto">
            {children}
        </div>
    </main>
  );
}
