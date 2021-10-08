$(function () {
  $(".banner-section__slider").slick({
    dots: true,
    prevArrow:
      '<button class="banner-section__slider-btn banner-section__slider-btnprev"><img src="images/slider-arrow-left.svg"></button>',
    nextArrow:
      '<button class="banner-section__slider-btn banner-section__slider-btnnext"><img src="images/slider-arrow-right.svg"></button>',
  });

  // Tabs
  $(".tab").on("click", function (e) {
    e.preventDefault();

    $($(this).siblings()).removeClass("tab--active");
    $($(this).parent().siblings().find(".tabs-content")).removeClass(
      "tabs-content--active"
    );

    $(this).addClass("tab--active");
    $($(this).attr("href")).addClass("tabs-content--active");
  });

  // Favorite
  $(".products-item__favorite").on("click", function () {
    $(this).toggleClass("products-item__favorite--active");
  });

  // products-slider
  $(".products-slider").slick({
    slidesToShow: 4,
    slidesToScroll: 2,
    prevArrow:
      '<button class="products-slider__slider-btn products-slider__slider-btnprev"><img src="images/products-arrow-left.svg"></button>',
    nextArrow:
      '<button class="products-slider__slider-btn products-slider__slider-btnnext"><img src="images/products-arrow-right.svg"></button>',
  });

  // catalog grid & line


  // form-styler
  $(".filter-style").styler();

  $(".filter__item-drop, .filter__extra").on("click", function () {
    $(this).toggleClass('filter__item-drop--active')
    $(this).next().slideToggle(200)
  });

  // price slider
  $(".js-range-slider").ionRangeSlider({
    type="double",
  });

  $('.catalog__filter-btngrid').on("click", function () {
    $(this).addClass('catalog__filter-button--active')
    $('.catalog__filter-btnline').removeClass('catalog__filter-button--active')
    $('.catalog__inner-content').removeClass('catalog__inner-content--list')
  });
  $('.catalog__filter-btnline').on("click", function () {
    $(this).addClass('catalog__filter-button--active')
    $('.catalog__filter-btngrid').removeClass('catalog__filter-button--active')
    $('.catalog__inner-content').addClass('catalog__inner-content--list')
    $(".products-item__wrapper").addClass('products-item__wrapper--line')
  });

  // rate
  $(".rate-yo").rateYo({
    starWidth: "24px",
    ratedFill: "#1c62cd",
    spacing: "7px",
    normalFill: "#C4C4C4"
  });
});
