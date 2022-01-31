const imgUrl =
  "https://user-images.githubusercontent.com/42519030/151848381-fa007a4b-823a-491a-90b1-7c675f77f19c.jpg";

const img = document.createElement("img");
img.src = imgUrl;

const content = document.querySelector(".content");
content.appendChild(img);
