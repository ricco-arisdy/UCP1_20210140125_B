document.addEventListener("DOMContentLoaded", function () {
  // Mengambil referensi elemen dengan id "greeting" dan "date-time"
  const greeting = document.getElementById("greeting");
  const dateTime = document.getElementById("date-time");

  // Mendapatkan waktu terkini
  const currentTime = new Date();
  const currentHour = currentTime.getHours();

  // Menentukan salam yang sesuai berdasarkan waktu terkini
  let greetingText = "";
  if (currentHour < 12) {
    greetingText = "Good morning!";
  } else if (currentHour < 18) {
    greetingText = "Good afternoon!";
  } else {
    greetingText = "Good evening!";
  }

   // Mengganti teks salam yang sesuai
  greeting.textContent = greetingText;

  // Mengambil tanggal dan waktu terkini dalam bentuk string
  const currentDate = currentTime.toLocaleDateString();
  const currentTimeString = currentTime.toLocaleTimeString();

   //tanggal dan waktu menjadi satu string 
  dateTime.textContent = `${currentDate} ${currentTimeString}`;
});
