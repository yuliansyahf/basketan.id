import { ReactNode } from "react";

export default function BeritaDetailLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-[#0f1a2b] text-white">
      {children}
    </div>
  );
}

