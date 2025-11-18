"use client";

import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaYoutube, FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

export default function ProfilDeveloper() {
  return (
    <div
      className="min-h-screen text-white bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/images/profil/bgfadii.png')",
      }}
    >
      <div className="bg-black/0 min-h-screen pt-32 pb-20">

        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">

          {/* ====== TEXT IDENTITAS + ANIMASI ====== */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="flex flex-col justify-center"
          >
            <h1 className="text-5xl md:text-6xl font-extrabold mb-10 leading-tight">
              Profil Developer
            </h1>

            {/* CARD IDENTITAS */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
              className="bg-white/10 p-8 rounded-2xl border border-white/20 space-y-6"
            >
              <h2 className="text-3xl font-bold">Fadi Al Yuliansyah</h2>

              <p className="text-gray-200 leading-relaxed">
                Saya adalah seorang siswa yang sedang mendalami pemrograman web modern.  
                Website ini saya kerjakan sebagai tugas Frontend, dengan tujuan menjadi 
                platform berita modern dan cepat untuk berbagai informasi seputar dunia basket.
              </p>

              <h3 className="text-xl font-semibold">Riwayat Pendidikan:</h3>

              <div className="grid grid-cols-1 gap-3 text-sm">
                <Link
                  href="https://www.khoiruummahmalang.sch.id/"
                  target="_blank"
                  className="block bg-white/5 border border-white/10 p-4 rounded-xl hover:bg-white/10 transition"
                >
                  SD Islam Khoiru Ummah Malang
                </Link>

                <Link
                  href="https://www.khoiruummahmalang.sch.id/"
                  target="_blank"
                  className="block bg-white/5 border border-white/10 p-4 rounded-xl hover:bg-white/10 transition"
                >
                  SMP Islam Khoiru Ummah Malang
                </Link>

                <Link
                  href="https://moklet.org/"
                  target="_blank"
                  className="block bg-white/5 border border-white/10 p-4 rounded-xl hover:bg-white/10 transition"
                >
                  SMK Telkom Malang
                </Link>
              </div>

              <div className="pt-4 flex gap-4 text-xl">
                <Link href="https://instagram.com/faadiial" target="_blank" className="hover:text-pink-400 transition">
                  <FaInstagram />
                </Link>

                <Link href="https://youtube.com/@faadiial" target="_blank" className="hover:text-red-500 transition">
                  <FaYoutube />
                </Link>

                <Link href="https://wa.me/6282228059933" target="_blank" className="hover:text-green-400 transition">
                  <FaWhatsapp />
                </Link>
              </div>
            </motion.div>
          </motion.div>

          {/* ====== GALERI FOTO + ANIMASI ====== */}
          <motion.div
            initial={{ opacity: 0, y: 70 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="flex flex-col gap-6 justify-center"
          >
            <div className="relative w-full h-72 rounded-2xl overflow-hidden border border-white/20">
              <Image
                src="/images/profil/sistiga.jpg"
                alt="Galeri 1"
                fill
                className="object-cover"
              />
            </div>

            <div className="relative w-full h-72 rounded-2xl overflow-hidden border border-white/20">
              <Image
                src="/images/profil/sistiga1.jpg"
                alt="Galeri 2"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
