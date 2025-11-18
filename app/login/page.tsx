"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0f1a2b] text-white relative overflow-hidden px-6">

      {/* GLOW BACKGROUND MUTER */}
      <motion.div
        className="absolute top-32 left-20 w-96 h-96 rounded-full opacity-40 blur-3xl"
        animate={{ rotate: 360 }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        style={{
          background:
            "conic-gradient(from 0deg, #3b82f6, transparent 50%, #60a5fa, transparent 90%, #3b82f6)",
        }}
      />

      <motion.div
        className="absolute bottom-20 right-14 w-80 h-80 rounded-full opacity-35 blur-3xl"
        animate={{ rotate: -360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        style={{
          background:
            "conic-gradient(from 0deg, #60a5fa, transparent 40%, #3b82f6, transparent 85%, #60a5fa)",
        }}
      />

      {/* CARD LOGIN */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 w-full max-w-md bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 shadow-xl"
      >
        <h1 className="text-3xl font-bold mb-2 text-center">Login</h1>
        <p className="text-gray-300 text-center mb-8">
          Masuk untuk melanjutkan ke dalam sistem
        </p>

        {/* INPUT EMAIL */}
        <div className="mb-6">
          <label className="block text-sm font-medium mb-2">Email</label>
          <input
            type="email"
            className="w-full p-3 rounded-lg bg-white/5 border border-white/20 text-white outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="example@email.com"
          />
        </div>

        {/* INPUT PASSWORD */}
        <div className="mb-6">
          <label className="block text-sm font-medium mb-2">Password</label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              className="w-full p-3 rounded-lg bg-white/5 border border-white/20 text-white outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="•••••••••"
            />
            <button
              onClick={() => setShowPassword(!showPassword)}
              type="button"
              className="absolute right-3 top-3 text-gray-300 text-sm"
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>
        </div>

        {/* LOGIN BUTTON */}
        <button className="w-full bg-blue-600 hover:bg-blue-700 transition py-3 rounded-lg font-semibold shadow-lg">
          Masuk
        </button>

        {/* REGISTER LINK */}
        <p className="text-gray-300 text-sm text-center mt-6">
          Belum punya akun?{" "}
          <Link href="/register" className="text-blue-400 hover:underline">
            Daftar sekarang
          </Link>
        </p>
      </motion.div>
    </div>
  );
}
