Template.rightclickcontextmenu.events({
  "click .js-context-card-delete":function(){
    if(Meteor.user())
    {
      var cardIdToDel=Session.get("DeleteCardId");
      //console.log("Deleting card " + cardIdToDel);
      deleteCard(cardIdToDel);
    }else {
      Bert.alert('Ugh!! login to make any change', 'warning');
    }

  }
});
