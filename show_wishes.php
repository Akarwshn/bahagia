<?php
if (file_exists("wishes.csv")) {
  $file = fopen("wishes.csv", "r");
  $first = true;
  while (($row = fgetcsv($file)) !== false) {
    if ($first) { $first = false; continue; } // skip header
    list($id, $nama, $ucapan, $konfirmasi, $tanggal) = $row;
    echo "<div class='mb-3 border-bottom pb-2'>";
    echo "<strong>" . htmlspecialchars($nama) . "</strong> <small>($konfirmasi - $tanggal)</small><br/>";
    echo "<p>" . nl2br(htmlspecialchars($ucapan)) . "</p>";
    echo "</div>";
  }
  fclose($file);
} else {
  echo "<p>Belum ada ucapan masuk.</p>";
}
?>