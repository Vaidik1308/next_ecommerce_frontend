


export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="w-full min-h-screen">
        <div className="mb-4 py-1 border-b-[1px] border-gray-600 border-solid w-[95%] mx-auto">
            {/* back link for the navigation */}
            back link
        </div>
        <div className="w-[95%] mx-auto">
            {children}
        </div>
    </main>
  );
}
