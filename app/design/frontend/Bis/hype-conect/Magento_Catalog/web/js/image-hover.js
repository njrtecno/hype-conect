
 require([
   'jquery'
  ],
  function ($) {
   //Selector to select the products li items
   var productItem = $('.product-item-info');
   //Function to replace the picture of the product when the product item is hovered with mouse
   productItem.hover(function (event) {
     //Hover on product li Item
     var productImage = $(event.target).parents('.product-item-info').find('.photo.image'),
      productImageHover = $(event.target).parents('.product-item-info').find('.photo-image-hover');
     productImage.removeClass('photo-currently-hovered');
     productImage.addClass('photo-currently-not-hovered');
     productImageHover.removeClass('photo-currently-not-hovered');
     productImageHover.addClass('photo-currently-hovered');
    },
    //Hover out
    function (event) {
     var productImage,
      productImageHover,
     myTarget = $(event.target);
 
     if ($(event.target).hasClass('product-item-info')) {
      productImage = myTarget.find('.photo.image');
      productImageHover = myTarget.find('.photo-image-hover');
     } else {
      productImage = myTarget.parents('.product-item-info').find('.photo.image');
      productImageHover = myTarget.parents('.product-item-info').find('.photo-image-hover');
     }
     productImageHover.removeClass('photo-currently-hovered');
     productImageHover.addClass('photo-currently-not-hovered');
     productImage.removeClass('photo-currently-not-hovered');
     productImage.addClass('photo-currently-hovered');
    });
 });