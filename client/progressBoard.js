Template.progressBoard.helpers({

  progressCards: function(){
  return Cards.find({stage:StageEnum.Progress, isDeleted: {$ne:true} }, {sort:{createdOn:-1}})  ;
}
});//end of Template progressBoard helpers

Template.progressBoard.onRendered(function() {
    var progressBoardInstance = this;
  //  Session.setDefault("CardId", ui.draggable.data('id'));
    progressBoardInstance.$('#progressBoard').droppable({
    drop: function(evt, ui) {
      if(Meteor.user())
      {
            Session.set("CardId", ui.draggable.data('id'));
            Session.set("Stage",StageEnum.Progress);
            $("#cardDetailForm").modal('show');
            //console.log(Session.get("CardId"));
            //console.log("In Drop function of Progress Board");
            //  Cards.update({_id:ui.draggable.data('id')},{$set:{stage:StageEnum.Progress}});
          }else {
          Bert.alert('Please login to make changes', 'danger');
          }
    }
    });
  });//end of Template Progress onRendered

  Template.progressBoard.events({
    "mousedown .draggable": function(event){
      if(event.button==2){
        var cardInstance=this;
        Session.set("DeleteCardId",this._id);
        $('.context').contextmenu();
        //console.log("right clicked on card");
      }
    }
  });
