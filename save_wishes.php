<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $nama = htmlspecialchars($_POST["nama"]);
  $ucapan = htmlspecialchars($_POST["ucapan"]);
  $konfirmasi = $_POST["konfirmasi"];
  $tanggal = date("Y-m-d H:i:s");

  $file = fopen("wishes.csv", "a");
  if (filesize("wishes.csv") == 0) {
    fputcsv($file, ["id", "nama", "ucapan", "konfirmasi", "tanggal"]);
  }

  $id = time();
  fputcsv($file, [$id, $nama, $ucapan, $konfirmasi, $tanggal]);
  fclose($file);

  header("Location: index.html");
  exit;
}
?>