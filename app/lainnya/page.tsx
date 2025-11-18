"use client";

import Link from "next/link";
import Navbar from "../../components/sidebar";
import { motion } from "framer-motion";

export default function LainnyaPage() {
  return (
    <div className="min-h-screen bg-[#0f1a2b] text-white relative overflow-hidden">

      <Navbar />

      {/* GLOW BACKGROUND BERPUTAR */}
      <motion.div
        className="absolute top-40 left-20 w-80 h-80 rounded-full opacity-40 blur-3xl"
        animate={{ rotate: 360 }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        style={{
          background: "conic-gradient(from 0deg, #3b82f6, transparent 40%, #60a5fa, transparent 80%, #3b82f6)",
        }}
      />

      <motion.div
        className="absolute bottom-20 right-10 w-72 h-72 rounded-full opacity-35 blur-3xl"
        animate={{ rotate: -360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        style={{
          background: "conic-gradient(from 0deg, #60a5fa, transparent 50%, #3b82f6, transparent 90%, #60a5fa)",
        }}
      />

      {/* FLOAT LEMBUT */}
      <div className="absolute left-1/2 -translate-x-1/2 top-44 w-40 h-40 opacity-20 animate-float"></div>

      <style>{`
        @keyframes floatSmooth {
          0% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0); }
        }
        .animate-float {
          animation: floatSmooth 5s ease-in-out infinite;
        }

        @keyframes fadeIn {
          0% { opacity: 0; transform: translateY(10px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade { animation: fadeIn 1s ease-in-out forwards; }
        .animate-fade-slow { animation: fadeIn 1.6s ease-in-out forwards; }
        .animate-fade-slower { animation: fadeIn 2.2s ease-in-out forwards; }
      `}</style>

      {/* CONTENT */}
      <section className="pt-32 pb-20 relative z-10">
        <div className="max-w-6xl mx-auto px-6 text-center">

          {/* WRAPPER 404 DENGAN GLOW MUTER */}
          <div className="relative flex justify-center items-center mb-6">

            {/* GLOW BERPUTAR DI SEKITAR 404 */}
            <motion.div
              className="absolute w-[260px] h-[260px] rounded-full"
              animate={{ rotate: 360 }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{
                background:
                  "conic-gradient(#3b82f6 0deg, transparent 90deg, #60a5fa 180deg, transparent 270deg, #3b82f6 360deg)",
                filter: "blur(35px)",
                opacity: 0.55,
              }}
            />

            {/* TEKS 404 */}
            <h1 className="relative text-7xl md:text-8xl font-extrabold text-blue-500 drop-shadow-[0_0_20px_rgba(59,130,246,0.6)] animate-fade">
              404
            </h1>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-slow">
            Halaman Tidak Ditemukan
          </h2>

          <p className="text-gray-300 max-w-2xl mx-auto leading-relaxed mb-10 animate-fade-slower">
            Sepertinya kamu tersesat di lapangan, nih!  
            Halaman yang kamu cari tidak tersedia.  
            Silakan kembali ke beranda atau jelajahi menu lainnya.
          </p>

          {/* BUTTON */}
          <Link
            href="/"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-xl transition shadow-lg animate-fade-slower"
          >
            Kembali ke Beranda
          </Link>

        </div>
      </section>

    </div>
  );
}
