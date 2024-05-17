import Sidebar from "@/components/admin/adminSidebar";



export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex w-full bg-[#F7F7F7] min-h-screen">
        <section className="flex flex-col md:flex-[1.2]  justify-start py-10   bg-white min-h-screen shadow-lg">
            {/* sidebar will come here */}
            <Sidebar/>
        </section>
        <section className="flex-[5]">
            {children}
        </section>
    </main>
  );
}
