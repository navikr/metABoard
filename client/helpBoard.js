Template.helpBoard.helpers({
  helpCards:function(){
    return Cards.find({stage:StageEnum.Help, isDeleted: {$ne:true}}, {sort:{createdOn:-1}})  ;
  }
});//end of Template helpBoard helper

Template.helpBoard.onRendered(function() {
    var helpBoardInstance = this;
    helpBoardInstance.$('#helpBoard').droppable({
    drop: function(evt, ui) {
      if(Meteor.user())
      {
        //var cardDetail=getCardDetails(ui.draggable.data('id'));
        //var carDetail1=cardDetail(ui.draggable.data('id'));
        Session.set("CardId", ui.draggable.data('id'));
        Session.set("Stage",StageEnum.Help);
        $("#cardDetailForm").modal('show');
        //Router.go('/cardDetailForm');
        //Cards.update({_id:ui.draggable.data('id')},{$set:{stage:StageEnum.Help}});
      }else {
      Bert.alert('Please login to make changes', 'danger');
      }
    }
    });
  });//end of Template helpBoard onRendered

  Template.helpBoard.events({
    "mousedown .draggable": function(event){
      if(event.button==2){
        var cardInstance=this;
        Session.set("DeleteCardId",this._id);
        $('.context').contextmenu();
        //console.log("right clicked on card");
      }
    }
  });
