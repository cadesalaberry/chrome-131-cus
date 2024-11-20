document.addEventListener("DOMContentLoaded", (event) => {
  const message = document.createElement("div");
  message.textContent = "main module has been loaded";
  message.style.color = "green";
  document.body.appendChild(message);
});

document
  .getElementById("loadScriptButton")
  .addEventListener("click", function () {
    var script = document.createElement("link");
    script.rel = "modulepreload";
    script.href = "script.js";
    document.body.appendChild(script);
  });

document.getElementById("cus").addEventListener("click", function () {
  window.open("padoa.devices://", "_parent");
});
