// app/berita/[id]/page.tsx
import Image from "next/image";
import Navbar from "@/components/sidebar"; // sesuaikan path jika beda

type Props = {
  params: {
    id: string;
  };
};

// Sama seperti data di halaman utama
const newsData: Record<string, { title: string; date: string; image: string; content: string }> = {
  "kobe-bryant-meninggal": {
  title: "Dunia Berduka: Kobe Bryant Meninggal Dalam Kecelakaan Helikopter",
  date: "26 Januari 2020",
  image: "/images/berita/special/kobe.png",
  content: `
    Dunia olahraga kehilangan salah satu legenda terbaiknya,
    Kobe Bryant, yang meninggal dalam kecelakaan helikopter di
    Calabasas, California bersama putrinya, Gianna.

    Kepergian Kobe meninggalkan duka mendalam bagi keluarga,
    fans, rekan-rekan sesama pemain, serta seluruh penggemar
    bola basket di seluruh dunia.
  `,
},


  "luka-triple-double-50": {
    title: "Luka Dončić Cetak Triple-Double 50 Poin Pertama",
    date: "6 Februari 2025",
    image: "/images/luka.jpg",
    content: `
      Luka Dončić kembali menciptakan sejarah di NBA dengan triple-double berisi 50 poin.
      Mavericks menang 132-129 melawan Clippers dalam laga yang sangat ketat.

      Luka mendominasi dari awal hingga akhir, menunjukkan bahwa ia adalah kandidat MVP
      paling kuat musim ini. Fans Dallas menyebut penampilannya sebagai salah satu yang terbaik
      sepanjang kariernya.
    `,
  },
};

export default function DetailBerita({ params }: Props) {
  const data = newsData[params.id];

  if (!data) {
    return (
      <div className="min-h-screen bg-[#0f1a2b] text-white">
        <Navbar />
        <div className="max-w-3xl mx-auto py-24 px-6 text-center">
          <h1 className="text-2xl font-bold">Berita tidak ditemukan</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0f1a2b] text-white">
      <Navbar />

      <main className="max-w-3xl mx-auto py-20 px-6">
        <h1 className="text-3xl font-bold">{data.title}</h1>
        <p className="text-gray-400 mt-2">{data.date}</p>

        <div className="relative w-full h-72 mt-8 rounded-lg overflow-hidden">
          <Image src={data.image} alt={data.title} fill className="object-cover" />
        </div>

        <div className="mt-8 text-gray-200 leading-relaxed whitespace-pre-line text-lg">
          {data.content}
        </div>
      </main>
    </div>
  );
}
