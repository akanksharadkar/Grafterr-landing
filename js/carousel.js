export function initCarousel() {
  const cardsContainer = document.querySelector('.cards');
  const prev = document.getElementById('prev');
  const next = document.getElementById('next');

  let scrollAmount = 0;

  next.addEventListener('click', () => {
    scrollAmount += 300;
    cardsContainer.scrollTo({
      left: scrollAmount,
      behavior: 'smooth'
    });
  });

  prev.addEventListener('click', () => {
    scrollAmount -= 300;
    cardsContainer.scrollTo({
      left: scrollAmount,
      behavior: 'smooth'
    });
  });
}