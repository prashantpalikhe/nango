<?php

add_action('after_setup_theme', 'nango_setup_theme', 16);

function nango_setup_theme() {
    add_action('init', 'nango_head');

    add_action('wp_enqueue_scripts', 'nango_enqueue_scripts_and_styles', 999);

    nango_theme_support();

    // add_action('widgets_init', 'nango_register_sidebars');
    add_action('widgets_init', 'nango_unregister_default_wp_widgets');
}

function nango_head() {
     // category feeds
    remove_action( 'wp_head', 'feed_links_extra', 3 );
    // post and comment feeds
    remove_action( 'wp_head', 'feed_links', 2 );
    // EditURI link
    remove_action( 'wp_head', 'rsd_link');
    // windows live writer
    remove_action( 'wp_head', 'wlwmanifest_link');
    // index link
    remove_action( 'wp_head', 'index_rel_link');
    // previous link
    remove_action( 'wp_head', 'parent_post_rel_link', 10, 0 );
    // start link
    remove_action( 'wp_head', 'start_post_rel_link', 10, 0 );
    // links for adjacent posts
    remove_action( 'wp_head', 'adjacent_posts_rel_link_wp_head', 10, 0 );
    // WP version
    remove_action( 'wp_head', 'wp_generator');
}

function nango_enqueue_scripts_and_styles()
{
    if (!is_admin()) {
        wp_register_script(
            'scripts',
            get_template_directory_uri() . '/release/js/scripts.min.js',
            array(),
            false,
            true
        );

        wp_enqueue_script('scripts');

        wp_register_style(
            'styles',
            get_template_directory_uri() . '/style.css',
            array(),
            false,
            'all'
        );

        wp_enqueue_style('styles');
    }
}

function nango_theme_support() {
    add_theme_support('post-thumbnails');
    set_post_thumbnail_size(125, 125, true);

    add_theme_support('automatic-feed-links');

    // adding post format support
    add_theme_support( 'post-formats',
        array(
            'aside',             // title less blurb
            'gallery',           // gallery of images
            'link',              // quick link to other site
            'image',             // an image
            'quote',             // a quick quote
            'status',            // a Facebook like status update
            'video',             // video
            'audio',             // audio
            'chat'               // chat transcript
        )
    );

    // wp menus
    add_theme_support( 'menus' );

    register_nav_menu('main-nav', __('The Main Menu', 'nango'));
}


function nango_unregister_default_wp_widgets()
{
    unregister_widget('WP_Widget_Pages');
    unregister_widget('WP_Widget_Calendar');
    unregister_widget('WP_Widget_Archives');
    unregister_widget('WP_Widget_Links');
    unregister_widget('WP_Widget_Meta');
    unregister_widget('WP_Widget_Search');
    unregister_widget('WP_Widget_Text');
    unregister_widget('WP_Widget_Categories');
    unregister_widget('WP_Widget_Recent_Posts');
    unregister_widget('WP_Widget_Recent_Comments');
    unregister_widget('WP_Widget_RSS');
    unregister_widget('WP_Widget_Tag_Cloud');
}

function nango_main_nav() {
    wp_nav_menu(array(
        'container'       => false,
        'menu'            => __( 'The Main Menu', 'nango' ),
        'menu_class'      => 'nav nav-main',
        'theme_location'  => 'main-nav',
    ));
}
