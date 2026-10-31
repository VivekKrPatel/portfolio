const nav = document.getElementById("site-nav");
const toggle = document.querySelector(".menu-toggle");
const links = [...document.querySelectorAll("#site-nav a")];
const sections = links
  .map((link) => document.querySelector(link.getAttribute("href")))
  .filter(Boolean);

if (toggle && nav) {
  toggle.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(open));
  });

  links.forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}

const setActive = () => {
  const fromTop = window.scrollY + 120;
  let current = sections[0];
  for (const section of sections) {
    if (section.offsetTop <= fromTop) current = section;
  }
  links.forEach((link) => {
    const match = link.getAttribute("href") === `#${current.id}`;
    link.classList.toggle("active", match);
  });
};

window.addEventListener("scroll", setActive, { passive: true });
setActive();
