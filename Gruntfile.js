module.exports = function(grunt) {
  'use strict';

  var tasks = [
    'grunt-contrib-concat',
    'grunt-contrib-jshint',
    'grunt-contrib-watch'
  ];

  var config = {};

  //======================================================
  // Concat Task
  config.concat = {};

  config.concat.dev = {
    src: [
      'public/components/jquery/dist/jquery.js',
      'public/components/underscore/underscore.js',
      'public/components/backbone/backbone.js',
      'public/js/chat/boot.js',
      'public/js/models/**.js',
      'public/js/chat/models/**.js',
      'public/js/chat/collections/**.js',
      'public/js/chat/views/**.js',
      'public/js/chat/utils/**.js'
    ],
    dest: 'public/js/chat.dev.js'
  };

  //======================================================
  // JSHint Task
  config.jshint = {};

  config.jshint.dev = {
    files: {
      src: ['public/js/chat/**/**.js']
    }
  };

  //======================================================
  // Watch Task
  config.watch = {
    scripts: {
      files: ['public/js/chat/**/**.js'],
      tasks: ['default'],
      options: {
        spawn: false
      }
    }
  };

  //======================================================
  // Grunt configuration
  grunt.initConfig(config);
  tasks.forEach(grunt.loadNpmTasks);

  grunt.registerTask('default', ['jshint:dev', 'concat:dev']);
};
