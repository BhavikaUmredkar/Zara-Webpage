function showPage(pageId) {
  document.querySelectorAll("section").forEach(sec => sec.classList.remove("active"));
  document.getElementById(pageId).classList.add("active");
  window.scrollTo(0, 0);
}
