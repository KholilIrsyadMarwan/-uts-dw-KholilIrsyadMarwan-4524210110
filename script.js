console.log("Berhasil Connect ke Kartu Kesehatan");

const inputNamaPasien = document.querySelector("#card-nama");
const inputNIK = document.querySelector("#card-nik");
const inputTTL = document.querySelector("#card-ttl");
const inputStatus = document.querySelector("#card-status");
const previewNama = document.querySelector("#preview-nama");
const previewNIK = document.querySelector("#preview-nik");
const previewTTL = document.querySelector("#preview-ttl");
const previewStatus = document.querySelector("#preview-status");

const DEFAULT_NAMA = "Nama Pasien";
const DEFAULT_TEXT = "-";

inputNamaPasien.addEventListener("input", function () {
  const teksInputan = inputNamaPasien.value;

  if (teksInputan.trim() === "") {
    previewNama.textContent = DEFAULT_NAMA;
  } else {
    previewNama.textContent = teksInputan;
  }
});

inputNIK.addEventListener("input", function () {
  const teksInputan = inputNIK.value;

  if (teksInputan.trim() === "") {
    previewNIK.textContent = DEFAULT_TEXT;
  } else {
    previewNIK.textContent = teksInputan;
  }
});

inputTTL.addEventListener("input", function () {
  const teksInputan = inputTTL.value;

  if (teksInputan.trim() === "") {
    previewTTL.textContent = DEFAULT_TEXT;
  } else {
    previewTTL.textContent = teksInputan;
  }
});

inputStatus.addEventListener("input", function () {
  const teksInputan = inputStatus.value;

  if (teksInputan.trim() === "") {
    previewStatus.textContent = DEFAULT_TEXT;
  } else {
    previewStatus.textContent = teksInputan;
  }
});

const formPasien = document.querySelector("#form-pasien");
formPasien.addEventListener("submit", function (e) {
  e.preventDefault();
  console.log(" Proses ");
});
