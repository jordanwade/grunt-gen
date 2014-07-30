module.exports = function(grunt) {
  grunt.initConfig({
    haml: {
      dist: {
        files: {
          'demo.html': 'demo.haml',
        }
      }
    },
    watch: {
      html: {
        files: ['*.haml'],
        tasks: ['haml']
      }
    }
  });

  // Load the npm installed tasks
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-haml');
  grunt.registerTask('default', ['haml','watch']);
};
