module.exports = function(grunt) {
  grunt.initConfig({
    sass: {
      dist: {
        files: {
          'app/css/application.css': 'app/sass/application.sass'
        }
      }
    }
  });

  // Load the npm installed tasks
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.registerTask('default', ['sass']);
};
