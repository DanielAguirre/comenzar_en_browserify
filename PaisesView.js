module.exports = Backbone.View.extend({
  tagName:'p',  
  initialize:function() {
    this.template = _.template($("#paisTemplate").html());
  },

  render: function() {
    var data = this.model,
    html = this.template(data);
    this.$el.html(html);
  }
});
