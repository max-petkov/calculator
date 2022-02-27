function testimonialSlider() {
  const testimonialSlider = new Splide("#testimonial", {
    perPage: 3,
    perMove: 1,
    gap: "24px",
    pagination: false,
    breakpoints: {
      1024: {
        perPage: 2,
      },
      768: {
        perPage: 1,
        gap: "16px",
      },
    },
  });

  testimonialSlider.mount();
}

function ourServicesSlider() {
  const splide = new Splide("#our-services", {
    perPage: 1,
    focus: "center",
    gap: "24px",
    lazyLoad: "nearby",
    arrows: false,
    pagination: false,
  });

  splide.mount();
}

document.addEventListener("DOMContentLoaded", function () {
  testimonialSlider();
  ourServicesSlider();
});
