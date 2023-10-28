import mainContentJSON from "../data/mainData.js";

function generateMainContent(container) {
  let mainSection = document.createElement("section");
  container.append(mainSection);

  let mainTitle = document.createElement("h1");
  mainTitle.innerText = "Daily pet facts - Love!";
  mainTitle.id = "main-title";
  mainSection.append(mainTitle);

  let mainContent = document.createElement("div");
  mainContent.id = "main-content";
  mainSection.append(mainContent);

  for (let i = 0; i < 2; i++) {
    let contentItem = document.createElement("article");
    contentItem.className =
      i % 2 === 0 ? "content-item" : "content-item content-item--reverse";
    mainContent.append(contentItem);
  }

  const contentItems = document.getElementsByClassName("content-item");

  mainContentJSON.forEach((element, index) => {
    let img = document.createElement("img");
    img.className = "content-item__img";
    img.src = element.imgSrc;

    contentItems[index].append(img);

    let div = document.createElement("div");
    div.className = "content-item__container";

    contentItems[index].append(div);

    let h3 = document.createElement("h3");
    h3.innerText = element.title;
    h3.className = "content-item__containter__title";
    div.append(h3);

    element.paragraphs.forEach((item) => {
      let p = document.createElement("p");
      p.innerText = item;
      p.className = "content-item__containter__paragraph";
      div.append(p);
    });
  });
}

export default generateMainContent;
