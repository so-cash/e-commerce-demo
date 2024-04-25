console.log(
  "Resolving",
  window.location.href,
  window.location.pathname,
  document.currentScript.src,
);

const url = new URL(window.location.href);
const newUrl = new URL(".", document.currentScript.src);
console.log("new url", newUrl.href);
if (url.pathname !== "/")
  newUrl.searchParams.set("p", url.pathname.replace(newUrl.pathname, ""));
if (url.search) newUrl.searchParams.set("q", url.search);
if (url.hash) newUrl.searchParams.set("h", url.hash);
window.location.href = newUrl.href;
