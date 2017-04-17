//adminSide Menu events
Template.adminSideMenu.events({
  "click .js-admin-createUser":function(){
    $("#user-add-form").modal('show');
  }
});
