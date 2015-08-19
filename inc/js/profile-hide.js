jQuery(document).ready(function($) {

    // Hide everything
    $('#your-profile').find('*').addClass('js-hide');

    // Unhide required elements
    $('h3:nth-of-type(2), h3:nth-of-type(3), h3:nth-of-type(4), h3:nth-of-type(5)').removeClass('js-hide');
    $('.form-table:nth-of-type(2), .form-table:nth-of-type(2) *').removeClass('js-hide');

    $('.form-table:nth-of-type(3), .form-table:nth-of-type(3) *').removeClass('js-hide');

    $('.user-url-wrap, .user-aim-wrap, .user-yim-wrap, .user-jabber-wrap, .user-googleplus-wrap, .user-twitter-wrap, .user-facebook-wrap, .user-author_facebook-wrap, .user-author_twitter-wrap, .user-author_linkedin-wrap, .user-author_dribble-wrap, .user-author_gplus-wrap, .user-author_custom-wrap').addClass('js-hide');

    $('.form-table:nth-of-type(4), .form-table:nth-of-type(4) *').removeClass('js-hide');

    $('.form-table:nth-of-type(5), .form-table:nth-of-type(5) *').not('tr:nth-of-type(1), tr:nth-of-type(n+4)').removeClass('js-hide');



});
