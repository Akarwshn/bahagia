
const supabase = supabase.createClient(
  "https://temlsgkkbdphwcyqrosm.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRlbWxzZ2trYmRwaHdjeXFyb3NtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY2Mjg4MzYsImV4cCI6MjA2MjIwNDgzNn0.5I0s9ZrZfc0QXWgfY1JEUsVgNDoBMYEnDwHDDL5lKUo"
);

async function loadWishes() {
  const { data, error } = await supabase
    .from("wishes")
    .select("*")
    .order("created_at", { ascending: false });

  const listContainer = document.getElementById("wish-list");
  listContainer.innerHTML = "";

  if (error) {
    listContainer.innerHTML = `<p class="text-danger">Gagal memuat ucapan</p>`;
    return;
  }

  data.forEach((wish) => {
    const item = document.createElement("div");
    item.className = "card bg-white mb-3 p-3 shadow-sm";
    item.innerHTML = `
      <strong>${wish.name}</strong> <em>(${wish.confirmation})</em>
      <p class="mb-1">${wish.message}</p>
      <small class="text-muted">${new Date(wish.created_at).toLocaleString("id-ID")}</small>
    `;
    listContainer.appendChild(item);
  });
}

document.getElementById("wish-form").addEventListener("submit", async function (e) {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const message = document.getElementById("message").value;
  const confirmation = document.getElementById("confirmation").value;

  const { error } = await supabase.from("wishes").insert([{ name, message, confirmation }]);
  if (error) {
    alert("Gagal mengirim ucapan: " + error.message);
  } else {
    alert("Ucapan berhasil dikirim! 🥰");
    this.reset();
    loadWishes();
  }
});

window.addEventListener("DOMContentLoaded", loadWishes);

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
const countDownDate = new Date("Jul 05, 2025 09:00:00").getTime();
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

