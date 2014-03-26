module.exports = function(grunt) {
  'use strict';

  var tasks = [
    'grunt-contrib-concat'
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

  grunt.initConfig(config);
  tasks.forEach(grunt.loadNpmTasks);

  grunt.registerTask('default', ['concat:dev']);
};
