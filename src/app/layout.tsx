import "./globals.css";
import { cn } from "@/lib/utils"
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(
          "min-h-screen bg-background font-sans antialiased",
        )}>{children}</body>
    </html>
  );
}
