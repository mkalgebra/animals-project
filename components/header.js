function generateHeader(container) {
  let headerBanner = document.createElement("img");
  headerBanner.src = "../assets/images/headline_image.png";
  headerBanner.id = "header-img";
  container.append(headerBanner);
}

export default generateHeader;
