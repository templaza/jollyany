jQuery(function($){
    var updateHikashopCart = function () {
        if ($(".jollyany-hikacart").length){
            $('.jollyany-hikacart-icon > i').html('<span class="cart-count">'+$('#jollyany-hikacart-content .hikashop_cart_module tbody tr').length+'</span>');
        }
    };
    var removeHikashopItem = function () {
        if ($('.hikashop_cart_module_product_delete_value').length) {
            $('.hikashop_cart_module_product_delete_value > a').on('click', function (e) {
                setTimeout(
                    function() {
                        updateHikashopCart();
                        removeHikashopItem();
                    }, 3000);
            });
        }
        if ($('.hikashop_cart_product_quantity_delete').length) {
            $('.hikashop_cart_product_quantity_delete > a').on('click', function (e) {
                setTimeout(
                    function() {
                        updateHikashopCart();
                        removeHikashopItem();
                    }, 3000);
            });
        }
    };
    $(document).ready(function(){
        if ($('#astroid-preloader').length && $('#jollyany-preloader-logo-template').length && !$('#astroid-preloader .jollyany-preloader-logo').length) {
            $('#astroid-preloader').prepend($('#jollyany-preloader-logo-template').html());
        }
        if ($(".jollyany-hikacart").length){
            $(".jollyany-hikacart-icon").on("click", function(e){
                e.preventDefault();
            });
            updateHikashopCart();
            removeHikashopItem();
            if ($('.hikacart').length) {
                $('.hikacart').on('click', function (e) {
                    setTimeout(
                        function() {
                            updateHikashopCart();
                            removeHikashopItem();
                        }, 3000);
                });
            }
        }
        if ($(".jollyany-login").length){
            $(".jollyany-login-icon").on("click", function(e){
                e.preventDefault();
            });
        }
        if ($('#astroid-header').length && $('#astroid-header').hasClass('has-sidebar') && $('#jollyany-sidebar-collapsed-logo-template').length && !$('#astroid-header .astroid-sidebar-collapsed-logo').length) {
            $('#astroid-header').find('.astroid-sidebar-collapsable').after($('#jollyany-sidebar-collapsed-logo-template').html());
        }
    });
});