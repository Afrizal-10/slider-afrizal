const slider = document.querySelector(".slider");
const list = document.querySelector(".list");
const thumbnaill = document.querySelector(".thumbnaill");
const next = document.querySelector("#next");
const prev = document.querySelector("#prev");

// autoplay

let runAutoPlay = setTimeout(() => {
  next.click();
}, 5000);

next.addEventListener("click", () => {
  initSlider("next");
});

prev.addEventListener("click", () => {
  initSlider("prev");
});

const initSlider = (type) => {
  const sliderItems = list.querySelectorAll(".item");
  const thumbnaillItems = thumbnaill.querySelectorAll(".item");

  if (type === "next") {
    list.appendChild(sliderItems[0]);
    thumbnaill.appendChild(thumbnaillItems[0]);
    slider.classList.add("next");
  } else {
    const lastItemsPosition = sliderItems.length - 1;
    list.prepend(sliderItems[lastItemsPosition]);
    thumbnaill.prepend(thumbnaillItems[lastItemsPosition]);
    slider.classList.add("prev");
  }

  setTimeout(() => {
    slider.classList.remove("next");
    slider.classList.remove("prev");
  }, 2000);

  clearTimeout(runAutoPlay);
  runAutoPlay = setTimeout(() => {
    next.click();
  }, 5000);
};
