import Swiper from 'swiper/bundle';
import { Fancybox } from "@fancyapps/ui";
import Inputmask from "inputmask/dist/inputmask.es6.js";
import NiceSelect from 'nice-select2/dist/js/nice-select2.js';


document.addEventListener('DOMContentLoaded', () => {

    /* Gallery Slider */
    let gallerySlider = document.querySelector('.mySwiper');
    if(gallerySlider) {
        var swiper = new Swiper(".col-slider .mySwiper", {
            spaceBetween: 10,
            slidesPerView: 4,
            freeMode: true,
            a11y: false,
            shortSwipes: true,
            watchSlidesProgress: false,
            breakpoints: {
                480: {
                    a11y: false,
                    shortSwipes: false,
                    spaceBetween: 20,
                    slidesPerView: 5
                },
            },
        });
        
        var swiper2 = new Swiper(".col-slider .mySwiper2", {
            slidesPerView: 1,
            a11y: false,
            thumbs: {
              swiper: swiper,
            },
        });
    }

    
    /* Feedback Stars */
    let formFeedback = document.querySelector('.form_feedback');
    if(formFeedback) {
        formFeedback.querySelectorAll('.feedback-stars svg').forEach((el, index) => {

            el.addEventListener("click", function(e) {
    
                formFeedback.querySelectorAll('.feedback-stars svg').forEach(svg => {
                    svg.classList.remove('active');
                });
    
                formFeedback.querySelectorAll('.feedback-stars svg').forEach((svg, i) => {
                    if(i <= index) svg.classList.add('active');
                });

                formFeedback.querySelector('.feedback-rating').value = index + 1;
    
            });
            
        });
    }


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
            a11y: false,
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


    /* Partners Slider */
    let partnerSlider = document.querySelector('.partners-slider-inner');
    if(partnerSlider) {
        new Swiper(partnerSlider, {
            spaceBetween: 20,
            loop: true,
            slidesPerView: 2,
            a11y: false,
            navigation: {
                nextEl: ".partners-slider .swiper-button-next",
                prevEl: ".partners-slider .swiper-button-prev",
            },
            pagination: {
                el: ".partners-slider .swiper-pagination",
            },
            breakpoints: {
                768: {
                    slidesPerView: 3
                },
                992: {
                    slidesPerView: 4
                },
                1200: {
                    slidesPerView: 5
                },
            }
        });
    }


    /* Cert Slider */
    let certSlider = document.querySelector('.cert-slider');
    if(certSlider) {
        new Swiper(".cert-slider", {
            slidesPerView: 1,
            spaceBetween: 20,
            a11y: false,
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
    let offerSlider = document.querySelector('.offer-slider');
    if(offerSlider) {
        let navi = document.querySelector('.offer-slider .swiper-pagination_offer');

        new Swiper(offerSlider.querySelector('.offer-slider-inner'), {
            spaceBetween: 20,
            loop: true,
            a11y: false,
            shortSwipes: true,
            slidesPerView: 1,
            navigation: {
                nextEl: offerSlider.querySelector('.swiper-button-next_offer'),
                prevEl: offerSlider.querySelector('.swiper-button-prev_offer')
            },
            pagination: {
                el: navi
            },
            breakpoints: {
                480: {
                    slidesPerView: 1,
                    shortSwipes: true
                },
                768: {
                    slidesPerView: 2,
                    shortSwipes: true
                },
                992: {
                    slidesPerView: 3,
                    shortSwipes: true
                },
            },
            on: {
                afterInit: function () {
                    let miniSliders = document.querySelectorAll('.inside-mini-slider .mini-slider');
                    if(miniSliders.length) {

                        // const imgH = miniSliders[0].querySelector('img').offsetHeight;

                        // offerSlider.querySelectorAll('.card__img').forEach((card) => {
                        //     card.style.height = imgH + 'px';
                        // })
                        
                        miniSliders.forEach((slider) => {

                            let miniSlider = slider.querySelector('.inside-mini-slider .mini-slider-inner');
                            let prev = slider.querySelector('.swiper-button-prev');
                            let next = slider.querySelector('.swiper-button-next');
                            let navi = slider.querySelector('.swiper-pagination');

                            new Swiper(miniSlider, {
                                spaceBetween: 0,
                                loop: true,
                                a11y: false,
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
            a11y: false,
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
            a11y: false,
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
                a11y: false,
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
            a11y: false,
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


    /* Header fixing on scroll */
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

    
    /* Scroll to Map */
    function scrollToElement(element, duration, offset=0) {
        var start = window.scrollY || window.pageYOffset;
        var end = element.getBoundingClientRect().top + start - offset;
        var currentTime = 0;
    
        function linearInterpolation(t, b, c, d) {
            return c * t / d + b;
        }
    
        function scroll() {
            currentTime += 16;
            var progress = linearInterpolation(currentTime, start, end - start, duration);
            window.scrollTo(0, progress);
            if (currentTime < duration) {
                requestAnimationFrame(scroll);
            }
        }
    
        requestAnimationFrame(scroll);
    }
    const btnMap = document.querySelector(".single_catalog .btn_map");
    if(btnMap) {
        btnMap.addEventListener("click", function(e) {
            scrollToElement(document.querySelector(".single_catalog #location-block"), 600, 130); 
        });
    }


    /* File Input */
    let container = document.querySelector(".file-container");

    if(container) {
        let uploadButton = document.getElementById("upload-button");
        let error = document.getElementById("file-error");
        let imageDisplay = document.getElementById("image-display");

        const fileHandler = (file, name, type) => {
            if (type.split("/")[0] !== "image") {
                error.innerText = "Пожулуйста выбирайте только изображения";
                return false;
            }
            error.innerText = "";
            let reader = new FileReader();
            reader.readAsDataURL(file);
            container.classList.remove('has-file');
            reader.onloadend = () => {
                let imageContainer = document.createElement("figure");
                let img = document.createElement("img");
                img.src = reader.result;
                imageContainer.appendChild(img);
                imageContainer.innerHTML += `<figcaption>${name}</figcaption>`;
                imageDisplay.appendChild(imageContainer);
            };
            container.classList.add('has-file');
        };

        //Upload Button
        uploadButton.addEventListener("change", () => {
            imageDisplay.innerHTML = "";
            container.classList.remove('has-file');
            Array.from(uploadButton.files).forEach((file) => {
                fileHandler(file, file.name, file.type);
            });
        });

        container.addEventListener(
            "dragenter",
            (e) => {
                e.preventDefault();
                e.stopPropagation();
                container.classList.add("active");
            },
            false
        );

        container.addEventListener(
            "dragleave",
            (e) => {
                e.preventDefault();
                e.stopPropagation();
                container.classList.remove("active");
            },
            false
        );

        container.addEventListener(
            "dragover",
            (e) => {
                e.preventDefault();
                e.stopPropagation();
                container.classList.add("active");
            },
            false
        );

        container.addEventListener(
            "drop",
            (e) => {
                e.preventDefault();
                e.stopPropagation();
                container.classList.remove("active");
                let draggedData = e.dataTransfer;
                let files = draggedData.files;
                imageDisplay.innerHTML = "";
                Array.from(files).forEach((file) => {
                    fileHandler(file, file.name, file.type);
                });
            },
            false
        );

        window.onload = () => {
            error.innerText = "";
        };
    }
});
