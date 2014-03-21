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
          base: 'app',
          keepalive: true
        }
      }
    }
  });

  grunt.registerTask('server', ['connect']);
}