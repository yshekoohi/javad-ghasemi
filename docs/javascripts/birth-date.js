// docs/javascripts/birth-date.js

function renderBirthDate() {
  const el = document.getElementById("birth-date");
  if (!el) return; 
  const birthDate = new Date("1980-11-26T12:00:00");

  const today = new Date();

  let age = today.getFullYear() - birthDate.getFullYear();

  const birthText = `${birthDate.toLocaleDateString("fa-IR", {
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
})} (${age.toLocaleString("fa-IR")} سال)`;

  el.textContent = birthText;
}

document$.subscribe(renderBirthDate);
