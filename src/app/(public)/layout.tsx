import PublicNavbar from "@/components/public/publicNavbar/PublicNavbar";


export default function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="w-full min-h-screen">
        <div className="mb-8 py-1 border-b-[1px] border-gray-600 border-solid">
            <PublicNavbar/>
        </div>
        <div>
            {children}
        </div>
    </main>
  );
}
