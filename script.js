import generateHeader from "./components/header.js";
import generateMainContent from "./components/main.js";
import generateGallery from "./components/gallery.js";
import generateContactUs from "./components/contact.js";
import generateFooter from "./components/footer.js";
import generateCookiesBanner from "./components/cookies.js";

const body = document.getElementsByTagName("body")?.[0];

let container = document.createElement("main");
container.id = "container";
body.prepend(container);

generateHeader(container);

generateMainContent(container);

generateGallery(container);

generateContactUs(container);

generateFooter(container);

if (!localStorage.getItem("cookies-accepted-ap")) {
  generateCookiesBanner(container);
}
