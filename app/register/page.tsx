"use client";

import Link from "next/link";
import { useState } from "react";

export default function RegisterPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-[#0f1a2b] text-white flex items-center justify-center px-6">
      <div className="w-full max-w-md bg-white/10 backdrop-blur-lg p-8 rounded-2xl border border-white/20 shadow-xl">

        <h1 className="text-3xl font-bold text-center mb-6">Daftar Akun</h1>

        <div className="space-y-4">

          <div>
            <label className="text-sm">Nama Lengkap</label>
            <input
              name="name"
              type="text"
              onChange={handleChange}
              className="w-full mt-1 px-4 py-2 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          <div>
            <label className="text-sm">Email</label>
            <input
              name="email"
              type="email"
              onChange={handleChange}
              className="w-full mt-1 px-4 py-2 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          <div>
            <label className="text-sm">Password</label>
            <input
              name="password"
              type="password"
              onChange={handleChange}
              className="w-full mt-1 px-4 py-2 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          <div>
            <label className="text-sm">Konfirmasi Password</label>
            <input
              name="confirmPassword"
              type="password"
              onChange={handleChange}
              className="w-full mt-1 px-4 py-2 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

        </div>

        <button className="w-full mt-6 bg-blue-600 hover:bg-blue-700 transition py-3 rounded-xl font-semibold shadow-lg">
          Daftar Sekarang
        </button>

        <p className="text-center mt-4 text-sm text-gray-300">
          Sudah punya akun?{" "}
          <Link href="/login" className="text-blue-400 hover:underline">
            Masuk
          </Link>
        </p>

      </div>
    </div>
  );
}
