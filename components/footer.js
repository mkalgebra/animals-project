import footerData from "../data/footerData.js";

function generateFooter(container) {
  let footer = document.createElement("footer");
  footer.id = "footer";
  container.append(footer);

  let hyperContainer = document.createElement("section");
  hyperContainer.id = "hyper-container";
  footer.append(hyperContainer);

  footerData.hyper.forEach((hyper) => {
    let footerContent = document.createElement("article");

    let title = document.createElement("p");
    title.innerText = hyper.title;
    title.className = "hyper-container__title";
    footerContent.append(title);

    hyper.links.forEach((link) => {
      let linkText = document.createElement("a");
      linkText.innerText = link;
      linkText.className = "hyper-container__link";
      footerContent.append(linkText);
    });

    hyperContainer.append(footerContent);
  });

  let caption = document.createElement("p");
  caption.innerText = footerData.caption;
  caption.className = "hyper-container__caption";
  footer.append(caption);
}

export default generateFooter;
