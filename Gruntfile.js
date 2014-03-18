module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        watch: {
            files: ['dev/js/**/*.js', 'dev/sass/**/*.scss', 'images/icons/*.png', 'images/icons/*.jpg'],
            tasks: 'default'
        },

        concat: {
            dist: {
                src: ['dev/js/libs/*.js', 'dev/js/plugins/*.js', 'dev/js/custom/*.js'],
                dest: 'release/js/scripts.js'
            }
        },

        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
                    '<%= grunt.template.today("yyyy-mm-dd") %> */ \n',
            },
            dist: {
                files: {
                    'release/js/scripts.min.js': ['release/js/scripts.js']
                }
            }
        },

        compass: {
            dist: {
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

                files: {
                    'style.css': ['release/css/style.css']
                }
            }
        }
    });

    // Default task
    grunt.registerTask('default', ['concat', 'uglify', 'compass', 'cssmin']);

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
};
