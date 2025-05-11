fetch("https://akarwshan.my.id/simpan_ucapan.php", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ nama: "Andi", ucapan: "Selamat menempuh hidup baru!" })
});
