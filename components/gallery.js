function generateGallery(container) {
  let gallerySection = document.createElement("section");
  container.append(gallerySection);

  let h2 = document.createElement("h2");
  h2.innerText = "Gallery";
  h2.className = "subtitle";
  gallerySection.append(h2);

  let galleryContainer = document.createElement("div");
  galleryContainer.id = "gallery-container";
  gallerySection.append(galleryContainer);

  for (let i = 1; i < 9; i++) {
    let img = document.createElement("img");
    img.src = `../assets/images/img_${i}.png`;
    img.className = "carousel-img";
    img.style.order = i;
    galleryContainer.append(img);
  }

  setInterval(() => {
    let imgs = document.getElementsByClassName("carousel-img");
    for (let i = 0; i < imgs.length; i++) {
      let currentOrder = Number(getComputedStyle(imgs[i]).order);
      if (currentOrder + 1 > 8) {
        currentOrder = 1;
      }
      imgs[i].style.order = currentOrder + 1;
    }
  }, 2500);
}

export default generateGallery;
