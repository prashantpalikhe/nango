"use strict";

// Boilerplate stuff, just go with the flow
module.exports = function(grunt) {
    // load all grunt tasks matching the `grunt-*` pattern
    // https://github.com/sindresorhus/load-grunt-tasks
    require('load-grunt-tasks')(grunt);

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        watch: {
            files: ['dev/js/**/*.js', 'dev/sass/**/*.scss', 'images/icons/*.png', 'images/icons/*.jpg'],
            tasks: ['concat', 'concurrent:target1', 'cssmin']
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
        },

        concurrent: {
            target1: {
                tasks: ['uglify', 'compass'],
                options: {
                    limit: 4
                }
            }
        }
    });

    // Default task
    grunt.registerTask('default', []);
    // grunt.registerTask('default', ['concat', 'uglify', 'compass', 'cssmin']);
};
