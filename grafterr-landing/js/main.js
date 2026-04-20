import { fetchData } from "./api.js";

const heroSection = document.getElementById("hero");
const featuresSection = document.getElementById("features");

fetchData().then(data => {
  renderHero(data.hero);
  renderFeatures(data.features);
});

/* HERO */
function renderHero(hero) {
  heroSection.innerHTML = `
    <h1>
      ${hero.headlinePrefix} <br>
      <span class="gradient-text">${hero.headlineGradient}</span>
    </h1>

    <p>${hero.subheadline}</p>

    <button class="btn">${hero.cta}</button>
  `;
}

/* FEATURES */
function renderFeatures(features) {
  featuresSection.innerHTML = `
    <h2>
      ${features.title} <br>
      <span class="gradient-text">${features.highlight}</span>
    </h2>

    
    <p class="desc">${features.description}</p>

    <div class="divider"></div>

    <div class="cards">
      ${features.items.map(item => `
        <div class="card">
          <h3>${item.title}</h3>
          <img src="${item.image}" />
        </div>
      `).join("")}
    </div>

    <div class="arrows">
      <button id="prev">←</button>
      <button id="next">→</button>
    </div>
  `;

  // slider
  const cards = featuresSection.querySelector(".cards");

  document.getElementById("next").onclick = () => {
    cards.scrollBy({ left: 320, behavior: "smooth" });
  };

  document.getElementById("prev").onclick = () => {
    cards.scrollBy({ left: -320, behavior: "smooth" });
  };
}