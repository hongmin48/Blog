(function () {
    /**
     * 菜单栏浮上去就显示
     */
    $('.navbar-nav').on('mouseenter', '.dropdown-toggle', function() {
        $(this).parent().addClass('open');
        $(this).attr('aria-expanded', true);
        $('.dropdown-menu').show()
    }).on('mouseleave', '.dropdown', function() {
        $(this).removeClass('open');
        $(this).find('.dropdown-toggle').attr('aria-expanded', false);
        $('.dropdown-menu').hide()
    });
    /**
     * 搜索框默认值显示
     */
    $(document).ready(function () {
        var vdefault = $('.form-control').val();
        $('.form-control').focus(function () {
            if ($(this).val() == vdefault) {
                $(this).val("");
            }
        }).blur(function () {
            if ($(this).val() == "") {
                $(this).val(vdefault);
            }
        })
    })
})(jQuery)