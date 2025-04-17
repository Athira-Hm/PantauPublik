const laporanGrid = document.getElementById('laporanGrid');

const laporanSample = {
  lokasi: "LIMPOK BANDA ACEH",
  kategori: "Jalan Rusak",
  image: "https://www.habaaceh.id/files/images/20230916-whatsapp-image-2023-09-16-at-13-39-39.jpeg"
};

const totalCards = 9;

for (let i = 0; i < totalCards; i++) {
  const card = document.createElement('div');
  card.className = "bg-white text-black rounded-2xl overflow-hidden shadow-lg flex flex-col";

  card.innerHTML = `
    <img src="${laporanSample.image}" alt="Laporan" class="w-full h-[180px] object-cover" />
    <div class="p-4 flex flex-col gap-2">
      <span class="text-green-600 text-xs font-bold">${laporanSample.kategori}</span>
      <p class="text-base font-bold">${laporanSample.lokasi}</p>
    </div>
  `;

  laporanGrid.appendChild(card);
}
