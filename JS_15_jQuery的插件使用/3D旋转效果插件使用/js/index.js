$(function() {
    $(".btn").show();
    $(".btn  a:first").addClass("active");	
    $().gallery({
        current: [".show_images_1",".show_images_1_img"],
        left: [".show_images_2",".show_images_2_img"],
        right: [".show_images_3",".show_images_3_img"],
        none: [".show_images_4",".show_images_4_img"],
        duration: 600,
        start: function() {
            $(".header_text").fadeOut(150);
        },
        end: function() {
            $(".header_text").fadeIn(150);
        },
        autoChange : true,
        changeTimeout: 2000,
        stopTarget : ".show_images_list_li"
    });
});