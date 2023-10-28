import cookiesData from "../data/cookiesData.js";

function generateCookiesBanner(container) {
  let cookiesBanner = document.createElement("aside");
  cookiesBanner.id = "cookies-card";
  container.append(cookiesBanner);

  let cookiesText = document.createElement("span");
  cookiesText.innerText = cookiesData;
  cookiesBanner.append(cookiesText);

  let cookiesActions = document.createElement("div");
  cookiesActions.id = "cookies-card__action";

  let acceptCookiesBtn = document.createElement("button");
  acceptCookiesBtn.innerText = "Accept";
  acceptCookiesBtn.id = "cookies-card__action--success";
  cookiesActions.append(acceptCookiesBtn);

  acceptCookiesBtn.onclick = () => {
    localStorage.setItem("cookies-accepted-ap", true);
    cookiesBanner.style.display = "none";
  };

  let rejectCookiesBtn = document.createElement("button");
  rejectCookiesBtn.innerText = "Reject";
  rejectCookiesBtn.id = "cookies-card__action--fail";
  cookiesActions.append(rejectCookiesBtn);

  rejectCookiesBtn.onclick = () => {
    localStorage.setItem("cookies-accepted-ap", false);
    cookiesBanner.style.display = "none";
  };

  cookiesBanner.append(cookiesActions);
}

export default generateCookiesBanner;
