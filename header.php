<!DOCTYPE html>
<html class="no-js" lang="en">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title><?php wp_title(''); ?></title>

        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <link href="/favicon.ico" rel="icon">

        <!--[if (gte IE 6)&(lte IE 8)]>
            <script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
            <script src="//cdnjs.cloudflare.com/ajax/libs/selectivizr/1.0.2/selectivizr-min.js"></script>
        <![endif]-->

        <?php wp_head(); ?>
    </head>

    <body <?php body_class(); ?>>

        <div id="container">
            <header class="header" role="banner">
                <div class="wrap">
                    <h1 id="logo">
                        <a href="<?php echo home_url(); ?>" rel="nofollow">
                            <?php bloginfo('name'); ?>
                        </a>
                    </h1>

                    <nav role="navigation">
                        <?php nango_main_nav(); ?>
                    </nav>
                </div>
            </header>
