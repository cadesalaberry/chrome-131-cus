log("module from main.js loaded");

document
  .getElementById("loadScriptButton")
  .addEventListener("click", async function () {
    var script = document.createElement("script");
    script.src = "script.js";
    document.body.appendChild(script);
  });

document
  .getElementById("loadScriptAsLinkButton")
  .addEventListener("click", async function () {
    var script = document.createElement("link");
    script.rel = "modulepreload";
    script.type = "module";
    const hash = new Date().getTime();
    script.href = "script.js?h=" + hash;
    document.body.appendChild(script);
  });

document
  .getElementById("loadModuleWindowOpenButton")
  .addEventListener("click", async function () {
    const hash = new Date().getTime();
    await import("./script-with-window-open.js?h=" + hash);
  });

document.getElementById("cus").addEventListener("click", function () {
  window.open("padoa.devices://", "_parent");
});

const urlParams = new URLSearchParams(window.location.search);
if (urlParams.has("callWindowOpenOnLoad")) {
  try {
    // window.open("custom.scheme://", "_blank");
    window.open("custom.scheme://", "_parent");
    // window.open("custom.scheme://", "_self");
    // window.open("custom.scheme://", "_top");
    // window.location.href = 'custom.scheme://';
  } catch (e) {
    console.error(e);
  }
}
