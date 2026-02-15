export const metadata = {
  title: 'Syarat & Ketentuan – Samaya Stars',
  description: 'Syarat dan ketentuan penggunaan layanan Samaya Stars.',
};

export default function SyaratKetentuanPage() {
  return (
    <main className="pt-32 pb-24">
      <div className="mx-auto max-w-3xl px-6">
        <h1 className="text-4xl font-bold text-primary mb-8 text-center">Syarat & Ketentuan</h1>
        <div className="prose prose-neutral max-w-none text-neutral-600 space-y-6 leading-relaxed">
          <p className="text-sm italic">Terakhir diperbarui: 15 Februari 2026</p>
          
          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">1. Penerimaan Ketentuan</h2>
            <p>
              Dengan mengakses dan menggunakan platform Samaya Stars, Anda dianggap telah membaca, memahami, dan menyetujui untuk terikat oleh syarat dan ketentuan ini. Jika Anda tidak setuju, mohon untuk tidak melanjutkan penggunaan layanan kami.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">2. Layanan Kami</h2>
            <p>
              Samaya Stars menyediakan platform informasi, kurasi, dan konsultasi venue pernikahan. Kami berusaha memberikan data yang akurat, namun kami tidak menjamin ketersediaan venue atau perubahan harga yang dilakukan oleh pihak pengelola venue tanpa pemberitahuan.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">3. Tanggung Jawab Pengguna</h2>
            <p>
              Pengguna bertanggung jawab atas kebenaran informasi yang diberikan melalui formulir di platform kami. Penggunaan platform untuk tujuan ilegal atau melanggar hukum sangat dilarang.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">4. Batasan Tanggung Jawab</h2>
            <p>
              Samaya Stars bertindak sebagai perantara informasi. Segala transaksi final dan pelaksanaan acara di venue merupakan tanggung jawab sepenuhnya antara pengguna dan pihak venue.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">5. Perubahan Ketentuan</h2>
            <p>
              Kami berhak memperbarui syarat dan ketentuan ini sewaktu-waktu tanpa pemberitahuan sebelumnya. Perubahan akan berlaku segera setelah dipublikasikan di halaman ini.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
