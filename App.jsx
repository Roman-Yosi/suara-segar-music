export default function RomanYosiMusicAggregator() {
  const releases = [
    {
      title: 'Suara Dalam Otak',
      artist: 'Roman Yosi',
      status: 'Pending',
      date: '2 Juni 2026',
    },
    {
      title: 'Jejak Di Dada',
      artist: 'Roman Yosi',
      status: 'Ditinjau',
      date: '20 Mei 2026',
    },
    {
      title: 'Antara Kamu Dan Aku',
      artist: 'Roman Yosi',
      status: 'Disetujui',
      date: '15 Mei 2026',
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white flex">
      <aside className="w-72 bg-zinc-950 border-r border-zinc-800 p-6 hidden md:block">
        <div className="flex items-center gap-3 mb-10">
          <div className="w-12 h-12 rounded-2xl bg-green-500 flex items-center justify-center text-black font-bold text-xl">
            RY
          </div>
          <div>
            <h1 className="text-2xl font-bold">SUARA SEGAR</h1>
            <p className="text-zinc-400 text-sm">Music Aggregator</p>
          </div>
        </div>

        <nav className="space-y-3">
          {[
            'Rumah',
            'Ringkasan',
            'Profil Saya',
            'Analisis',
            'Penghasilan Saya',
            'Transaksi Saya',
            'Aktivitas',
            'Rilis',
            'Upload Lagu',
            'Pengaturan',
          ].map((item) => (
            <button
              key={item}
              className="w-full text-left px-4 py-3 rounded-2xl bg-zinc-900 hover:bg-green-500 hover:text-black transition"
            >
              {item}
            </button>
          ))}
        </nav>
      </aside>

      <main className="flex-1 p-6 md:p-10 overflow-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-10">
          <div>
            <h2 className="text-4xl font-bold">Dashboard Distribusi Musik</h2>
            <p className="text-zinc-400 mt-2">
              Kelola lagu, royalti, dan analitik artis Roman Yosi.
            </p>
          </div>

          <button className="bg-green-500 text-black font-semibold px-6 py-3 rounded-2xl hover:scale-105 transition">
            + Upload Lagu
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
          <div className="bg-zinc-900 rounded-3xl p-6 border border-zinc-800">
            <p className="text-zinc-400">Total Streaming</p>
            <h3 className="text-3xl font-bold mt-3">1.2M</h3>
          </div>

          <div className="bg-zinc-900 rounded-3xl p-6 border border-zinc-800">
            <p className="text-zinc-400">Pendapatan</p>
            <h3 className="text-3xl font-bold mt-3">Rp 12JT</h3>
          </div>

          <div className="bg-zinc-900 rounded-3xl p-6 border border-zinc-800">
            <p className="text-zinc-400">Rilis Aktif</p>
            <h3 className="text-3xl font-bold mt-3">28</h3>
          </div>

          <div className="bg-zinc-900 rounded-3xl p-6 border border-zinc-800">
            <p className="text-zinc-400">Artis Terdaftar</p>
            <h3 className="text-3xl font-bold mt-3">124</h3>
          </div>
        </div>

        <section className="bg-zinc-900 rounded-3xl p-6 border border-zinc-800 mb-10">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-2xl font-bold">Rilis Terbaru</h3>
              <p className="text-zinc-400 text-sm mt-1">
                Semua lagu yang sedang diproses dan aktif.
              </p>
            </div>

            <button className="bg-zinc-800 px-4 py-2 rounded-xl hover:bg-zinc-700 transition">
              Lihat Semua
            </button>
          </div>

          <div className="space-y-4">
            {releases.map((release, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 bg-black rounded-2xl p-5 border border-zinc-800"
              >
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-400 to-green-700" />

                  <div>
                    <h4 className="font-bold text-lg">{release.title}</h4>
                    <p className="text-zinc-400 text-sm">{release.artist}</p>
                  </div>
                </div>

                <div className="flex items-center gap-6">
                  <div>
                    <p className="text-zinc-500 text-sm">Tanggal</p>
                    <p>{release.date}</p>
                  </div>

                  <div>
                    <p className="text-zinc-500 text-sm">Status</p>
                    <span className="bg-green-500 text-black px-3 py-1 rounded-full text-sm font-semibold">
                      {release.status}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-zinc-900 rounded-3xl p-6 border border-zinc-800">
            <h3 className="text-2xl font-bold mb-4">Analitik</h3>

            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span>Spotify</span>
                  <span>85%</span>
                </div>
                <div className="w-full h-3 bg-zinc-800 rounded-full overflow-hidden">
                  <div className="h-full w-[85%] bg-green-500 rounded-full" />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span>TikTok</span>
                  <span>64%</span>
                </div>
                <div className="w-full h-3 bg-zinc-800 rounded-full overflow-hidden">
                  <div className="h-full w-[64%] bg-green-500 rounded-full" />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span>YouTube Music</span>
                  <span>91%</span>
                </div>
                <div className="w-full h-3 bg-zinc-800 rounded-full overflow-hidden">
                  <div className="h-full w-[91%] bg-green-500 rounded-full" />
                </div>
              </div>
            </div>
          </div>

          <div className="bg-zinc-900 rounded-3xl p-6 border border-zinc-800">
            <h3 className="text-2xl font-bold mb-4">Distribusi Platform</h3>

            <div className="grid grid-cols-2 gap-4">
              {[
                'Spotify',
                'Apple Music',
                'TikTok',
                'YouTube Music',
                'Instagram',
                'Facebook',
              ].map((platform) => (
                <div
                  key={platform}
                  className="bg-black border border-zinc-800 rounded-2xl p-4 text-center hover:border-green-500 transition"
                >
                  <p className="font-semibold">{platform}</p>
                  <p className="text-green-400 text-sm mt-1">Connected</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
