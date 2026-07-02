function getSapaan() {
  const jam = new Date().getHours();
  if (jam >= 5 && jam < 12)  return "Selamat Pagi";
  if (jam >= 12 && jam < 15) return "Selamat Siang";
  if (jam >= 15 && jam < 19) return "Selamat Sore";
  return "Selamat Malam";
}

function updateSapaan() {
  document.getElementById("sapaan").textContent = `Halo Pengguna, ${getSapaan()}!`;
}

document.addEventListener("DOMContentLoaded", () => {
  updateSapaan();
  setInterval(updateSapaan, 60 * 1000);
});