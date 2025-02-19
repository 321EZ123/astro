"use strict";

/**
 * @type {HTMLFormElement}
 */
const form = document.getElementById("uv-form");

/**
 * @type {HTMLInputElement}
 */
const address = document.getElementById("uv-address");

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  try {
    await registerSW();
  } catch (err) {
    console.error("Service Worker Registration Failed:", err);
    throw err;
  }

  const url = search(address.value, "https://www.google.com/search?q=%s");

  sessionStorage.setItem("url", __uv$config.prefix + __uv$config.encodeUrl(url));
  location.href = "/go/";
});
