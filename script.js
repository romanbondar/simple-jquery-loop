jQuery(document).ready(function(){
    jQuery('.widget_athemes-featured-posts-type-a .featured-item a').each(function(){
        let link = jQuery(this).attr('href')
        let item = jQuery(this).parents('.featured-item')
        item.wrap('<a href=' + link + '></a>');
    });

    jQuery('.widget_athemes-multiple-cats-posts .post a').each(function(){
        let link = jQuery(this).attr('href')
        let item = jQuery(this).parents('.post img')
        item.wrap('<a href=' + link + '></a>');
    });
});
