
export const api = {
  getHeroContent: () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        fetch('../data/content.json')
          .then(res => res.json())
          .then(data => resolve(data.hero));
      }, 1200); // delay important
    });
  }
};