function getSapaan() {
  const jam = new Date().getHours();
  if (jam >= 5 && jam < 12)  return "Selamat Pagi";
  if (jam >= 12 && jam < 15) return "Selamat Siang";
  if (jam >= 15 && jam < 19) return "Selamat Sore";
  return "Selamat Malam";
}

document.getElementById("sapaan").textContent = `Halo, ${getSapaan()}!`;

setInterval(() => {
  document.getElementById("sapaan").textContent = `Halo Pengguna, ${getSapaan()}!`;
}, 1000);