<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = strip_tags($_POST["name"]);
  $message = strip_tags($_POST["message"]);

  $file = fopen("wishes.csv", "a");
  fputcsv($file, [$name, $message]);
  fclose($file);

  header("Location: index.php"); // Ganti ke nama file utama kamu
  exit();
}
?>
