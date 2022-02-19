const pricetoggle = document.querySelector(".price-toggle");
const priceSlider = document.querySelector(".price-slider");
const annualprice = document.querySelectorAll(".annual-price");
const monthlyprice = document.querySelectorAll(".monthly-price");

pricetoggle.addEventListener("click", function (e) {
  e.preventDefault();
  priceSlider.classList.toggle("active");
  if (priceSlider.classList.contains("active")) {
    annualprice.forEach((annual) => {
      annual.style.display = "flex";
    });
    monthlyprice.forEach((month) => {
      month.style.display = "none";
    });
  } else {
    annualprice.forEach((annual) => {
      annual.style.display = "none";
    });
    monthlyprice.forEach((month) => {
      month.style.display = "flex";
    });
  }
});
