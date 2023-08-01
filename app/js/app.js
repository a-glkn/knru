import Swiper from 'swiper/bundle';
import { Fancybox } from "@fancyapps/ui";
import Inputmask from "inputmask/dist/inputmask.es6.js";
import NiceSelect from 'nice-select2/dist/js/nice-select2.js';


document.addEventListener('DOMContentLoaded', () => {

    /* Custom Select */
    let selects = document.querySelectorAll('.select');

    if(selects) {
        selects.forEach(el => {
            let placeholder = el.getAttribute('data-placeholder');
    
            NiceSelect.bind(el, {
                searchable: false,
                placeholder: placeholder ? placeholder : null
            });
        });
    }
    

    /* Phone Mask */
    let selector = document.querySelectorAll(".form__input_tel");
    let im = new Inputmask("+7 (999) 999 99 99");
    im.mask(selector);

    /* Category Slider */
    let catsSlider = document.querySelector('.cats-slider-inner');
    if(catsSlider) {
        new Swiper(catsSlider, {
            spaceBetween: 20,
            loop: true,
            slidesPerView: 1,
            navigation: {
                nextEl: ".cats-slider .swiper-button-next",
                prevEl: ".cats-slider .swiper-button-prev",
            },
            pagination: {
                el: ".cats-slider .swiper-pagination",
            },
            breakpoints: {
                768: {
                    slidesPerView: 2
                },
                992: {
                    slidesPerView: 3
                },
                1200: {
                    slidesPerView: 4
                },
            }
        });
    }

    let certSlider = document.querySelector('.cert-slider');
    if(certSlider) {
        new Swiper(".cert-slider", {
            slidesPerView: 1,
            spaceBetween: 20,
            navigation: {
                nextEl: ".cert-slider .swiper-button-next",
                prevEl: ".cert-slider .swiper-button-prev",
            },
            breakpoints: {
                480: {
                    slidesPerView: 1
                },
                768: {
                    slidesPerView: 2
                },
                992: {
                    slidesPerView: 3
                },
                1200: {
                    slidesPerView: 4
                },
            },
        });
    }

    /* Offer Slider */
    let offerSlider = document.querySelector('.offer-slider-inner');
    if(offerSlider) {
        let navi = document.querySelector('.offer-slider .swiper-pagination_offer');

        new Swiper(offerSlider, {
            spaceBetween: 20,
            loop: true,
            slidesPerView: 1,
            navigation: {
                nextEl: ".offer-slider .swiper-button-next_offer",
                prevEl: ".offer-slider .swiper-button-prev_offer",
            },
            pagination: {
                el: navi
            },
            breakpoints: {
                480: {
                    slidesPerView: 1
                },
                768: {
                    slidesPerView: 2
                },
                992: {
                    slidesPerView: 3
                },
            },
            on: {
                afterInit: function () {
                    console.log('afterInit offer-slider');

                    let miniSliders = document.querySelectorAll('.inside-mini-slider .mini-slider');


                    if(miniSliders.length) {

                        const imgH = miniSliders[0].querySelector('img').offsetHeight;

                        offerSlider.querySelectorAll('.card__img').forEach((card) => {
                            console.log(card);
                            card.style.height = imgH + 'px';
                        })
                        
                        miniSliders.forEach((slider) => {

                            let miniSlider = slider.querySelector('.inside-mini-slider .mini-slider-inner');
                            let prev = slider.querySelector('.swiper-button-prev');
                            let next = slider.querySelector('.swiper-button-next');
                            let navi = slider.querySelector('.swiper-pagination');

                            new Swiper(miniSlider, {
                                spaceBetween: 0,
                                loop: true,
                                slidesPerView: 1,
                                navigation: {
                                    nextEl: next,
                                    prevEl: prev,
                                },
                                pagination: {
                                    el: navi
                                },
                            });
                        });
                    }
                }
            }
        });
    }

    

    /* Feedback Slider */
    let feedbackSlider = document.querySelector('.feedback-slider-inner');
    if(feedbackSlider) {
        let navi = document.querySelector('.feedback-slider .swiper-pagination');

        new Swiper(feedbackSlider, {
            spaceBetween: 0,
            loop: true,
            autoHeight: true,
            slidesPerView: 1,
            navigation: {
                nextEl: ".feedback-slider .swiper-button-next",
                prevEl: ".feedback-slider .swiper-button-prev",
            },
            pagination: {
                el: navi
            },
        });
    }

    /* Expert Slider */
    let expertSlider = document.querySelector('.expert-slider-inner');
    if(expertSlider) {
        new Swiper(expertSlider, {
            spaceBetween: 0,
            loop: true,
            slidesPerView: 1,
            autoHeight: true,
            navigation: {
                nextEl: ".expert-slider .swiper-button-next",
                prevEl: ".expert-slider .swiper-button-prev",
            },
            pagination: {
                el: ".expert-slider .swiper-pagination",
            },
        });
    }
    
    /* Slider inside card */
    let miniSliders = document.querySelectorAll('.outside-mini-slider .mini-slider');
    if(miniSliders) {
        miniSliders.forEach((slider) => {
            
            let miniSlider = slider.querySelector('.outside-mini-slider .mini-slider-inner');
            let prev = slider.querySelector('.swiper-button-prev');
            let next = slider.querySelector('.swiper-button-next');
            let navi = slider.querySelector('.swiper-pagination');

            new Swiper(miniSlider, {
                spaceBetween: 0,
                loop: true,
                slidesPerView: 1,
                navigation: {
                    nextEl: next,
                    prevEl: prev,
                },
                pagination: {
                    el: navi
                },
            });
        });
    }


    /* Expert Slider */
    let d3Slider = document.querySelector('.d3-slider-inner');
    if(d3Slider) {
        new Swiper(d3Slider, {
            spaceBetween: 0,
            loop: true,
            slidesPerView: 1,
            effect: 'fade',
            navigation: {
                nextEl: ".d3-slider .swiper-button-next",
                prevEl: ".d3-slider .swiper-button-prev",
            },
            pagination: {
                el: ".d3-slider .swiper-pagination",
            },
        });
    }
    
    /* Tabs */
    let tabs = document.querySelectorAll('.tabs');
    if(tabs) {
        tabs.forEach((tab) => {
            let headers = tab.querySelector('.tabs-headers');
            let contents = tab.querySelector('.tabs-content');

            headers.querySelectorAll('.tabs-headers__item').forEach((headerItem, index) => {
                headerItem.addEventListener("click",function(e){
                    headers.querySelectorAll('.tabs-headers__item').forEach(el => el.classList.remove('active'));
                    headerItem.classList.add('active');

                    contents.querySelectorAll('.tabs-content__item').forEach(el => el.classList.remove('active'));
                    contents.querySelectorAll('.tabs-content__item')[index].classList.add('active');
                }, false);
            });
        });
    }

    /* Menu Toggler */
    let toggler = document.querySelector(".menu-toggler");
    if(toggler) {
        toggler.addEventListener("click",function(e){
            document.body.classList.toggle('menu-openned');
        }, false);
    }

    /* Filter Toggler */
    let filterShowMoreBtn = document.querySelector(".filter .more_icon");
    let filterHideBtn = document.querySelector(".filter .hide_icon");
    let filter = document.querySelector(".filter");
    if(filterShowMoreBtn && filterHideBtn && filter) {
        filterShowMoreBtn.addEventListener("click",function(e){
            filter.classList.add('openned');
        }, false);

        filterHideBtn.addEventListener("click",function(e){
            filter.classList.remove('openned');
        }, false);
    }


    /* Tags Menu */
    let tagShowMoreBtn = document.querySelector(".tag_more");
    let tagCloseBtn = document.querySelector(".menu-tags__close");
    if(tagShowMoreBtn && tagCloseBtn) {
        tagShowMoreBtn.addEventListener("click",function(e){
            e.preventDefault();
            document.body.classList.add('menu-tags-openned');
            return false;

        }, false);

        tagCloseBtn.addEventListener("click",function(e){
            document.body.classList.remove('menu-tags-openned');
        }, false);
    }

    /* Vacancy Toggler */
    let vacs = document.querySelectorAll(".vacancy");
    if(vacs) {
        vacs.forEach(el => {
    
            el.querySelector('.vacancy__toggle').addEventListener("click",function(e) {
                el.classList.toggle('vacancy_open');

                if (this.innerHTML === "Подробнее") {
                    this.innerHTML = "Скрыть";
                } else {
                    this.innerHTML = "Подробнее";
                }

            }, false);
        });
    }


    window.addEventListener('scroll', function() {
        var docWidth = document.body.scrollWidth;

        if(docWidth > 991) {
            if(window.scrollY > 50) {
                document.body.classList.add('header-fixed');
            } else {
                document.body.classList.remove('header-fixed');
            }
        } else {
            document.body.classList.remove('header-fixed');
        }
        
    });
    
});
