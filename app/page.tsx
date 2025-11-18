"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/sidebar";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0f1a2b] text-white">

      {/* ================= NAVBAR ================= */}
      <Navbar />

      {/* ================= FULL HEADER ================= */}
      <section
        className="w-full min-h-screen flex items-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/bg.png')" }}
      >
        <div className="max-w-7x2 mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

          {/* ===== LEFT TEXT + FADE UP ===== */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-3xl md:text-5xl font-bold leading-snug -translate-y-30">
              Update Basket
              <br className="hidden md:block" />
               Tergokil, Tiap Hari. <br />
            </h1>

            <p className="text-gray-300 mt-5 text-sm md:text-base max-w-lg -translate-y-25">
              Carousel highlight terbaru, gosip pemain, rivalry panas, dan insight mendalam — semuanya dikemas untuk generasi pecinta bola basket.
            </p>

            {/* Search Bar */}
            <div className="mt-7 max-w-md -translate-y-20">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Cari kata kunci berita"
                  className="w-full px-4 py-3 rounded-lg text-white-900 border border-gray-200 focus:ring-2 focus:ring-blue-500"
                />
                <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm">
                  Cari sekarang
                </button>
              </div>
            </div>
          </motion.div>

          {/* ===== RIGHT IMAGE GRID + FADE UP DELAY ===== */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="grid grid-cols-2 gap-6"
          >
            <Image
              src="/images/mj.png"
              alt="Michael Jordan"
              width={300}
              height={300}
              className="rounded-2xl object-cover w-full h-44 md:h-70 mt-[10px] -translate-y-15"
            />

            <Image
              src="/images/kobee.png"
              alt="Kobe Bryant"
              width={300}
              height={300}
              className="rounded-2xl object-cover w-full h-44 md:h-70 mt-[40px] "
            />

            <Image
              src="/images/curry1.png"
              alt="Stephen Curry"
              width={300}
              height={300}
              className="rounded-2xl object-cover w-full h-44 md:h-70 mt-[-30px] -translate-y-15"
            />

            <Image
              src="/images/kd.png"
              alt="Kevin Durant"
              width={300}
              height={300}
              className="rounded-2xl object-cover w-full h-44 md:h-70 mt-[-5px]"
            />
          </motion.div>

        </div>
      </section>

    </div>
  );
}
