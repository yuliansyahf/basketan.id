"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const featured = {
  id: "kobe-bryant-meninggal",
  title: "Dunia Berduka: Kobe Bryant Meninggal Dalam Kecelakaan Helikopter",
  date: "26 Januari 2020",
  image: "/images/berita/special/kobe3.png",
  excerpt:
    "Kobe Bryant meninggal dalam kecelakaan helikopter di California bersama putrinya, Gianna. Dunia basket berduka.",
};

const newsData = [
  {
    id: "durant-cedera-hamstring",
    title: "Kevin Durant Cedera Hamstring, Suns Krisis Menjelang Playoff",
    date: "8 Februari 2025",
    image: "/images/berita/kd.png",
    excerpt:
      "Kevin Durant mengalami cedera hamstring pada kuarter ketiga melawan Nuggets. Absennya KD menimbulkan kekhawatiran besar bagi Suns.",
  },
  {
    id: "luka-triple-double-50",
    title: "Luka Dončić Cetak Triple-Double 50 Poin Pertama",
    date: "6 Februari 2025",
    image: "/images/berita/luka.png",
    excerpt:
      "Dončić menorehkan sejarah dengan triple-double 50 poin ketika Mavericks mengalahkan Clippers secara dramatis.",
  },
  {
    id: "curry-4500-three-point",
    title: "Stephen Curry Lampaui Rekor 4.500 Three-Point",
    date: "3 Februari 2025",
    image: "/images/berita/curry.png",
    excerpt:
      "Curry menjadi pemain pertama yang menembus angka 4.500 three-point, semakin menegaskan dominasinya.",
  },
  {
    id: "wemby-11-blocks",
    title: "Wembanyama Pecahkan Rekor dengan 11 Blocks!",
    date: "2 Februari 2025",
    image: "/images/berita/wemby.png",
    excerpt:
      "Wemby tampil buas dengan 11 blok melawan Rockets, membuatnya jadi kandidat Defensive Player of The Year.",
  },
  {
    id: "giannis-dame-kompak",
    title: "Giannis & Dame Kembali Kompak — 9 Win Beruntun!",
    date: "1 Februari 2025",
    image: "/images/berita/damegiannis.png",
    excerpt:
      "Damian Lillard kembali membawa dampak besar saat Bucks meraih 9 kemenangan beruntun.",
  },
  {
    id: "lebron-musim-terakhir",
    title: "LeBron James Isyaratkan Musim Terakhir di NBA?",
    date: "30 Januari 2025",
    image: "/images/berita/lebron.png",
    excerpt:
      "LeBron mulai mempertimbangkan pensiun setelah 21 tahun berkarier. Fans heboh di seluruh dunia.",
  },
];

export default function BeritaPage() {
  return (
    <div className="min-h-screen bg-[#0f1a2b] text-white pb-20">

      {/* ================= HEADER FEATURED POST ================= */}
      <section className="max-w-7xl mx-auto px-6 pt-10 grid grid-cols-1 lg:grid-cols-3 gap-10">

        {/* Featured Big Post (KOBE) */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="col-span-2"
        >
          <Link
            href={`/berita/${featured.id}`}
            className="relative rounded-2xl overflow-hidden shadow-xl block"
          >
            <div className="relative w-full h-[550px]">
              <Image
                src={featured.image}
                alt={featured.title}
                fill
                className="object-cover object-center"
              />
            </div>

            <div className="absolute top-5 left-5 bg-blue-500 text-white text-xs font-bold px-4 py-1 rounded-full shadow">
              Featured Post
            </div>

            <div className="absolute bottom-0 p-8 text-white bg-gradient-to-t from-black/40 to-transparent w-full">
              <h2 className="text-3xl font-bold mb-2 max-w-xl">
                {featured.title}
              </h2>
              <p className="text-gray-200 max-w-lg">{featured.excerpt}</p>
              <span className="mt-4 inline-block text-sm font-semibold text-orange-400">
                Read more →
              </span>
            </div>
          </Link>
        </motion.div>

        {/* Sidebar Latest Posts */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
          className="flex flex-col gap-6"
        >
          {newsData.slice(0, 4).map((news, i) => (
            <motion.div
              key={news.id}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 + i * 0.1 }}
            >
              <Link
                href={`/berita/${news.id}`}
                className="flex items-center gap-4 bg-[#13203a] rounded-xl p-4 shadow-sm hover:bg-[#1b2a45] transition"
              >
                <div className="relative w-32 h-20 rounded-lg overflow-hidden">
                  <Image
                    src={news.image}
                    alt={news.title}
                    fill
                    className="object-cover object-center"
                  />
                </div>

                <div>
                  <p className="text-xs text-gray-400 mb-1">{news.date}</p>
                  <h3 className="text-sm font-semibold leading-snug line-clamp-2">
                    {news.title}
                  </h3>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ================= WEEKLY TOP NEWS ================= */}
      <section className="max-w-7xl mx-auto px-6 mt-20 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl font-extrabold"
        >
          Weekly Top News
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-gray-400 mt-2 max-w-2xl mx-auto"
        >
          Stay updated with our Weekly Top News, bringing you the latest stories.
        </motion.p>

        <div className="grid gap-8 mt-12 sm:grid-cols-2 lg:grid-cols-3">
          {newsData.map((news, i) => (
            <motion.div
              key={news.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 + i * 0.1 }}
            >
              <Link
                href={`/berita/${news.id}`}
                className="block bg-[#13203a] p-5 rounded-2xl shadow-sm hover:bg-[#1b2a45] transition"
              >
                <div className="relative w-full h-48 rounded-xl overflow-hidden">
                  <Image
                    src={news.image}
                    alt={news.title}
                    fill
                    className="object-cover object-center"
                  />
                </div>

                <p className="text-xs text-gray-400 mt-3">{news.date}</p>

                <h3 className="text-lg font-bold mt-1 line-clamp-2">
                  {news.title}
                </h3>

                <p className="text-gray-300 text-sm mt-2 line-clamp-3">
                  {news.excerpt}
                </p>

                <span className="text-orange-400 text-sm font-semibold mt-3 inline-block">
                  Read more →
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
