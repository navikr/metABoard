Router.configure({
  layoutTemplate:"AgileBoardTemplate"
});

Router.route('/', function () {
  this.render('topnavigation', {
    to:"ABHeader"
  });
  this.render('home', {
    to:"ABBody"
  });
});
Router.route('/overview', function () {
  this.render('topnavigation', {
    to:"ABHeader"
  });
  this.render('container', {
    to:"ABBody"
  });
});
Router.route('/reports', function(){
  this.render('topnavigation', {
    to:"ABHeader"
  });
  this.render('reports', {
    to:"ABBody"
  });
});
Router.route('/admin', function(){
  this.render('topnavigation', {
    to:"ABHeader"
  });
  this.render('admin', {
    to:"ABBody"
  });
});
Router.route('/pBoard', function(){
  this.render('topnavBar', {
    to:"ABHeader"
  });
  this.render('personalBoard', {
    to:"ABBody"
  });
});
/*Template.registerHelper("UpdateCardStage", function()
{
  id=Session.get("CardId");
  stage=Session.get("Stage");
  Cards.update({_id:id},{$set:{stage:stage}});
});*/
