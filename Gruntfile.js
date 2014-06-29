"use strict";

// Boilerplate stuff, just go with the flow
module.exports = function(grunt) {
    // load all grunt tasks matching the `grunt-*` pattern
    // https://github.com/sindresorhus/load-grunt-tasks
    require('load-grunt-tasks')(grunt);

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        connect: {
            server: {
                options: {
                    port: 9000,
                    hostname: '0.0.0.0',
                    livereload: true
                }
            }
        },

        watch: {
            options: {
                livereload: true
            },
            scripts: {
                files: ['dev/js/**/*.js'],
                tasks: ['concat', 'uglify'],
                options: {
                    spawn: false
                }
            },
            css: {
                files: ['dev/sass/**/*.scss', 'images/icons/*.png', 'images/icons/*.jpg'],
                tasks: ['compass', 'cssmin'],
                options: {
                    spawn: false
                }
            }
        },

        concat: { // Task
            dist: { // Target
                // Compact format
                src: ['dev/js/libs/*.js', 'dev/js/plugins/*.js', 'dev/js/custom/*.js'],
                dest: 'release/js/scripts.js'
            }
        },

        uglify: {
            // Task level options
            options: {
                banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
                    '<%= grunt.template.today("yyyy-mm-dd") %> */ \n',
            },
            dist: {
                // Files object format
                files: {
                    // files: {dest1: src1, dest2: ['src2']}
                    'release/js/scripts.min.js': ['release/js/scripts.js']
                }
            }
        },

        compass: {
            dist: {
                // Target level options (overrides task level options)
                options: {
                    sassDir: 'dev/sass',
                    cssDir: 'release/css',
                    imagesDir: 'images',
                    httpPath: '/wp-content/themes/<%= pkg.name %>',
                }
            }
        },

        cssmin: {
            dist: {
                options: {
                    banner: '/*! \n' +
                        'Theme Name: <%= pkg.name %> \n' +
                        'Description: Theme for <%= pkg.name %> \n' +
                        'Author: Prashant Palikhe \n' +
                        'Author URI: http://www.prashantpalikhe.com \n' +
                        'Version:  <%= pkg.version %>\n' +
                        '*/\n'
                },
                // Files array format
                files: [
                    {src: ['release/css/style.css'], dest: 'style.css'}
                ]
            }
        }
    });

    // Default task
    grunt.registerTask('default', []);
    grunt.registerTask('dev', ['connect', 'watch']);
};
