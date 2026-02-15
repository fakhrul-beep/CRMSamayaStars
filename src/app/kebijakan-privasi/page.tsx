export const metadata = {
  title: 'Kebijakan Privasi – Samaya Stars',
  description: 'Halaman kebijakan privasi Samaya Stars mengenai penggunaan data pengguna.',
};

export default function KebijakanPrivasiPage() {
  return (
    <main className="pt-32 pb-24">
      <div className="mx-auto max-w-3xl px-6">
        <h1 className="text-4xl font-bold text-primary mb-8 text-center">Kebijakan Privasi</h1>
        <div className="prose prose-neutral max-w-none text-neutral-600 space-y-6 leading-relaxed">
          <p className="text-sm italic">Terakhir diperbarui: 15 Februari 2026</p>
          
          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">1. Informasi yang Kami Kumpulkan</h2>
            <p>
              Kami mengumpulkan informasi yang Anda berikan langsung kepada kami saat Anda mengisi formulir konsultasi, mendaftar akun, atau menghubungi kami melalui layanan pelanggan. Informasi ini mencakup nama, alamat email, nomor telepon, dan detail rencana pernikahan Anda.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">2. Penggunaan Informasi</h2>
            <p>
              Informasi yang kami kumpulkan digunakan untuk memberikan layanan konsultasi yang dipersonalisasi, memproses permintaan Anda terhadap venue, mengirimkan pembaruan layanan, dan meningkatkan pengalaman pengguna di platform kami.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">3. Keamanan Data</h2>
            <p>
              Kami berkomitmen untuk menjaga keamanan data Anda dengan menggunakan teknologi enkripsi terkini dan protokol keamanan industri untuk mencegah akses tidak sah atau penyalahgunaan data pribadi Anda.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">4. Hak Pengguna</h2>
            <p>
              Anda memiliki hak untuk mengakses, mengoreksi, atau meminta penghapusan data pribadi Anda yang tersimpan di sistem kami. Silakan hubungi tim dukungan kami jika Anda ingin menggunakan hak-hak tersebut.
            </p>
          </section>

          <section className="bg-neutral-100 p-8 rounded-2xl mt-12">
            <h2 className="text-xl font-bold text-primary mb-2">Hubungi Kami</h2>
            <p>Jika Anda memiliki pertanyaan mengenai Kebijakan Privasi ini, silakan hubungi kami di:</p>
            <p className="font-bold mt-2">privacy@samayastars.com</p>
          </section>
        </div>
      </div>
    </main>
  );
}
