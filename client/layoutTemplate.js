Template.topnavigation.events({
  'click .js-card-add': function (event) {
      $("#card_add_form").modal('show');
      //event.preventDefault();
  },//end of click .js-card-add
  'click .js-import-card-form':function(event){
    console.log("importing File");
    $("#cards-import-form").modal('show');
  }
});//end of topnavigation Template
Accounts.ui.config({
    passwordSignupFields:"USERNAME_AND_EMAIL"
});
Accounts.onLogin(function(){
  Router.go("/overview");
});
Hooks.onLoggedOut = function(){
  Router.go("/");
};
