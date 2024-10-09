// Data berdasarkan gambar
let data = [
  { nama: "Data 1", gol: "A", status: "NIKAH" },
  { nama: "Data 2", gol: "B", status: "BELUM" },
  { nama: "Data 3", gol: "C", status: "NIKAH" },
  { nama: "Data 4", gol: "B", status: "BELUM" },
  { nama: "Data 5", gol: "C", status: "NIKAH" },
  { nama: "Data 6", gol: "B", status: "BELUM" },
  { nama: "Data 7", gol: "C", status: "NIKAH" },
  { nama: "Data 8", gol: "A", status: "BELUM" },
  { nama: "Data 9", gol: "A", status: "NIKAH" },
  { nama: "Data 10", gol: "A", status: "BELUM" },
];

// Gaji pokok berdasarkan golongan
let gajiPokok = {
  A: 10000000,
  B: 8000000,
  C: 5000000,
};

// Tunjangan berdasarkan golongan
let tunjangan = {
  A: 2000000,
  B: 1500000,
  C: 1000000,
};

// Fungsi untuk menghitung total gaji
function hitungTotalGaji(gol, status) {
  let gaji = gajiPokok[gol];
  let tunjanganNikah = status === "NIKAH" ? tunjangan[gol] : 0;
  return gaji + tunjanganNikah;
}

// Menampilkan data dengan perhitungan total gaji

data.forEach((item) => {
  let totalGaji = hitungTotalGaji(item.gol, item.status);
  console.log(`${item.nama} | 
    Golongan: ${item.gol} | 
    Status: ${item.status} | 
    Gaji Pokok: Rp ${gajiPokok[item.gol]} | 
    Tunjangan: Rp ${item.status === "NIKAH" ? tunjangan[item.gol] : 0} | 
    Total: Rp ${totalGaji}`);
});
