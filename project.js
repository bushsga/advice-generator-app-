window.addEventListener("DOMcontentLoaded", FetchData);

const ad_title = document.querySelector("#ad-id");
const ad_body = document.querySelector("#ad-body");
const dice = document.querySelector("#dice");

async function FetchData() {
  const response = await fetch("https://api.adviceslip.com/advice");
  const json = await response.json();

  ad_title.innerHTML = `Advice #${json.slip.id}`;
  ad_body.innerHTML = `"${json.slip.advice}"`;
}

dice.addEventListener("click", FetchData);
