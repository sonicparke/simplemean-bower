module.exports = function(grunt) {

  // Configuration goes here
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    // Project settings
    yeoman: {
      // configurable paths
      app: require('./bower.json').appPath || 'app',
      dist: 'dist'
    },
    useminPrepare: {
      html: '<%= yeoman.app %>/views/index.html',
      options: {
        root: '<%= yeoman.app %>',
        dest: '<%= yeoman.dist %>'
      }
    },
    usemin: {
      html:['<%= yeoman.dist %>/index.html']
    },
    copy: {
      task0: {
        src: '<%= yeoman.app %>/views/index.html',
        dest: '<%= yeoman.dist %>/views/index.html'
      }
    }


  });

  // Load plugins here
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-usemin');

  // Define your tasks here
  grunt.registerTask('build',[
      'copy:task0',
      'useminPrepare',
      'usemin',
      'uglify',
      'usemin',
    ])

};