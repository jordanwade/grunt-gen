module.exports = function(grunt) {
  grunt.initConfig({
    sass: {
      dist: {
        files: {
          'app/css/application.css': 'app/sass/application.sass'
        }
      }
    },
    watch: {
      compile: {
        files: ['*.sass'],
        tasks: ['sass']
      }
    }
  });

  // Load the npm installed tasks
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.registerTask('default', ['watch']);
};
