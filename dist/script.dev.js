"use strict";

var qrData = document.getElementById("qr-data");
var qrCode = new QRCode(document.getElementById("qr-code"));

function generateQR() {
  var data = qrData.value;
  qrCode.makeCode(data);
  console.log(data, qrCode);
}