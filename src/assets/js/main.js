document.addEventListener("DOMContentLoaded", function () {
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
});
