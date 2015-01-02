module.exports = function (grunt) {
    grunt.initConfig({
      watch:{
        scripts:{
          files:['./main.js'],
          tasks: ['browserify'],
        }
      },
      browserify:{
        client: {
          src: ['./main.js'],
          dest: './bundle.js',
        }
      }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-browserify');

    grunt.registerTask('default',['watch']);
}
