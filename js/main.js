// owl carousel start
$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: true,
    nav: true,
    margin: 15,
    autoplay: true,
    autoplayhoverpause: true,
    autoplaytimeout: 500,
    responsive: {
      0: {
        items: 1,
        dots: false,
      },
      600: {
        items: 2,
        dots: false,
      },
      1000: {
        items: 3,
        dots: false,
      },
    },
  });
});
// owl carousel end

// copy start
const rek1 = document.getElementById("rek1");
const salin1 = document.getElementById("salin1");

salin1.onclick = () => {
  rek1.select(); // Selects the text inside the input
  document.execCommand("copy"); // Simply copies the selected text to clipboard
  Swal.fire({
    icon: "success",
    title: "No. Rekening Berhasil di Salin",
    showConfirmButton: false,
    timer: 1000,
  });
};
// copy end

// waktu start
const countDownDate = new Date("Jul 05, 2025 00:00:00").getTime();
const x = setInterval(function () {
  const now = new Date().getTime();
  const distance = countDownDate - now;
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  document.getElementById("hari").innerHTML = days;
  document.getElementById("jam").innerHTML = hours;
  document.getElementById("menit").innerHTML = minutes;
  document.getElementById("detik").innerHTML = seconds;
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("Carasingkat").innerHTML = "EXPIRED";
  }
}, 1000);
// waktu end

// modal start
window.onload = function () {
  document.getElementById("klikmodal").click();
};
// modal end
            <!-- Supabase JS Client -->
<script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js"></script>
            <h4 class="mt-4">Ucapan & Doa</h4>
<div id="wish-list"></div>
<script>
  async function loadWishes() {
    const { data, error } = await supabase
      .from('wishes')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Gagal memuat ucapan:', error.message);
      return;
    }

    const listContainer = document.getElementById('wish-list');
    listContainer.innerHTML = ''; // Kosongkan dulu

    data.forEach(wish => {
      const item = document.createElement('div');
      item.classList.add('card', 'mb-2', 'p-3');

      item.innerHTML = `
        <strong>${wish.name}</strong> - <em>${wish.confirmation}</em><br/>
        <p>${wish.message}</p>
        <small><i>${new Date(wish.created_at).toLocaleString('id-ID')}</i></small>
      `;

      listContainer.appendChild(item);
    });
  }
</script>

<!-- Kirim ke Supabase -->
<script>
  const supabaseUrl = 'https://temlsgkkbdphwcyqrosm.supabase.co'; // Ganti dengan URL Supabase kamu
  const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRlbWxzZ2trYmRwaHdjeXFyb3NtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY2Mjg4MzYsImV4cCI6MjA2MjIwNDgzNn0.5I0s9ZrZfc0QXWgfY1JEUsVgNDoBMYEnDwHDDL5lKUo'; // Ganti dengan anon key kamu
  const supabase = supabase.createClient(supabaseUrl, supabaseKey);

  document.getElementById('wish-form').addEventListener('submit', async function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const message = document.getElementById('message').value;
    const confirmation = document.getElementById('confirmation').value;

    const { data, error } = await supabase
      .from('wishes') // nama tabel kamu
      .insert([{ name, message, confirmation }]);

    if (error) {
      alert('Gagal mengirim ucapan: ' + error.message);
    } else {
      alert('Ucapan berhasil dikirim! Terima kasih 🥰');
      this.reset();
      loadWishes();
    }
  });
<script>
  async function loadWishes() {
    const { data, error } = await supabase
      .from('wishes')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Gagal memuat ucapan:', error.message);
      return;
    }

    const listContainer = document.getElementById('wish-list');
    listContainer.innerHTML = ''; // Kosongkan dulu

    data.forEach(wish => {
      const item = document.createElement('div');
      item.classList.add('card', 'mb-2', 'p-3');

      item.innerHTML = `
        <strong>${wish.name}</strong> - <em>${wish.confirmation}</em><br/>
        <p>${wish.message}</p>
        <small><i>${new Date(wish.created_at).toLocaleString('id-ID')}</i></small>
      `;

      listContainer.appendChild(item);
    });
  }

  // Panggil saat halaman dimuat
  loadWishes();
</script>

          
// lagu start
const lagu = document.getElementById("lagu");
function playAudio() {
  lagu.play();
}
function stopAudio() {
  lagu.pause();
}
// lagu end

// undngan start
function GetURLParameter(sParam) {
  var sPageURL = window.location.search.substring(1);
  var sURLVariables = sPageURL.split("&");
  for (var i = 0; i < sURLVariables.length; i++) {
    var sParameterName = sURLVariables[i].split("=");
    if (sParameterName[0] == sParam) {
      return sParameterName[1];
    }
  }
}
var to = GetURLParameter("to");
document.getElementById("nama").innerHTML = to ? decodeURI(to) : "-";

// hover blur effect
$('.blur').mouseenter(function(){
  $('.blur').css('filter','blur(5px)'); // Blurs each .blur div
  $(this).css('filter','blur(0px)');    // Removes blur from the currently hovered .blur div
})
$('.blur').mouseleave(function(){
  $('.blur').css('filter','blur(0px)'); // Removes blur from all when none are hovered
})

// undngan end

