'use strict'

module.exports = function (grunt) {
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    connect: {
      server: {
        options: {
          port: 9000,
          hostname: 'localhost',
          livereload: 35729,
          base: 'app'
        }
      }
    },

    watch: {
      livereload: {
        options: {
          livereload: '<%= connect.server.options.livereload %>'
        },
        files: [
          'app/{,*/}*.html'
        ]
      }
    }
  });

  grunt.registerTask('server', [
    'connect:server',
    'watch'
  ]);
}