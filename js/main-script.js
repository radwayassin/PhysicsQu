$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        loop: true,
        nav: true,
        dots:false,
        navText: ["<i class='fas fa-arrow-left'></i>", "<i class='fas fa-arrow-right'></i>"],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            991:{
                items:2
            },
            1200: {
                items: 3
            }
        }
    });
});
// Matching ==========
Sortable.create(demo1, {
    animation: 100,
    group: 'list-1',
    draggable: '.list-group-item',
    handle: '.list-group-item',
    sort: true,
    filter: '.sortable-disabled',
    chosenClass: 'active'
});

Sortable.create(demo2, {
    group: 'list-1',
    handle: '.list-group-item'
});
// Animation =========
AOS.init();
// ===========================