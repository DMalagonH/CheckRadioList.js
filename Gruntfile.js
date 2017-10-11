'use strict';

module.exports = function (grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        concat: {
            js: {
                src: [
                    'src/radio-list.js',
                    'src/checkbox-list.js'
                ],
                dest: 'build/checkradiolist.join.js'
            }
        },

        uglify: {
            js: {
                src: 'build/checkradiolist.join.js',
                dest: 'dist/checkradiolist.min.js'
            }
        },
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['concat', 'uglify']);
};
