module.exports = function(grunt) {
  'use strict';

  var tasks = [
    'grunt-contrib-concat',
    'grunt-contrib-jshint'
  ];

  var config = {};

  //======================================================
  // Concat Task
  config.concat = {};

  config.concat.dev = {
    src: [
      'public/components/jquery/dist/jquery.js',
      'public/components/underscore/underscore.js',
      'public/components/backbone/backbone.js'
    ],
    dest: 'public/js/chat.dev.js'
  };

  //======================================================
  // JSHint Task
  config.jshint = {};

  config.jshint.dev = {
    files: {
      src: ['public/js/**/**.js']
    }
  };

  //======================================================
  // Grunt configuration
  grunt.initConfig(config);
  tasks.forEach(grunt.loadNpmTasks);

  grunt.registerTask('default', ['jshint:dev', 'concat:dev']);
};
